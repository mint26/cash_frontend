import { DATA_REDUCER } from "../actionTypes";

const initialState = {
  inputData: {
    expenses: [
      {
        newExpenseName: "",
        newExpenseAmount: 100,
        newAgeFrom: 4,
        newAgeTo: 19,
        newRate: 0.0252,
      },
    ],
    incomes: [
      {
        newIncomeName: "",
        newIncomeAmount: 220,
        newAgeFrom: 4,
        newAgeTo: 20,
        newRate: 0.042,
        newBonus: 2,
      },
    ],
    personalInformation: {
      startingAge: 3,
      startingSaving: 5000,
      retirementAge: 12,
      lifeExpectancy: 20,
      investmentPercentage: 0.3,
    },
    housingInfo: {
      housePrice: 2500,
      targetAge: 4,
      houseInterestRate: 0.026,
      loanLength: 15,
      downPayment: 0.1,
    },
    rates: {
      housePriceIndex: 0.0596,
      investmentRate: 0.1,
      bankInterestRate: 0.01,
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
  console.log("checking action", action);
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
