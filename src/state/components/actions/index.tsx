import * as React from 'react';
import { IHeaderOrganism } from '../../../templates/home/header';



export enum MyActions {
  SET_HOME = 'SET_HOME'
};

const setHome = (newState:IHeaderOrganism) => {
  return {
    type: 'SET_HOME',
    payload: newState
  }
};