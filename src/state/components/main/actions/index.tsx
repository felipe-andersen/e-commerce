import * as React from 'react';
import { IMain } from '../reducers';






export const mainAction = (actionType: string, newState:IMain) => {
  return {
    type: actionType,
    payload: newState
  }
};