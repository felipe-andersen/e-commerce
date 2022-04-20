import * as React from 'react';


export interface BackBtnProtocol {
  data: any;
  setData?: any;
}

export const BackBtn = (props:BackBtnProtocol):JSX.Element => {
    return (
      <>
        <button title="" className="" id="" onClick={() => {}}>{props.data}</button>
      </>
    )
  }