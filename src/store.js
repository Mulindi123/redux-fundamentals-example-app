import { legacy_createStore } from "redux";
import rootReducer from "./reducer";

let preloadedState
const persistedTodoString = localStorage.getItem('todos')
if (persistedTodoString) {
    preloadedState = {
        todos: JSON.parse(persistedTodoString)
    }
}

const store = legacy_createStore(rootReducer, preloadedState)

export default store