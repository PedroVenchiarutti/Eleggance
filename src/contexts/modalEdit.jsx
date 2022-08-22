import { React, createContext, useEffect, useState } from "react";

const initialState = {
    name: 'a',
    value: '',
    description: '',
    category: '',
    qt: ''
}

export const EditContext = createContext({})
export const EditProvider = ({children}) => {
    const storageProduct = localStorage.getItem('produto')

    const [editing, setEditing] = useState({...initialState})

    const updateState = () => {
        setEditing(JSON.parse(storageProduct))
        console.log(editing)
    }

    const onFormSubmit = (event, data) => {
        console.log(data)
        localStorage.setItem('produto',JSON.stringify(data))
        event.preventDefault()
        updateState()
    }

    const state = {
        editing,
        onFormSubmit
    }

    return <EditContext.Provider value={state}>{children}</EditContext.Provider>
}

