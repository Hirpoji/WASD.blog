import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./Slices/posts";
import { tagsReducer } from "./Slices/tags";


const rootReducer = combineReducers({
  posts: postsReducer,
  tags: tagsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
