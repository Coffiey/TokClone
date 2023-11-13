import { combineReducers } from "redux";
import { auth } from "./auth";
import { posts } from "./posts";
import { model } from "./model";
import { chat } from "./chat";

const Reducers = combineReducers({ auth, posts, model, chat });

export default Reducers;
