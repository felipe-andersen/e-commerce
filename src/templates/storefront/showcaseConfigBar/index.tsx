
import { ChevronIcon } from "../../../libs/icons/chevronIcon";
import { ShowcaseConfigBarComponentStyled } from "./styles";


export interface IShowcaseConfigBarMolecule {

}

export const ShowcaseConfigBarMolecule = () => {
  return (
    <ShowcaseConfigBarComponentStyled>
      <p>{"CHUTEIRA NIKE SPORTS"}</p>
        <button className="cleanFilter" id="cleanFilter">
          {"Limpar todos os filtros"}
        </button>
        <div className="quantProducts">
          {"62 Produtos"}
        </div>
        <div className="displayConfig">
          <input type="range"></input>
           
        </div>
        <div className="popularHighestHowestPriceFilter">
          Mais vistos
          <i><ChevronIcon/></i>
        </div>
    </ShowcaseConfigBarComponentStyled>
  )
};
