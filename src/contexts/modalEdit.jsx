import { React, createContext, useState } from "react";

const initialState = {
    name: '',
    value: '',
    description: '',
    brand: '',
    qt: '',
    url_img: ''
}

export const EditContext = createContext({})
export const EditProvider = ({children}) => {

    const [editing, setEditing] = useState({...initialState})

    const updateState = (field,data) => {
        setEditing({...Object.assign(editing, { [field]: data }) })
    }

    const startState = (data) => {
        console.log(data)
        setEditing(data)
    }

    const onFormSubmit = (event, data) => {
        event.preventDefault()
        startState(data)
    }

    const state = {
        editing,
        updateState,
        onFormSubmit
    }

    return <EditContext.Provider value={state}>{children}</EditContext.Provider>
}

