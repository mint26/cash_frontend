import { DATA_REDUCER } from "../actionTypes";

const initialState = {
  inputData: {
    expenses: [
      {
        newExpenseName: "",
        newExpenseAmount: 1,
        newAgeFrom: 20,
        newAgeTo: 30,
        newRate: 3,
        newExpenseRate: 1,
      },
    ],
    incomes: [
      {
        newIncomeName: "",
        newIncomeAmount: 1,
        newAgeFrom: 20,
        newAgeTo: 30,
        newIncomeRate: 3,
        newBonus: 1,
      },
    ],
    personalInformation: {
      startingAge: 1,
      startingSaving: 1,
      retirementAge: 1,
      lifeExpectancy: 1,
      investmentPercentage: 1,
    },
    housingInfo: {
      housePrice: 1,
      targetAge: 1,
      houseInterestRate: 1,
      loanLength: 1,
      downPayment: 1,
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
