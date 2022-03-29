import { settings } from "../config"
import axios from "axios"
export const signup = async (username, password) => {
    const url = settings.server + '/user/signup'

    let result
    try {
        result = await axios.post(url, {
            username,
            password,
        })
        result = result.data
    } catch (ex) {
        console.log(ex)
    }
    return result
}

export const signin = async (username, password) => {
    const url = settings.server + '/user/signin'

    let result
    try {
        result = await axios.post(url, {
            username,
            password,
        })
        result = result.data
    } catch (ex) {
        console.log(ex)
    }
    return result
}