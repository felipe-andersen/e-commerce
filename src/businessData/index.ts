import React from "react";
import galeryImg from "./galeryImg";
import hotListProducts, { HighlightedProductProtocol, hotListProductsType } from "./hotListProducts/hotListProducts";
import productCategoriesList, { ProductCategoriesListType } from "./ProductCategoriesList.ts";
import topSearchList, { TopSearchListType } from "./topSearchList";


class BusinessData {
    productCategoriesList: string[] = productCategoriesList[0]; 
    topSearchList: string[] = topSearchList[0];
    hotListProducts: HighlightedProductProtocol[] = hotListProducts[0]
    input_error: string = "error";
    galeryImg: string[] = galeryImg[0]

    constructor(lang:langListType) {
      this.productCategoriesList = productCategoriesList[0];
      this.topSearchList = topSearchList[0];
      this.hotListProducts = hotListProducts[0]
      this.input_error = "invalid"
      this.galeryImg = galeryImg[0]
    }
}

type langListType = "ptBR" | 'en'

export default BusinessData

