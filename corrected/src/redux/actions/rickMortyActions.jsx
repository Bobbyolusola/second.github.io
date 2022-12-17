//Action creators are dispatched and returning objects into reducers

import {CharacterAPI} from "../../API/API";

export const ActionTypes = {
    SET_CHARACTERS: 'SET_CHARACTERS',
    SET_INFO: 'SET_INFO',
    SET_ERROR: 'SET_ERROR',
}

export const rickMortyActions = {
    addCharacters: (characters) => ({type: ActionTypes.SET_CHARACTERS, characters}),
    addInfo: (info) => ({type: ActionTypes.SET_INFO, info}),
    setError: (error) => ({type: ActionTypes.SET_ERROR, error})
}

export const getCharactersThunk = (a, someFunc) => async (dispatch) => {// here it shows JS doesn't wait for Asynchronous actions and it returns promises
    await CharacterAPI.getCharacters("1234")
        .then((fetchData) => {
            console.log("then")
            dispatch(rickMortyActions.addCharacters(fetchData.data.results))
            dispatch(rickMortyActions.addInfo(fetchData.data.info))
            someFunc(true);
        })
        .catch(e=>{
            someFunc(false);
        })
    console.log(a);
}

// rickMortyActions.addCharacters([])
// rickMortyActions.addInfo({})