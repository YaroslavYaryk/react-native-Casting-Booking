import User from "../../models/User";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const READ_USER = "READ_USER";
import { HOST, PORT } from "../../constants/server";

export const fetchUserData = () => {
    try {
        return async (dispatch, getState) => {
            const token = getState().auth.token;
            console.log("dshjkakdkasn");
            const response = await fetch(
                `${HOST}:${PORT}/users/api/user_profile/`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        Authorization: `Token ${token}`,
                    },
                }
            );

            if (!response.ok) {
                const errorResData = await response.json();
                console.log(errorResData);
                let message = "Something went wrong!";
                if (errorResData.non_field_errors) {
                    message = errorResData.non_field_errors[0];
                }

                throw new Error(message);
            }

            const resData = await response.json();
            const userDetails = new User(
                resData.id,
                resData.email,
                resData.first_name,
                resData.last_name,
                resData.picture,
                resData.phone,
                resData.driver_licens_classes,
                resData.birthdate,
                resData.is_active,
                resData.staff,
                resData.admin
            );
            console.log(userDetails);
            dispatch({
                type: READ_USER,
                userDetails: userDetails,
            });
        };
    } catch (err) {
        throw err;
    }
};
