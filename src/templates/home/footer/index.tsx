import { StyledFooterOrganism } from "./styles";

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
    <StyledFooterOrganism>
      <section>
          <h2>{ adapter.institutional }</h2>
        <ul>
          <li>Acompanhe seu pedido</li>
          <li>Tempo de entrega</li>
          <li>Termos de uso</li>
          <li>Regras para o uso do cupom</li>
          <li>Perguntas frequentes</li>
          <li>Guia de tamanhos</li>
          <li>Guia de compras</li>
          <li>Política de privacidade</li>
          <li>Contrato de compra e venda</li>
          <li>Anuncie conosco</li>
          <li>Sustentabilidade</li>
          <li></li>
          <li>Informações do pedido</li>

        </ul>
      </section>
      <section>
          <h2>{ adapter.institutional }</h2>
        <ul>
          <li></li>
        </ul>
      </section>
      <section>
          <h2>{ adapter.institutional }</h2>
        <ul>
          <li></li>
        </ul>
      </section>
      <section>
          
      </section>
      <address>Rua Godoi, n 16. Bairro Leblon <br/>João de Meriti - RJ - CEP 25653-403</address>
      <p> Varejo Multimarcas CNPJ: 23532324324324132. Direitos reservados</p>
      
    </StyledFooterOrganism>
  )
}


