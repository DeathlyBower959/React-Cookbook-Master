import React from 'react'
import { Alert } from 'react-bootstrap';
import RecipeTile from './RecipeTile'

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const RecipeList = ({ setRecipes, filteredRecipes, deleteRecipe }) => {
    const handleDragEnd = (res) => {
        if (!res.destination) return

       const items = Array.from(filteredRecipes)
       const [reorderedItem] = items.splice(res.source.index, 1);
       items.splice(res.destination.index, 0, reorderedItem)

       setRecipes(items)
    }

    return (
        <div>
            {filteredRecipes.length > 0 ? (
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="recipeListDrop">
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {filteredRecipes.map((recipe, index) => {
                                    return (
                                        <Draggable key={recipe.id} draggableId={recipe.id} index={index}>
                                            {(provided) => (
                                                <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                    <RecipeTile recipe={recipe} deleteRecipe={deleteRecipe} />
                                                </div>
                                            )}
                                        </Draggable>
                                    )
                                })}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            ) : (
                <Alert style={{ marginTop: '15px' }} variant="danger">
                    <Alert.Heading>Hmm...</Alert.Heading>
                    <p>Seems like there are no recipes with that name/tag!</p>
                </Alert>
            )}
            <div style={{ marginTop: '20px' }} />

        </div>
    );
}

export default RecipeList;
