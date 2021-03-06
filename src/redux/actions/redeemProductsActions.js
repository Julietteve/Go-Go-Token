export const REDEEM_PRODUCTS_START = 'REDEEM_PRODUCTS_START';
export const REDEEM_PRODUCTS_SUCCESS = 'REDEEM_PRODUCTS_SUCCESS';
export const REDEEM_PRODUCTS_FAILURE = 'REDEEM_PRODUCTS_FAILURE';
export const REDEEM_PRODUCTS_RESTART_SUCCESS = 'REDEEM_PRODUCTS_RESTART_SUCCESS';

export const redeeemProductsStart = () => (
    {
        type: REDEEM_PRODUCTS_START
    }
)

export const redeemProductsSuccess = () => (
    {
        type: REDEEM_PRODUCTS_SUCCESS
    }
)

export const redeemProductsFailure = (error) => (
    {
        type: REDEEM_PRODUCTS_FAILURE,
        payload: {error}
    }
)

export const redeemProductsRestartSuccess = () => (
    {
        type: REDEEM_PRODUCTS_RESTART_SUCCESS
    }
)