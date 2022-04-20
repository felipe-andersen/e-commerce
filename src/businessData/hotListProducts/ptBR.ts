import BusinessData from "..";

const ptBR: HighlightedProductProtocol[] = [
    {  
      productName: "",
      id:""
    },
    {  
      productName: "",
      id:""
    },
];

type Product =  {
  id: string
}

export interface HighlightedProductProtocol extends Product {
  productName: string,
  imgURI?: string
};

export default ptBR