import { ADD_PERSONAL_INFORMATION } from "./actionTypes";
import HttpService from "../util/HttpService";

export const getProjectedValues = (personalInfo) => {
  return async (dispatch) => {
    const result = await HttpService.getProjectedValues(personalInfo);
    return dispatch({
      type: ADD_PERSONAL_INFORMATION,
      payload: result.data,
    });
  };
};
