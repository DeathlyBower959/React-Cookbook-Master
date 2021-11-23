import { Link } from 'react-router-dom'



import Search from './Search';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Home({ recipes, setRecipes }) {

    const deleteRecipe = (id) => {
        setRecipes(recipes.filter(recipe => recipe.id !== id))
    }

    const noRecipeView = (
        <div
            style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
            <Alert variant="danger">
                <Alert.Heading>Hmm...</Alert.Heading>
                Seems like you have no recipes! Try creating one below...
            </Alert>
            <Link to="/create">
                <Button>New Recipe</Button>
            </Link>
        </div >
    )

    const recipeList = (
        <>
            <div
                style={{
                    width: '75%',
                    margin: `10px auto 10px auto`,
                    display: 'block'
                }}>

                <div style={{ display: 'flex', marginTop: "30px", justifyContent: 'center', alignItems: 'center' }}>
                    <img src='./logo1024.png' width='64px' height='64px' />
                    <h1 style={{ textAlign: 'center' }}>The Cookbook</h1>
                    <img src='./logo1024.png' width='64px' height='64px' />
                </div>
            </div>
            <Search deleteRecipe={deleteRecipe} recipes={recipes}></Search>
        </>
    )

    return (
        recipes.length === 0 ? noRecipeView : recipeList
    );
}

export default Home
