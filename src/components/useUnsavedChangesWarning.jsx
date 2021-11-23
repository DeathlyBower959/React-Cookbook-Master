import { useState, useEffect } from 'react'

const useUnsavedChangesWarning = (message = "Are you sure you want to discard changes?") => {
    const [isDirty, setIsDirty] = useState(false)

    useEffect(() => {
        window.onbeforeunload = isDirty && (() => message)

        return () => [
            window.onbeforeload = null
        ]
    }, [isDirty])

    return [() => setIsDirty(true), () => setIsDirty(false)]
}

export default useUnsavedChangesWarning
