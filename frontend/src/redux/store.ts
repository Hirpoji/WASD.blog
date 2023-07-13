import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./Slices/posts";
import { tagsReducer } from "./Slices/tags";
import { authReducer} from "./Slices/auth";

const rootReducer = combineReducers({
  posts: postsReducer,
  tags: tagsReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
