import { combineReducers } from 'redux';
import articlesReducer from './articles/reducer';

const appReducer: any = combineReducers({
  articles: articlesReducer,
});

export default appReducer;
