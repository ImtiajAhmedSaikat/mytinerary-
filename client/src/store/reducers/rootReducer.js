import { combineReducers } from "redux";

import citiesReducer from "./citiesReducer";

import itineraryReducer from "./itineraryReducer";

import activityReducer from "./activityReducer";

import userReducer from './userReducer';

import commentReducer from './commentReducer'

const rootReducer = combineReducers({cities: citiesReducer,itineraries:itineraryReducer,activities:activityReducer,user:userReducer,comments:commentReducer})


export default rootReducer;