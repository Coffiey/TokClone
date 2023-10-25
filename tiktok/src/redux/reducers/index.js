import { combineReducers } from "redux";
import { auth } from "./auth";
import { posts } from "./posts";
import { model } from "./model";

const Reducers = combineReducers({ auth, posts, model });

export default Reducers;
