import { CART_DATA, GET_LIST } from "./constants"

export const getData = () => {
    return (dispatch) => {
        fetch(`https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6`)
            .then(response => response.json())
            .then(state =>  dispatch({
                type: GET_LIST,
                payload: state
            }));
       
    }
}

export const addtoCart = (data) => {
    return (dispatch) => {
        dispatch({
            type: CART_DATA,
            payload: data
        })
    }
}

