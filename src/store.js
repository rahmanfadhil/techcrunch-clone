import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import logger from "redux-logger";

const newsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_NEWS_FULFILLED":
      return action.payload.data.articles;
    default:
      return state;
  }
};

const reducers = combineReducers({ news: newsReducer });

const store = createStore(reducers, applyMiddleware(logger, promise()));

store.subscribe(data => console.log(data));

export default store;
