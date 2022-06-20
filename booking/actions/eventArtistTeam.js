import EventArtistTeam from "../../models/EventArtistTeam";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const READ_EVENT_ARTIST_TEAM = "READ_EVENT_ARTIST_TEAM";
import { HOST, PORT } from "../../constants/server";

export const fetchEventArtistTeam = (eventId) => {
    try {
        return async (dispatch, getState) => {
            const token = getState().auth.token;
            const response = await fetch(
                `${HOST}:${PORT}/event/api/list/${eventId}/artist_team/`,
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
            const loadedArtistEventTeam = [];
            for (const key in resData) {
                loadedArtistEventTeam.push(
                    new EventArtistTeam(
                        resData[key].id,
                        resData[key].name,
                        resData[key].email
                    )
                );
            }
            dispatch({
                type: READ_EVENT_ARTIST_TEAM,
                eventArtistTeam: loadedArtistEventTeam,
            });
        };
    } catch (err) {
        throw err;
    }
};
