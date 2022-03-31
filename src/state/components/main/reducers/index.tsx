import *  as React from "react";


export interface IActions {
  type: string;
  payload: IMain
};

export interface IMain {
  index: number
}

const main_INITIAL_STATE:IMain  = {
  index: 0
}

export const mainStateReducer = (state:IMain = main_INITIAL_STATE, action:IActions) => {
  switch (action.type){
    case "SET_MAIN":
      return {...state};

    case "SET_INDEX":
      return {...state, ...action.payload};

    default:  
      return {...state}
  };
}