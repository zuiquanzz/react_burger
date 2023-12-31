import {getAllIngredients} from "../../utils/api";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST'
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS'
export const GET_INGREDIENTS_FAILURE = 'GET_INGREDIENTS_FAILURE'

export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT'
export const SORT_STUFF = 'SORT_STUFF'
export const CLEAR_STUFF = 'CLEAR_STUFF'

export const getIngredients = () => (dispatch) => {
    dispatch({type: GET_INGREDIENTS_REQUEST})
    getAllIngredients()
        .then(data => {
                dispatch({type: GET_INGREDIENTS_SUCCESS, payload: data.data})
            }
        )
        .catch(e => {
            dispatch({type: GET_INGREDIENTS_FAILURE})
            console.error(e)
        });
}