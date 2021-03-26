import { DATA_REDUCER } from "../actionTypes";

const initialState = {
  inputData: {
    expenses: [
      {
        newExpenseName: "",
        newExpenseAmount: 0,
        newAgeFrom: 20,
        newAgeTo: 30,
        newRate: 3,
      },
    ],
    incomes: [
      {
        newIncomeName: "",
        newIncomeAmount: 0,
        newAgeFrom: 20,
        newAgeTo: 30,
        newRate: 3,
        newBonus: 0,
      },
    ],
    personalInformation: {
      startingAge: 0,
      startingSaving: 0,
      retirementAge: 0,
      lifeExpectancy: 0,
      investmentPercentage: 0,
    },
    housingInfo: {
      housePrice: 0,
      targetAge: 0,
      houseInterestRate: 0,
      loanLength: 0,
      downPayment: 0,
    },
    rates: {
      housePriceIndex: 1,
      investmentRate: 2,
      bankInterestRate: 3,
    },
  },
  data: {
    maximum_income_reduction: "16%",
    minimum_investment_percentage: "10%",
    minimum_investment_rate: "4%",
    potential_max_expenses: "15%",
    recommended_retirement_age: "12",
    zero_savings_age: "23",
  },
};

export default function DataReducer(state = initialState, action) {
  console.log("checking action", action.payload, action.inputData);
  console.log(JSON.stringify(action.inputData));
  switch (action.type) {
    case DATA_REDUCER: {
      return Object.assign({}, state, {
        data: action.payload,
        inputData: action.inputData,
      });
    }
    default:
      return state;
  }
}
