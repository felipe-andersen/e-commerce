import { ShowcaseNavigationBarComponentStyled } from "./styles";




export const ShowcaseNavigationBarMolecule = () => {
    return (
      <ShowcaseNavigationBarComponentStyled>
        <nav>
          <p>{"457 produto(s)"}</p>
          <div className="navigationBtns">
            <button>Voltar</button>
            <span>5 de 10</span>
            <button>Próximo</button>
            </div>
        </nav>
      </ShowcaseNavigationBarComponentStyled>
    )
  };