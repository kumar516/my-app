import { CART_DATA, GET_LIST } from "../actions/constants";

export default function Reducers(state = {}, action) {
    switch (action.type) {
        case GET_LIST:
            return ({ ...state, itemlist: action.payload })
        case CART_DATA:
            return ({ ...state, cartlist: action.payload })
        default:
            return state;
    }
}