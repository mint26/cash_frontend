import { ADD_PERSONAL_INFORMATION } from "../actionTypes";

const initialState = {
  data: {},
};

export default function PersonalInformationReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case ADD_PERSONAL_INFORMATION: {
      console.log("test", action.payload);
      return Object.assign({}, state, {
        data: action.payload,
      });
    }
    default:
      return state;
  }
}
