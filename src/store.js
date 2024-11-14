import { legacy_createStore, compose } from "redux";
import rootReducer from "./reducer";
import { sayHiOnDispatch, includeMeaningOfLife } from "./exampleAddons/enhancers";

const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)

const store = legacy_createStore(rootReducer, undefined, composedEnhancer)

export default store