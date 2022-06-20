import EventProducts from "../../models/EventProducts";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const READ_EVENT_PRODUCTS = "READ_EVENT_PRODUCTS";
import { HOST, PORT } from "../../constants/server";

export const fetchEventProducts = (eventId) => {
    try {
        return async (dispatch, getState) => {
            const token = getState().auth.token;
            const response = await fetch(
                `${HOST}:${PORT}/event/api/list/${eventId}/rental_products/`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        Authorization: `Token ${token}`,
                    },
                }
            );
            const resData = await response.json();
            const loadedProducts = [];
            for (const key in resData) {
                loadedProducts.push(
                    new EventProducts(
                        resData[key].id,
                        resData[key].rental_products.name,
                        resData[key].rental_products.picture,
                        resData[key].price,
                        resData[key].count
                    )
                );
            }
            dispatch({
                type: READ_EVENT_PRODUCTS,
                eventProducts: loadedProducts,
            });
        };
    } catch (err) {
        throw err;
    }
};
