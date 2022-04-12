import * as React from 'react';
import { useSelector } from 'react-redux';
import { Header } from "./styles";
import { RootState } from '../../../state/components';
import { FullScreen } from '../../../libs/icons/fullScreen';
import { CartIcon } from '../../../libs/icons/cart';
import { HeartIcon } from '../../../libs/icons/heart';
import { LoginIcon } from '../../../libs/icons/login';

export interface IHeaderOrganism {
  name: string
};

const adapter:HeaderProps = {
  makeYourLoginOrRegisterIDIOM: "Entre ou cadastre-se",
};

interface HeaderProps {
  makeYourLoginOrRegisterIDIOM: string;
};

const productCategoriesList_ptBR:string[] = [
  "COMBOS",
  "MENINA",
  "MENINO",
  "ADULTOS",
  "ESCOLAR",
  "OUTLET",
];

enum ProductCategoriesList_ptBR  {
  COMBOS = 'COMBOS',
  MENINA = 'MENINA',
  MENINO = 'MENINO',
  ADULTOS = 'ADULTOS',
  ESCOLAR = 'ESCOLAR',
  OUTLET = 'OUTLET',
}

let category: string;

function clickCounterByCategory(){

switch (category) {

  case productCategoriesList_ptBR[0] :
    console.log('setCounter.');
    break;

  case productCategoriesList_ptBR[1]:
    console.log('setCounter.');
    break;

  case productCategoriesList_ptBR[2]:
    console.log('setCounter.');
    break;
  
  case productCategoriesList_ptBR[3]:
    console.log('setCounter.');
    break;

  case productCategoriesList_ptBR[4]:
    console.log('setCounter.');
    break;

  case productCategoriesList_ptBR[5]:
    console.log('setCounter.');
    break;

  default:
    console.log(`setCounter.`);
  }
};

const productCategoriesList:string[] = productCategoriesList_ptBR;

const topSearchList_ptBR:string[] = [
  "moleton",
  "óculos de sol",
  "roupa de frio",
  "calça jeans",
  "T-short",
  "tênis lacoste",
  "brandilli",
  "moleton",
  "óculos de sol",
  "roupa de frio",
  "calça jeans",
  "T-short",
  "tênis lacoste",
  "brandilli",
  "óculos de sol",
  "roupa de frio",
  "calça jeans",
  "T-short",
  "tênis lacoste",
  "brandilli"
];

export const HeaderOrganism = () => {

  let [indexToSelector, setIndexToSelector] = React.useState<number>(0);
 
const randomProductList_ptBR = [
  "sapato",
  'bermuda',
  't-short',
  "brandilli"
];

const randomProductList = randomProductList_ptBR;

const topSearchList:string[] = topSearchList_ptBR;

const index = randomProductList.length - 1;

let [suggestedProduct, setSuggestedProduct] = React.useState(randomProductList[0]);

setTimeout(

  function productSuggestion (){
    
    if (indexToSelector < index) {
      setIndexToSelector(indexToSelector + 1)
      setSuggestedProduct(randomProductList[indexToSelector])
    } else {
      setIndexToSelector(0);
      setSuggestedProduct(randomProductList[indexToSelector])
    };

  }, 3000

);

const state = useSelector((state:RootState) => state);

  return (
    <>
      <Header>
        <section className="hdr" id="hdr">
          <div className="" id="">
           

            <a href={""} /*hrefLang="" media="text"*/ className="logo" id="logo" >LOGO</a>
            <form>
              <input 
                className="searchInput"
                value={`Procure por ${suggestedProduct}`}
                datatype=""
                aria-busy
                about=""
                alt=""
                translate="yes"
                tabIndex={2}
                itemID=""
               
                form="" 
                formTarget="" 
                formEncType="" 
                formMethod="" 
                formNoValidate={true} 
                formAction="" 
                type="search" 
             
              />
        
              <input  title='audio' form="" type="color"className="audio" id=""/>
              <label  title='done' htmlFor='submit' className="submitLabel" id="submitLabel">
                <input type="submit" id="submit"/>
              </label>
              <label title='type a image' htmlFor='image' className="imageLabel" id="imageLabel">
                <input alt="" type="image" className="" id="image"/>
              </label>
            </form>
            <button title={ adapter.makeYourLoginOrRegisterIDIOM } className="signup" id="signup">
              <LoginIcon/>
             { adapter.makeYourLoginOrRegisterIDIOM }
            </button>
            <span className="favorite-cart" id="favorite-cart">
              <a href="" title="" className="addFavoritesBtn" id="addFavoritesBtn">
                <HeartIcon/>
              </a>
              <button title="" className="cart" id="cart">
                <CartIcon/>
              </button>
            </span>
            <span className="cartModal" id="cacartModalrt">
              <section className="cart" id="cart">
                <div className="menu" id="menu">
                  <span className="icon-sectionTitle" id="icon-sectionTitle">
                    <button className="fullScreen" id="fullScreen">
                      <FullScreen/>
                    </button>
                    <span  className="sectionTitle" id="sectionTitle">Carrinho</span>
                  </span>
                </div>
                <div className="itemsView" id="itemsView">

                <div className="item" id="item">
                  <span className="" id="">
                    <div className="description" id="description">
                      <img className="item" id="item"></img>
                      <span title={"any product fjjglzkfsdjlg .sjflkgjslfkgkg"}>
                        {"T-short surf oceam Masculino"}
                      </span>
                    </div>
                    <div className="price" id="price">{"R$ 25,90"}</div>
                    <div className="amount" id="amount">
                      <button className="increment" id="increment">-</button>
                      {"1"}
                      <button className="decrement" id="decrement">+</button>
                    </div>
                    <div className="subtotal" id="subtotal">{"R$ 25,90"}</div>
                  </span>
                  <div title={"Rua Gongalves Dias, 21. Fdfdh"} className="address" id="address">
                    {"Rua Gongalves Dias, 21. Fdfdh"}
                  </div>
                </div>
                <div className="item" id="item">
                  <span className="" id="">
                    <div className="description" id="description">
                      <img className="item" id="item"></img>
                      <span title={"any product fjjglzkfsdjlg .sjflkgjslfkgkg"}>
                        {"T-short surf oceam Masculino"}
                      </span>
                    </div>
                    <div className="price" id="price">{"R$ 25,90"}</div>
                    <div className="amount" id="amount">
                      <button className="increment" id="increment"></button>
                      {"1"}
                      <button className="decrement" id="decrement"></button>
                    </div>
                    <div className="subtotal" id="subtotal">{"R$ 25,90"}</div>
                  </span>
                  <div title={"Rua Gongalves Dias, 21. Fdfdh"} className="address" id="address">
                    {"Rua Gongalves Dias, 21. Fdfdh"}
                  </div>
                </div>

                </div>
                <a href=""className='total'>TOTAL R$ 25,90</a>
              </section>
            </span>
         
          </div>
        </section>
        
      </Header>
    </>
  )
} 


// captura ip e pergunta se é usuário.


interface itemProduct {
  descriptionName: string;
  amount: number;
  priceUn_R$: string;
  subtotal: string;
  discount: string

}