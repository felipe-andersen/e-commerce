import { BorderlessButton } from "react-native-gesture-handler";
import { CheckIcon } from "../../../libs/icons/check";
import { ChevronIcon } from "../../../libs/icons/chevronIcon";
import { ClearCloseIcon } from "../../../libs/icons/clear-close";
import {AsideComponentStyled} from "./styles"

interface IAsideOrganism {
  kitTranslate: string;
}


export const AsideOrganism = () => {
  return (
    <AsideComponentStyled>
 
      <nav className="filters" id="filters">
        <section className="filterTypeList" id="filterTypeList">
          <span>
              {"GÊNERO"}
            <i>
              <ChevronIcon/>
            </i>
          </span>
          <div className="filteredItem">
            <button>
              <CheckIcon/>
            </button>
            <p>{"menina"}</p>
            <button>
              <ClearCloseIcon/>
            </button>
          </div>
          <div  className="listScroll" id="listScroll">
          <ul className="list" id="list">
            <li>
              <button>{"Menina"}</button>
            </li>
            <li>
              <button>{"Menino"}</button>
            </li>
          
          </ul>
          </div>
        </section>
        <section className="filterTypeRange" id="filterTypeRange">
          <span>{"PREÇO"}</span>
          <input type="range"/>
          <button>
            <li>{"Filtrar"}</li>
          </button>
        </section>
      </nav>
    </AsideComponentStyled>
  )
};