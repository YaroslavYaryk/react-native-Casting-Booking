import EventTeam from "../../models/EventTeam";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const READ_EVENT_TEAM = "READ_EVENT_TEAM";
import { HOST, PORT } from "../../constants/server";

export const fetchEventTeam = (eventId) => {
    try {
        return async (dispatch, getState) => {
            const token = getState().auth.token;
            const response = await fetch(
                `${HOST}:${PORT}/event/api/list/${eventId}/event_team/`,
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
            const loadedEventTeam = [];
            for (const key in resData) {
                loadedEventTeam.push(
                    new EventTeam(
                        resData[key].id,
                        resData[key].user,
                        resData[key].user_email,
                        resData[key].role
                    )
                );
            }
            dispatch({
                type: READ_EVENT_TEAM,
                eventTeam: loadedEventTeam,
            });
        };
    } catch (err) {
        throw err;
    }
};
