import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  image: "",
  country: "",
  cities: [],
  link: " www.link.com",
};

const formSlice = createSlice({
  name: "formInputs",
  initialState: initialState,
  reducers: {
    submitForm(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.image = action.payload.image;
      state.country = action.payload.country;
      state.cities = [action.payload.cities];
      state.link = action.payload.link;
    },
    setLocalStorage(state, action) {
      localStorage.setItem("data", JSON.stringify(action.payload));
      
    },
  },
});

const apiSlice = createSlice({
  name: "apiState",
  initialState: {
    cityList: {
      cities: [""],
      countriesState: [],
    },
  },
  reducers: {
    setApiData(state, action) {
      state.cityList = action.payload.cityList;
      state.countriesState = action.payload.countriesState;
    },
  },
});
const ModalSlice = createSlice({
  name: "modalState",
  initialState: { show: false },
  reducers: {
    handleShow(state) {
      state.show = true;
    },
    handleClose(state) {
      state.show = false;
    },
  },
});
const store = configureStore({
  reducer: {
    formSlice: formSlice.reducer,
    ModalSlice: ModalSlice.reducer,
    apiSlice: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const apiActions = apiSlice.actions;
export const modalActions = ModalSlice.actions;
export const formActions = formSlice.actions;
export default store;
