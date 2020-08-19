import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  input: {
    startingAge: { label: "Starting Age", value: 26, min: 0, max: 100 },
    retirementAge: { label: "Retirement Age", value: 65, min: 0, max: 100 },
    lifespanAge: { label: "Lifespan Age", value: 80, min: 0, max: 100 },
    initialSaving: {
      label: "Initial Saving",
      value: 0,
      min: 0,
      max: 10_00_000,
      step: 10_000,
      format: true,
    },
    salary: {
      label: "Yearly Salary",
      value: 9_20_000,
      min: 0,
      max: 1_00_00_000,
      step: 10_000,
      format: true,
    },
    savingRate: {
      label: "Percentage Salary Saved",
      value: 15,
      min: 0,
      max: 100,
    },
    salaryIncrease: {
      label: "Salary Increment % Yearly",
      value: 5,
      min: 0,
      max: 100,
    },
    investmentReturnRate: {
      label: "Investment Return",
      value: 6,
      min: 0,
      max: 100,
    },
    retirementSpending: {
      label: "Yearly Spending After Retirement",
      value: 12_00_000,
      min: 0,
      max: 1_00_00_000,
      step: 10_000,
      format: true,
    },
  },
  additionalInput: {
    houseBuyingAge: 44,
    housePrice: 61,
    min: 0,
    max: 100,
  },
  output: [],
}

const retireSlice = createSlice({
  name: 'retire',
  initialState,
  reducers: {
    setInputField: (state, action) => {
      state.input[ action.payload.field ].value = action.payload.value;
    },
    setAdditionalInputField: (state, action) => {
      state.additionalInput[ action.payload.field ] = action.payload.value;
    },
    setOutput: (state, action) => {
      state.output = action.payload;
    }
  }
})

export const { setInputField, setAdditionalInputField, setOutput } = retireSlice.actions

export default retireSlice.reducer
