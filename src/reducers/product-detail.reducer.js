import * as type from '../actions/actions';

export const productDetail = (state = {}, action) => {
    switch (action.type) {
        case type.GET_PRODUCT_DETAIL:
            return { ...action.payload.product };
        case type.UPDATE_PRODUCT:
            return { ...action.payload.product }

        default:
            return state
    }
}