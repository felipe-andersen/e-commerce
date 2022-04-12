import React from "react";
import { RxCollectionCreator, RxSchema } from "rxdb";

export type CollectionType = RxCollectionCreator;


interface CollectionCreatorProtocol {
  collection?: CollectionType
  schema?: any
};

export default CollectionCreatorProtocol

