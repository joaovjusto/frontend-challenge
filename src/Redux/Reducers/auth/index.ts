import { IAction, IHomePage } from "@Interfaces";
import * as t from "../../types";

type IMapPayload = IHomePage.Actions.IMapPayload;

const main = (
    state = {
        name: "guest",
    },
    action: IAction<IMapPayload>
) => {
    console.log(action);

    switch (action.type) {
        case t.SET_NAME:
            return {
                ...state,
                name: action.payload,
            };
        default:
            return state;
    }
};

export default main;
