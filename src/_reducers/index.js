import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from './user_reducer';

const persistConfig = {
    key: 'root',
    storage,
  }	// 추가
  
  const rootReducer = combineReducers({
    user,
  })

// export default rootReducer;

export const selectUser = (state) => state.user.user;
const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
