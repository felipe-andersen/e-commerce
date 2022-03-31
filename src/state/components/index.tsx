import { combineReducers, createStore } from "redux";
import { homeProprietsAndAStylesReducer } from "./reducers";
import { mainStateReducer } from "./main/reducers";


export const reducers = combineReducers({
  homeProprietsAndAStylesReducer,
  mainStateReducer
});

export type RootState = ReturnType<typeof store.getState>

export const store = createStore(reducers);

