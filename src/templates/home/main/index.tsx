import { useRef } from "react";
import { useState } from "react";
import { ChildreenProtocol } from "..";
import { HighlightedProductProtocol } from "../../../businessData/hotListProducts/ptBR";
import { BackBtn } from "../../../libs/components/backBtn";
import { ArrowIcon } from "../../../libs/icons/arrow";
import { BaloonIcon } from "../../../libs/icons/baloon";
import { HeaderComponentProtocol } from "../header";
import { Main } from "./styles";

//https://usa.artmodakids/en-us
//https://artmodakids.com/en
//https://artmodakids.com.br
//https://artmodakids.com.br/en

export type LangType = 'en' | 'ptBR'

export interface MainComponentProtocol  {
  lang?: LangType
  content: MainDataProtocol;
  setContent?: any;
  childreen?: [
    header: HeaderComponentProtocol
  ]
};

export interface MainDataProtocol {
  newslatterTitle?: string;
  newsllaterResponse?: {
    success: string;
    error: string
  };
  newslatterDescription?: string;
  productCategoriesList?: string[];
  topSearchList?: string[];
  hotListProducts?: HighlightedProductProtocol[];
  input_error?: string;
  galeryImg?: string[]
};

type MainChildreenType = JSX.Element[];

const MainComponent = (props:MainComponentProtocol) => {

  const {galeryImg, productCategoriesList, topSearchList, hotListProducts, newslatterDescription} = props.content

  /*
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
*/
  
  let next ;
  let previus;
  let hotListProducts_title;
  switch (props.lang) {
    case 'ptBR':
      previus = 'Voltar';
      next = 'Próximo';
      hotListProducts_title = 'Hotlist Product'
      break
    case 'en' : 
      previus = "Previus"
      next = 'Next'
      hotListProducts_title = 'Mais quentes'
      break
    default :
      previus = "Previus"
      next = 'Next'
      hotListProducts_title = 'Hotlist Product'
  };

  const myTitle = props.childreen![0].content.myTitle;

  let imgAmount = galeryImg!.length - 1;

  const foo = useRef<string>();

  const [index, setIndex] = useState(0);

  type Key = 'next' | 'previus';

  function indexProvider(key: Key) {
    if (key === 'next') {
      index < imgAmount ? setIndex(index + 1) : index >= imgAmount ? setIndex(0) : setIndex(index)
    } else if (key === 'previus') {
      index > 0 ? setIndex(index - 1) : index === 0 ? setIndex(galeryImg!.length - 1) : setIndex(index)
    }
  };

  /** */

  const changeImg = indexProvider;

  return (
    <Main aria-details="Contém galeria de imagens, produtos destacados" id="" /*itemID="" itemProp="" itemRef="" itemScope itemType="" is="" about="" accessKey=""  placeholder={"nfdm"} hidden={false} onLoad={()=>{}} onAuxClick={undefined} placeholder={"nfdm"} property={undefined} onReset={undefined} onResetCapture={undefined} role = {undefined} results={undefined} resource="" ref={undefined} spellCheck={undefined} security=" " slot=" " dir="" tabIndex={undefined} onTimeUpdate={undefined} suppressHydrationWarning={undefined} onWaiting={undefined} onMouseEnter={undefined} onEmptied={undefined} onLoadStart={undefined}*/>
      <section className="head" >
        <section className="section1" id="section1">
          <div className="productCategoryList" id="productCategoryList">
            <button title="" className="local" id="local">
              <BaloonIcon/>
              {'Brazil'}
            </button>
            <ul>
                {
                  productCategoriesList!.map(i => {
                    return (
                      <li className="item" id="item" style={{borderBottom: "3px solid red"}}>
                        <a href="">{i}</a>
                      </li>
                    )
                  })
                }
            </ul>
          </div>
        </section>
        <section className="container_section3" id="container_section3">
          <div className="topSearchList" id="topSearchList">
            <ul>
              { 
                topSearchList!.map( i => {  
                  return (
                    <li>
                      <a href="">{i}</a>
                    </li>
                  )   
                })
              }
            </ul>
          </div>
        </section>
      </section>  
        
        <section className="galery" id="galery">
          <span>
              <button title={previus} className="bigBtn galeryBtn" id=""  onClick={() => {}}/>
              <span className="galleryGuide" id="galleryGuide" onClick={undefined}>
                <span className="slide" id="slide"/>
              </span>
              <button title={next} className="bigBtn galeryBtn" id="" onClick={() => {}}/>
          </span>
          <div className="items" id="items">
          
  
            {
              galeryImg!.map(i => {
                return (
                  <div className="item" id="item">
                    <img title="" alt="" className="" id="" src={i}/>
                  </div>
                )
              })
            }
         
            {/*<img title="" className="" id="" src={galeryImg![index]}/>*/}
          </div>
        </section>

        <div className="galleryGuide" id="galleryGuide">
          <span className="slide" id="slide" onClick={() => {}}/>
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
        <section className="hotListProducts" id="" title={"hotListProducts_title"}>
          <h6>{"hotListProducts_title"}</h6>
          <ul>
              {
                hotListProducts!.map( i => {
                  return (
                    <li>
                      <img className="" id="" alt={''} src={ i.imgURI }/>
                      { i.productName }
                    </li>
                  )
                })
              }
          </ul>
        </section>
        <section title={'responsability'}>
          <h6>{'Responsabilidade'}</h6>
          <ul>
            <li>Selo de qualidade</li>
            <li></li>
            <li></li>
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
          <p /*contentEditable="false"*/>{ newslatterDescription }</p>
          <span>{'Ocorreu um erro. Tente novamente. | Sem conexão. Aguardando restabelecer...'}</span>
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
};

export default MainComponent

/*
Sobre
Proposito
Serviços
portifolio
Clientes
Perguntas e Respostas
contato

*/
