import *  as React from "react";
import { IHeaderOrganism } from "../../../templates/home/header";

export interface IActions {
  type: string;
  payload: {}
};

const initialState_homeProprietsAndAStyles:IHeaderOrganism = {
  name: 'felipe'
}

export const homeProprietsAndAStylesReducer = (state = initialState_homeProprietsAndAStyles, action:IActions) => {
  switch (action.type){
    case "SET_HOME":
      return {...state}

    default:  
      return {...state}
  };
}