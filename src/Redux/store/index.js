import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import userReducer from "../reducers/userReducer";
import localStorage from "redux-persist/lib/storage";
import experienceReducer from "../reducers/experienceReducer";
import postsReducer from "../reducers/postsReducer";

const persistConfig = {
  storage: localStorage,
  key: "root",
};

const combinedReducer = combineReducers({
  user: userReducer,
  experience: experienceReducer,
  posts: postsReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

const persistedStore = persistStore(store);

export { store, persistedStore };
