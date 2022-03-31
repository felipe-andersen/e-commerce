
import { ShareIcon } from "../../../../libs/icons/share";
import { ModalViewProductStyledComponent } from "./styles";


const productImgList = [
  [
    { 
      url: "https://img.lojasrenner.com.br/item/539441011/zoom/6.jpg",
      alt: "",
      key: "hghg",
    },
    { 
      url: "https://img.lojasrenner.com.br/item/539441011/zoom/6.jpg",
      alt: "",
      key: "fdfd",
    },
  ],
  [
    { 
      url: "",
      alt: "",
      key: "",
    },
    { 
      url: "",
      alt: "",
      key: "",
    },
  ]
];

//let productOptionsList_as_length = productImgList.length;

let selected_option_as_index = 1;

const optionSelected = productImgList[selected_option_as_index - 1]

//const handleImgSelect = productImgList;

optionSelected.map(i => i.key)

let _key ;

export const ModalViewProductOrganism = () => {
    return (
      <ModalViewProductStyledComponent>
        <div className="container" id=""/>
        <div className="white">
          <div className="productInformation">
          <div className="productImages" id="">
            <div className="selectImage" id="">
              {
                optionSelected.map(i => {
                  return (
                    <figure key={i.key} onClick={
                      () => {
                        _key = i.key
                        console.log(i.key)
                      }
                      }>
                      <img alt={i.alt} src={i.url}/>
                    </figure>
                  )
                })
              }
            </div>
            <div className="productDisplay" id="">
              <figure>
                <img 
                  alt={""} 
                  src={`
                  `}
                />
              </figure>
            </div>
          </div>
          <div className="productData" id="">
            <button title={"Fechar"} className="hiddeModal" id="">x</button>
            <p>MARCA</p>
            <p>DESCRIÇÃO</p>
            <p>Preço normal<s>R$ 45,90</s></p>
            <p>Preço atual<s>R$ 45,90</s></p>
            <p>1x de 45,90 sem juros no cartão</p>
            <div>Selecionar</div>
            <div className="productOptions">
            {
              productImgList.map( i => {
                return (
                  <figure key={""} onClick={
                    () => {
                      let option = ""
                    }
                    }>
                    <img alt={""} src={""}/>
                  </figure>
                )
              })
            }
            </div>
            <button title={""} className="purchase">ADD AO CARRINHO</button>
            <div>
              <button title={""}>Ver avaliações</button>
              <button title={""}>Ver informações do produto</button>
           
            </div>
             {/*
            <div>
              <figure>
                <img alt={""} />
              </figure>  
             </div>*/}
            <a href="" title={""} >Ir para página de faturamento</a>
          </div>

          </div>
          <div className="utilsBtns" id="">
            <button title={"Compartilhar"} className="share" id="share"><ShareIcon/></button>
            <button title={"Salvar como favorito"} className="saveAsfavorite" id="saveAsfavorite"></button>
            <button title={"Ver"} className="view" id="view"></button>
          </div>
        </div>
      </ModalViewProductStyledComponent>
    )
  };