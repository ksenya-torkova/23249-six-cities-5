import {combineReducers} from "redux";
import {app} from "./app/app";
import {data} from "./data/data";
import {user} from "./user/user";

export const NameSpace = {
  APP: `APP`,
  DATA: `DATA`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.APP]: app,
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});
