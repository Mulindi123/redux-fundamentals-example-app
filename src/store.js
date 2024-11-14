import { legacy_createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import { print1, print2, print3, loggerMiddleware, delayedMessageMiddleware } from "./exampleAddons/middleware";
// import { sayHiOnDispatch, includeMeaningOfLife } from "./exampleAddons/enhancers";

// const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)

const middlewareEnhancer = applyMiddleware(print1, print2, print3, loggerMiddleware, delayedMessageMiddleware)

const store = legacy_createStore(rootReducer, middlewareEnhancer)

export default store