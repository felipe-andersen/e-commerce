import * as React from 'react';
import { useSelector } from 'react-redux';
import { Header } from "./styles";
import { RootState } from '../../../state/components';
import { FullScreen } from '../../../libs/icons/fullScreen';
import { CartIcon } from '../../../libs/icons/cart';
import { HeartIcon } from '../../../libs/icons/heart';
import { LoginIcon } from '../../../libs/icons/login';
import { useState } from 'react';
import { SearchIcon } from '../../../libs/icons/searchIcon';
import { MenuIcon } from '../../../libs/icons/MenuIcon';
import { useEffect } from 'react';
import Persona from '../../../models/User/User';

const cart: CartType = [
  {
    product: {
      descriptionName: "T-short",
      amount: 5,
      stock: 50,
      priceUn_R$: "25,90",
      subtotal: '50,00',
      discount: '5%'
    },
    person: "Alexandre"
  }
];

interface ItemProduct {
  descriptionName: string;
  amount: number;
  priceUn_R$: string;
  subtotal: string;
  discount: string;
  stock: number
};

interface ProductInCart {
  product: ItemProduct
  person?: string
  adress? : string
  cordenate?: string
};

export type CartType = ProductInCart[];

export interface IHeaderOrganism {
  name: string
};

const adapter:HeaderProps = {
  makeYourLoginOrRegisterIDIOM: "",
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

export interface HeaderComponentProtocol {
  lang?: 'pt-BR' | 'en' | 'es';
  content: {
    myTitle: string;
  };
  setContent?: {
    setMyTitle: any;
  };
  childreen: any[]
};

const HeaderComponent = (/*props:HeaderComponentProtocol*/) => {

  let [indexToSelector, setIndexToSelector] = React.useState<number>(0);
  const [displaySearchBox, setDisplaySearchBox] = useState<boolean>(false);
  const [displayCartModal, setDisplayCartModal] = useState<boolean>(false);
  const [displayFavoriteModal, setDisplayFavoriteModal] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [editPerson, setPerson] = useState(false);

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

    useEffect(() => {
      if (displayFavoriteModal === true){
        setDisplayCartModal(false)
      }
    }, [displayFavoriteModal])

    useEffect(() => {
      if (displayCartModal === true){
        setDisplayFavoriteModal(false)
      }
    }, [displayCartModal])

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

  let dinamicValue = `Busque por ${suggestedProduct}`;
  let valueSearchInput;
  isFocus === true ? valueSearchInput = undefined : valueSearchInput = dinamicValue;

  let stock = 56;
  let counter = 1;
  const [amount, setAmount] = useState<number>(counter);

  function increment() {
    if(amount < stock) {
      setAmount((amount) => amount + 1)
    }
  };

  function decrement() {
    if(amount) {
      setAmount(amount - 1)
    }
    else if(amount == 0) {
      setAmount(amount - 0)
    }
  };

  let persona = new Persona("felipe", "Rua Cruz das Almas");
 
  let lang= "en";

  let data = {
    'ptBR': {
      edit: "Editar",
      send: "Enviar",
      inputSearch: {
        title: "Entre com uma palavra ou uma frase",
        alt: "Entre com uma palavra ou uma frase",
        placeholder: "Busque um produto"
      }
    },
    'en': {
      amount: "Amount",
      subtotal: "Subtotal",
      edit: "Edit",
      send: "Send",
      favorite: "Favorite",
      cart: 'Cart',
      price: "Price",
      product: "Product",
      increment: "Increment",
      decrement: "Decrement",
      total: "Total",
      adress: "Adress",
      view: 'View',
      remove: "Remove",
      addName: "Add name",
      inputSearch: {
        title: "Enter a word or phrase",
        alt: "Enter a word or phrase",
        placeholder: "Search for a product"
      }
    }
  }

  let fd = data['en'].edit

  return (
    <>
      <Header>
        <section className="hdr" id="hdr">
          <div className="" id="">
            <span className="logo-searchBtn" id="">
              
              <a href={"#hdr"} /*hrefLang="" media="text"*/ className="logo" id="logo" title='logo'>LOGO</a>
              <button className="searchIcon" id="searchIcon" title={"Search"} onClick={() => {}}>
                <SearchIcon/>
              </button>
            </span>
            <form>
              <input 
                onFocus={() => setIsFocus(true)}
                className="searchInput"
                value={valueSearchInput}
                datatype="search"
                aria-busy
                about=""
                alt={data['en'].inputSearch.alt}
                title={data['en'].inputSearch.title}
                translate="no"
                tabIndex={2}
                itemID=""
                form="" 
                formTarget="" 
                formEncType="" 
                formMethod="" 
                formNoValidate={true} 
                formAction="" 
                type="search" 
                placeholder={data['en'].inputSearch.placeholder}
                id='searchInput'
              />
              <input  title='audio' form="" type="color"className="audio" id=""/>
              <label  title='done' htmlFor='submit' className="submitLabel" id="submitLabel">
                <input type="submit" id="submit"/>
              </label>
              <label title='type a image' htmlFor='image' className="imageLabel" id="imageLabel">
                <input alt="" type="image" className="" id="image"/>
              </label>
            </form>
            <span className="favorite-cart-signIn-menu" id="favorite-cart-signIn">
              <button title="" className="addFavoritesBtn" id="addFavoritesBtn" onClick={() => displayFavoriteModal === false ? setDisplayFavoriteModal(true) : setDisplayFavoriteModal(false)}>
                <HeartIcon/>
              </button>
              <button title="" className="cart" id="cart" onClick={() => displayCartModal === false ? setDisplayCartModal(true) : setDisplayCartModal(false)}>
                <CartIcon/>
              </button>
              <button title={ adapter.makeYourLoginOrRegisterIDIOM } className="signIn" id="signIn">
                <LoginIcon/>
                <span className="" id="">{ adapter.makeYourLoginOrRegisterIDIOM }</span>
              </button>
              <button className="menuIcon" id="" >
                <MenuIcon/>
              </button>
            </span>
            {
              displayFavoriteModal && <span className="cartModal" id="cartModal">
              <section className="cart" id="cart">
                <div className="menu" id="menu">
                  <span className="icon-sectionTitle" id="icon-sectionTitle">
                    <span className="iconContainer" id="iconContainer">
                      <HeartIcon/>
                    </span>
                    <span  className="sectionTitle" id="sectionTitle">{data['en'].favorite}</span>
                    <button className="fullScreen" id="fullScreen">
                      <FullScreen/>
                    </button>
                  </span>
                </div>
                <div className="itemsView" id="itemsView">
                <div className="item" id="item" title={"T-short surf oceam Masculino"}>
                  <span className="" id="">
                    <div className="description" id="description" title={""}>
                      <img className="item" id="item" alt={""} src={ "https://www.des1gnon.com/wp-content/uploads/2020/03/Pexels-Banco-de-Imagens-gratis-Des1gnON.jpg"}></img>
                      <span title={"Product"}>
                        {"T-short surf oceam Masculino"}
                      </span>
                    </div>
                    <div className="price" id="price"  title={data['en'].price}>{"R$ 25,90"}</div>
                    <div className="amount" id="amount">
                      <button className="increment" id="increment" title={data["en"].increment} onFocus={() => {}}>-</button>
                      <span  title={data['en'].amount}>{amount}</span>
                      <button className="decrement" id="decrement" title={data["en"].decrement} onClick={() => amount < stock ? setAmount(amount + 1) : () => {}}>+</button>
                    </div>
                    <div className="subtotal" id="subtotal" title={data['en'].subtotal}>{"R$ 25,90"}</div>
                  </span>
                  <div title={data['en'].adress} className="address" id="address">
                    {data["en"].view}   {data["en"].remove}
                  </div>
                </div>
                <div className="item" id="item" title={""}>
                  <span className="" id="">
                    <div className="description" id="description">
                      <img className="item" id="item" alt={""}></img>
                      <span title={"any product fjjglzkfsdjlg .sjflkgjslfkgkg"}>
                        {"T-short surf oceam Masculino"}
                      </span>
                    </div>
                    <div className="price" id="price">{"R$ 25,90"}</div>
                    <div className="amount" id="amount">
                      <button className="increment" id="increment" onClick={() => increment}>-</button>
                      {amount}
                      <button className="decrement" id="decrement" onClick={() => decrement}>+</button>
                    </div>
                    <div className="subtotal" id="subtotal">{"R$ 25,90"}</div>
                  </span>
                  <div  className="address" id="address">
                    {"Ver Remover"}
                  </div>
                </div>
                </div>
                <a href={"#hdr"} className='total'>TOTAL R$ 25,90</a>
              </section>
            </span>
            }
            <span></span>

            {/* Cart modal */}

            { 
            displayCartModal && <span className="cartModal" id="cartModal">
              <section className="cart" id="cart">
                <div className="menu" id="menu">
                  <span className="icon-sectionTitle" id="icon-sectionTitle">
                    <span className="iconContainer" id="iconContainer">
                      <CartIcon/>
                    </span>
                    <span  className="sectionTitle" id="sectionTitle">{data['en'].cart}</span>
                    <button className="fullScreen" id="fullScreen">
                      <FullScreen/>
                    </button>
                  </span>
                </div>
                <div className="itemsView" id="itemsView">
                {
                  cart.map(item => (
             
                <div className="item" id="item" title={""}>
                  <span className="" id="">
                    <div className="description" id="description">
                      <img className="item" alt={""} id="item"></img>
                      <span title={"any product fjjglzkfsdjlg .sjflkgjslfkgkg"}>
                        {item.product.descriptionName}
                      </span>
                    </div>
                    <div className="price" id="price">{item.product.priceUn_R$}</div>
                  </span>
                  <div  className="address" id="address">
                    {
                    editPerson === true ? editPerson &&
                    <input type="text" placeholder={"Digite um nome ou um endereço"} value={undefined}></input>
                    :  <span>{ item.person }</span>
                    } 
                    <span className="view-remove-edit" id="productBtns">
                      <button style={{display:`${editPerson === false ? "flex" : "none"}`}}>{data["en"].view}</button>
                      <button style={{display:`${editPerson === false ? "flex" : "none"}`}}>{data["en"].remove}</button>
                      {
                        item.person === "" 
                        ?  
                        <button style={{display:`${editPerson === false ? "flex" : "none"}`}} onClick={() => editPerson === false ? setPerson(true) : setPerson(false)}>
                          Add name
                        </button> 
                        : 
                        <button title={editPerson === false ? "Edit" : "Send"} onClick={() => editPerson === false ? setPerson(true) : setPerson(false)}>
                          {editPerson === false ? data["en"].edit : data["en"].send}
                        </button>
                      }
                    </span>
                  </div>
                </div>
                  ))
                }
                </div>
              </section>
            </span>
            }
          </div>
        </section>
         <div className='searchForm' style={{display: 'none'}}>
            <form>
              <span className="SearchIcon" id="" >
                <SearchIcon/>
              </span>
              <input 
                className="searchInput"
                value={`Busque por ${suggestedProduct}`}
                datatype=""
                aria-busy
                about=""
                alt="Entre com uma palavra ou uma frase"
                title="Entre com uma palavra ou uma frase"
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
                placeholder='Busque um produto'
                id='searchInput'
              />
              <input  title='audio' form="" type="color"className="audio" id=""/>
              <label  title='done' htmlFor='submit' className="submitLabel" id="submitLabel">
                <input type="submit" id="submit"/>
              </label>
              <label title='type a image' htmlFor='image' className="imageLabel" id="imageLabel">
                <input alt="" type="image" className="" id="image"/>
              </label>
            </form>
          </div>
      </Header>
    </>
  )
};

export default HeaderComponent;

