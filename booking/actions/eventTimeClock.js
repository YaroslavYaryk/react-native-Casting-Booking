import EventTimeClock from "../../models/EventTimeClock";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const READ_TIMECLOCK = "READ_TIMECLOCK";
import { HOST, PORT } from "../../constants/server";

export const fetchEventTimeClock = (eventId) => {
    try {
        return async (dispatch, getState) => {
            const token = getState().auth.token;
            const response = await fetch(
                `${HOST}:${PORT}/event/api/list/${eventId}/time_clock/`,
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
                throw new Error("Something went wrong!");
            }
            const resData = await response.json();
            const eventTimeClocks = [];
            for (const key in resData) {
                eventTimeClocks.push(
                    new EventTimeClock(
                        resData[key].id,
                        resData[key].start_time,
                        resData[key].end_time,
                        resData[key].action
                    )
                );
            }
            dispatch({
                type: READ_TIMECLOCK,
                eventTimeClocks: eventTimeClocks,
            });
        };
    } catch (err) {
        throw err;
    }
};
