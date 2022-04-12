import React from "react";
import { RxCollection, RxDocument } from "rxdb";
import { UserMethodsType } from "./UserMethodsType";
import { UserPropsType } from "./UserPropsType";


export type UserDocument = RxDocument<UserPropsType, UserMethodsType>;

export type UserCollectionMethodsType = {
  countAllDocuments: () => Promise<number>;
};

export type UserCollectionType = RxCollection<UserPropsType, UserMethodsType, UserCollectionMethodsType>;


