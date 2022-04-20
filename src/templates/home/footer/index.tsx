import { IndexType } from "typescript";
import { CheckIcon } from "../../../libs/icons/check";
import { InfoIcon } from "../../../libs/icons/info";
import { SearchIcon } from "../../../libs/icons/searchIcon";
import { SettingsIcon } from "../../../libs/icons/SettingsIcon";
import { Footer } from "./styles";

const KitTranslate = {
  institutional: "Institucional",
};

const adapter:FooterOrganismProps = {
  institutional: KitTranslate.institutional
};

interface FooterOrganismProps {
  institutional: string;
};

export const FooterOrganism = () => {
  return (
    <Footer>
      <span className="margin">
      <span className="lists">
        <span>
          <h2>{ 'Dúvidas' }</h2>
          <ul>
            <li>Acompanhe seu pedido</li>
            <li>Tempo de entrega</li>
            <li>Termos de uso</li>
            <li>Política de Privacidade</li>
            <li>Regras para o uso do cupom</li>
            <li>Perguntas frequentes</li>
            <li>Guia de tamanhos</li>
            <li>Guia de compras</li>
            <li>Contrato de compra e venda</li>
            <li>Política de Troca</li>
            <li>Política de entrega</li>
          </ul>
        </span>
        <span>
          <h2>{ 'Artmodakids' }</h2>
          <ul>
            <li>Sobre</li>
            <li>Seja um fornecedor</li>
            <li>Sala de Imprensa</li>
            <li>Sustentabilidade</li>
            <li>Anuncie conosco</li>
          </ul>
        </span>
        <span>
          <h2>{ 'Atendimento' }</h2>
          <ul>
            <li>Fale conosco</li>
            <li>Ouvidoria</li>
          </ul>
        </span>
        <span className="">
          <p>ARTMODAKIDS. {'All right reserved.'}</p>
          <span  className="hufd_0523">
            <p><i>Brasil</i>DIGITAL COMMERCE ARTMODAKIDS LTDA. CNPJ: 023543543545465465.  <address>Rua Godoi, n 16. Bairro Leblon, São João de Meriti - RJ. CEP 25653-403</address></p>
            <p><i>USA</i>DIGITAL COMMERCE ARTMODAKIDS CO.  <address>Rua Godoi, n 16. Bairro Leblon, São João de Meriti - RJ. CEP 25653-403</address></p>
          </span>
          <span className="social">
            <address className="hdfd_8868">
              <InfoIcon/>
              <noscript>{"@linkedin"}</noscript>
            </address>
            <address  className="hdfd_8868" title="">
            <InfoIcon/>
              <noscript>{"@facebook"}</noscript>
              </address>
            <address  className="hdfd_8868" title="">
              <InfoIcon/>
              <noscript>{"@instagram"}</noscript>
            </address>
            <address  className="hdfd_8868" title="">
              <noscript>{"@twitter"}</noscript>
            </address>
          </span>
        </span>
      </span>
      <span className="settings">
        <button className="detailsModal">
          <CheckIcon/>
          {'Configurações'}
        </button>
        <span>
         <span>Cookies</span>
         <span>Idioma</span>
         <span>Moeda</span>
         <span>País</span>

        </span>
        <a href=".settings" title="">{"Reportar mal funcionamento"}</a>
        <span className="chat">
          <SettingsIcon/>
        </span>

      </span>

      </span>
    </Footer>
  )
}

type Moeda = {
  BRL: string
}

interface translate_ptBR {
  'pt-BR': string;
  'en-US': string;
  'en': string;
  'es': string
}

interface translate_en {
  'pt-BR': string;
  'en-US': string;
  'en': string;
  'es': string
}

interface translate_enUS {
  'pt-BR': string;
  'en-US': string;
  'en': string;
  'es': string
}

interface translate_es  {
  'pt-BR': string;
  'en-US': string;
  'en': string;
  'es': string
}

interface CatalogProtocol {
  'pt-BR': translate_ptBR,
  'en-US': translate_enUS,
  'en': translate_en
  'es': translate_es
}

const catalog = {
  'pt-BR': Object,
  'en-US': Object,
  'es': Object,
  'en': Object,
}





let userIdiom = "pt-BR"

let targetIdiom = "es"
/*
function translate (userIdiom: string, targetIdiom: string) {
  const translate = catalog[userIdiom][targetIdiom]
  return translate
}


const Languages = {
 'pt-BR': `Portuguese [Brazil] ${translate(userIdiom, 'pt-BR')}`,
 'en-us': `english [United State] ${translate(userIdiom, 'es')}`,
 'es': `spanish [Spain] ${translate(userIdiom, 'es')}`
}
*/



 



