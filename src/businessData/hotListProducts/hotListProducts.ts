import ptBR from "./ptBR";
const hotListProducts: hotListProductsType = [
  ptBR
];

export type hotListProductsType = HighlightedProductProtocol[][]

type Product =  {
  id: string
}

export interface HighlightedProductProtocol extends Product {
  productName: string,
  imgURI?: string
};

export default hotListProducts
