import React from "react";
import { RxCollectionCreator } from "rxdb";
import { schema as postSchema } from "../collections/heroCollection/schema";


type CollectionCreatorType = RxCollectionCreator;

interface CollectionListProtocol {
  postCollection?: CollectionCreatorType
  userCollection?: CollectionCreatorType
}

export class CollectionList implements CollectionListProtocol {
  public postCollection?: CollectionCreatorType 
  public userCollection?: CollectionCreatorType
}

