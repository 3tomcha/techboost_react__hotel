import { createStore } from "redux";
import reducer from "./reducers/index";
// import { home } from "./reducers/home";
// import reducer from "./reducers/hoteldetail";

const store = createStore(
  // home,
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
