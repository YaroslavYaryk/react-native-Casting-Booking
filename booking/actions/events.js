// import Product from "../../models/Product";

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const READ_EVENT = "READ_EVENT";

export const fetchProducts = () => {
    try {
        return async (dispatch, getState) => {
            const userId = getState().auth.userId;
            //   const response = await fetch(
            //       "https://web-store-app-d2355-default-rtdb.firebaseio.com/products.json"
            //   );
            //   if (!response.ok) {
            //       throw new Error("Something went wrong!");
            //   }
            //   const resData = await response.json();
            //   const loadedProducts = [];
            //   for (const key in resData) {
            //       loadedProducts.push(
            //           new Product(
            //               key,
            //               resData[key].ownerId,
            //               resData[key].title,
            //               resData[key].imageUrl,
            //               resData[key].description,
            //               resData[key].price
            //           )
            //       );
            //   }
            const userEvents = [];
            dispatch({
                type: READ_EVENT,
                userEvents: userEvents.filter(
                    (elem) => elem.ownerId === userId
                ),
            });
        };
    } catch (err) {
        throw err;
    }
};
