"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.authActions = exports.counterActions = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialCounterState = {
  counter: 0,
  showCounter: true
};
var counterSlice = (0, _toolkit.createSlice)({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment: function increment(state) {
      state.counter++;
    },
    increase: function increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrease: function decrease(state) {
      state.counter--;
    },
    toggleCounter: function toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});
var initialAuthState = {
  isAuthenticated: false
};
var authSlice = (0, _toolkit.createSlice)({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: function login(state) {
      state.isAuthenticated = true;
    },
    logout: function logout(state) {
      state.isAuthenticated = false;
    }
  }
});
var store = (0, _toolkit.configureStore)({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  }
});
var counterActions = counterSlice.actions;
exports.counterActions = counterActions;
var authActions = authSlice.actions;
exports.authActions = authActions;
var _default = store;
exports["default"] = _default;