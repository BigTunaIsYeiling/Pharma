import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Filters: {
    type: "",
    product: "",
    customer: "",
    orderDate: null,
    orderName: "",
    orderDateType: "date",
    company: "",
    purchase: "",
    typeBarcode: "",
  },
};
const FiltersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    FilterType: (state, action) => {
      state.Filters.type = action.payload;
    },
    FilterProduct: (state, action) => {
      state.Filters.product = action.payload;
    },
    FilterCustomer: (state, action) => {
      state.Filters.customer = action.payload;
    },
    FilterOrderDate: (state, action) => {
      state.Filters.orderDate = action.payload;
    },
    FilterOrderName: (state, action) => {
      state.Filters.orderName = action.payload;
    },
    FilterCompany: (state, action) => {
      state.Filters.company = action.payload;
    },
    changeOrderDateType: (state, action) => {
      state.Filters.orderDateType = action.payload;
    },
    FilterPurchase: (state, action) => {
      state.Filters.purchase = action.payload;
    },
    FilterTypeBarcode: (state, action) => {
      state.Filters.typeBarcode = action.payload;
    },
  },
});
export const FiltersReducer = FiltersSlice.reducer;
export const {
  FilterType,
  FilterCompany,
  FilterCustomer,
  FilterOrderDate,
  FilterProduct,
  FilterOrderName,
  changeOrderDateType,
  FilterPurchase,
  FilterTypeBarcode,
} = FiltersSlice.actions;
export const Filters = (state) => state.FiltersReducer.Filters;
