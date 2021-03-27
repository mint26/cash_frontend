import { DATA_REDUCER } from "../actionTypes";

const initialState = {
  inputData: {
    expenses: [
      {
        newExpenseName: "Expense",
        newExpenseAmount: 100,
        newAgeFrom: 21,
        newAgeTo: 25,
        newRate: 0.0252,
      },
    ],
    incomes: [
      {
        newIncomeName: "Income",
        newIncomeAmount: 4000,
        newAgeFrom: 21,
        newAgeTo: 25,
        newRate: 0.042,
        newBonus: 2,
      },
    ],
    personalInformation: {
      startingAge: 21,
      startingSaving: 5000,
      retirementAge: 12,
      lifeExpectancy: 80,
      investmentPercentage: 0.3,
    },
    housingInfo: {
      housePrice: 2500,
      targetAge: 4,
      houseInterestRate: 2.6,
      loanLength: 15,
      downPayment: 0.1,
    },
    rates: {
      housePriceIndex: 5.96,
      investmentRate: 0.1,
      bankInterestRate: 0.1,
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
