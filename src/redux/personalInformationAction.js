import { ADD_PERSONAL_INFORMATION } from "./actionTypes";
import HttpService from "../util/HttpService";

export const getProjectedValues = (personalInfo) => {
  return (dispatch) => {
    HttpService.getProjectedValues(personalInfo).then((result) => {
      console.log("getProjectedValues", result);
      dispatch({
        type: ADD_PERSONAL_INFORMATION,
        payload: result.data,
      });
    });
  };
};
