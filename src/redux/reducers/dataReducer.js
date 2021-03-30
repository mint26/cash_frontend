import { DATA_REDUCER } from "../actionTypes";

const initialState = {
  inputData: {
    expenses: [
      {
        newExpenseName: "Expense 1",
        newExpenseAmount: 1628,
        newAgeFrom: 31,
        newAgeTo: 85,
        newRate: 0.0252,
      },
    ],
    incomes: [
      {
        newIncomeName: "Income 1",
        newIncomeAmount: 4534,
        newAgeFrom: 31,
        newAgeTo: 64,
        newRate: 0.042,
        newBonus: 2,
      },
    ],
    personalInformation: {
      startingAge: 30,
      startingSaving: 200000,
      retirementAge: 65,
      lifeExpectancy: 80,
      investmentPercentage: 30,
    },
    housingInfo: {
      housePrice: 500000,
      targetAge: 32,
      houseInterestRate: 0.026,
      loanLength: 15,
      downPayment: 0.1,
    },
    rates: {
      housePriceIndex: 5.96,
      investmentRate: 10,
      bankInterestRate: 1,
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
