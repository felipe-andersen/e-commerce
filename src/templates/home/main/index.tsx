import { useDispatch, useSelector } from "react-redux";
import { ArrowIcon } from "../../../libs/icons/arrow";
import { RootState } from "../../../state/components";
import { MainActions } from "../../../state/components/main";
import { mainAction } from "../../../state/components/main/actions";
import { Main } from "./styles";

//https://usa.artmodakids/en-us
//https://artmodakids.com/en
//https://artmodakids.com.br
//https://artmodakids.com.br/en

const mainTranslationkit = {
    newslatterTitle: "Receba um monte de novidades da moda",
    newslatterDescription: ""
}

const hotListProducts: highlightedProduct[] = [
    {  
      productName: "",
      imgURL: ""
    },
    {  
      productName: "",
      imgURL: ""
    },
];

interface highlightedProduct {
  productName: string,
  imgURL: string
};

const adapter:MainOrganismProps =  {
    newslatterTitle: mainTranslationkit.newslatterTitle,
    newslatterDescription: mainTranslationkit.newslatterDescription
};

interface MainOrganismProps {
  newslatterTitle: string;
  newslatterDescription : string;
};




interface MainPropsProtocol {
  data?: MainDataProtocol
  child?: MainChildProtocol
};

export interface MainDataProtocol {
  newslatterTitle: string;
  newslatterDescription : string;
};

interface MainChildProtocol {
  newslatterTitle: string;
  newslatterDescription : string;
};

export const MainOrganism = () => {

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
};

let category: string;

function clickCounterByCategory() {

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

const topSearchList:string[] = topSearchList_ptBR;

const productCategoriesList:string[] = productCategoriesList_ptBR;

  const galeryImg = [
    "https://institucional.lojasleader.com.br/wp-content/uploads/2019/09/banner-blog-home-3.png",
    "https://institucional.lojasleader.com.br/wp-content/uploads/2019/09/banner-blog-home-3.png",
    "https://institucional.lojasleader.com.br/wp-content/uploads/2019/09/banner-blog-home-3.png",
    "https://institucional.lojasleader.com.br/wp-content/uploads/2019/09/banner-blog-home-3.png",
  ];

  let imgAmount = galeryImg.length;

  const state = useSelector((state:RootState) => state);

  const setState = useDispatch();

  function indexProvider() {
    if (state.mainStateReducer.index < imgAmount) {
      setState(mainAction(MainActions.SET_INDEX, { index: state.mainStateReducer.index + 1 }))
      console.log(state.mainStateReducer.index)
    } else if (state.mainStateReducer.index >= imgAmount) {
      setState(mainAction(MainActions.SET_INDEX, { index: 0}))
      console.log(state.mainStateReducer.index)
    }
  };


/*
  setTimeout(() => {
    if (index > imgAmount) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }, 3000);
*/

  


  return (
    <Main>
  
        <section className="section1" id="section1">
          <div className="productCategoryList" id="productCategoryList">
            <button title="" className="local" id="local"></button>
            <ul>
              <li className="item" id="item" style={{borderBottom: "3px solid red"}}>
                <a href="">{productCategoriesList[0]}</a>
              </li>
              <li className="item" id="item" style={{borderBottom: "3px solid yellow"}}>
                <a href="">{productCategoriesList[1]}</a>
              </li>
              <li className="item" id="item" style={{borderBottom: "3px solid blue"}}>
                <a href="">{productCategoriesList[2]}</a>
              </li>
              <li className="item" id="item" style={{borderBottom: "3px solid viollet"}}>
                <a href="">{productCategoriesList[3]}</a>
              </li>
              <li className="item" id="item" style={{borderBottom: "3px solid green"}}>
                <a href="">{productCategoriesList[4]}</a>
              </li>
              <li className="item" id="item" style={{borderBottom: "3px solid orange"}}>
                <a href="">{productCategoriesList[5]}</a>
              </li>
            </ul>
          </div>
        </section>
        <section className="container_section3" id="container_section3">
          <div className="topSearchList" id="topSearchList">
            <ul>
              { 
                topSearchList.map( i => {  
                  return(
                    <li>
                      <a href="">{i}</a>
                    </li>
                  )   
                })
              }
            </ul>
          </div>
        </section>
    

  
        <section className="banner" id="" aria-flowto="newslatter">
          <img className="" id=""  src={galeryImg[0]}/>
        </section>
        <div className="galleryGuide" id="galleryGuide">
          <button className="previusBtn" id="previusBtn">    
            <ArrowIcon/>
          </button>
          <span className="slide" id="slide" style={{background: "white", width: "10px", height: '10px', /*transform: "scale(105%)"*/}}/>
          <span className="slide" id="slide" style={{background: "white", width: "10px", height: '10px', /*transform: "scale(105%)"*/}}/>
          <span className="slide" id="slide" style={{background: "red", width: "10px", height: '10px', transform: "scale(115%)"}}/>
          <button className="nextBtn" id="nextBtn" onClick={() => indexProvider()}>
            <ArrowIcon/>
          </button>
          {state.mainStateReducer.index}
        </div>
        <section className="" id="">
          <ul>
            <li>
                <i title="" className="" id=""></i>
                {"12X nos cartões"}
            </li>
            <li>
                <i title="" className="" id=""></i>
                {"Entrega rápida"}
            </li>
            <li>
                <i title="" className="" id=""></i>
                {"Troca grátis"}
            </li>
            <li>
                <i title="" className="" id=""></i>
                {"Produtos de qualidade"}
            </li>
            <li>
                <i title="" className="" id=""></i>
                {"Entrega combinada"}
            </li>
          </ul>
        </section >
        <section className="" id="">
          <ul>
              {
                hotListProducts.map( i => {
                  return (
                    <li>
                      <img className="" id="" src={ i.imgURL }/>
                      { i.productName }
                    </li>
                  )
                })
              }
          </ul>
        </section>
        <section>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem labore repellat in vero error sunt ipsa voluptatem optio deleniti, debitis, corrupti hic sed tenetur fuga itaque nulla. Debitis, quasi quis.
          </p>
        </section>



        <span className="downloadApp-newslatter">
          <section className="downloadApp">
          
          </section>


        <section className="newslatter" id="newslatter">
          <h6>{ "GANHE 40 R$ NA PRIMEIRA COMPRA" }</h6>
          <p /*contentEditable="false"*/>{ adapter.newslatterDescription }</p>
          <span>{'Ocorreu um erro. Tente novamente.'}</span>
          <form>
            <input title="" alt="" type="email" name="" placeholder={"Digite um email válido"} aria-label="" className="huif-2354" id=""/>
            <label className="label" htmlFor="hdfu-7319">
              {"Menina"}
               {/*<input type="submit" name="" placeholder="" aria-label="" className="" id=""/>*/}
            </label>
            <label className="label" htmlFor="hdfu-7319 guirl">
              {"Menino"}
             {/*<input type="submit" name="" placeholder="" aria-label="" className="" id=""/>*/}
            </label>
          </form>
        </section>

        </span>
      </Main>

  )
}
/*
function reqListener(){
 return ""
};

let oReq = new XMLHttpRequest(); 
oReq.onload = reqListener;

oReq.open("get", "", false);*/