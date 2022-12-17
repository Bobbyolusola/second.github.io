import axios from "axios";
import {EndPoint} from "./EndPoint";

const baseUrl = 'https://rickandmortyapi.com/api'

const {REACT_APP_RICK_MORTY} = process.env

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    headers: {
        "Content-Type": "application/json",
    },
})

const tokenInstance = (token) => axios.create({
    baseURL: REACT_APP_RICK_MORTY,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
})

export const CharacterAPI = {
    getCharacters(token){
    // getCharacters(token){
        // return axios.get(baseUrl+EndPoint.characters)
        // return instance.get(baseUrl+EndPoint.characters)
        return tokenInstance(token).get(EndPoint.characters)
    }
}

export const LocationsAPI = {
    getCharacters(){
        // return axios.get(baseUrl+EndPoint.characters)
        // return instance.get(baseUrl+EndPoint.characters)
        return instance.put(EndPoint.locations, {user: 'Bobby', role: 'Student'})
    }
}

export const EpisodesAPI = {
    getCharacters() {
        // return axios.get(baseUrl+EndPoint.characters)
        // return instance.get(baseUrl+EndPoint.characters)
        return instance.put(EndPoint.episodes, {user: 'Ihor', role: 'Mentor'})
    }
}
