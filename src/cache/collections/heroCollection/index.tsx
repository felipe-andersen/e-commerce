import React from "react";
import { RxCollection, RxDocument, RxCollectionCreator } from "rxdb";
import { HeroDocMethods } from "./methods";
import { HeroDocType } from "./types";


export type HeroDocument = RxDocument<HeroDocType, HeroDocMethods>;

export type HeroCollectionMethods = {
  countAllDocuments: () => Promise<number>;
};

export type HeroCollection = RxCollection<HeroDocType, HeroDocMethods, HeroCollectionMethods>;


