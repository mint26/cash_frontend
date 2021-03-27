import { DATA_REDUCER } from "./actionTypes";
import HttpService from "../util/HttpService";

export const getProjectedValues = (inputData) => {
  return async (dispatch) => {
    const result = await HttpService.getProjectedValues(inputData);
    return dispatch({
      type: DATA_REDUCER,
      payload: result,
      inputData: inputData,
    });
  };
};
