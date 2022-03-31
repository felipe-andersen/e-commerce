
import { MainOrganism } from "../storefront/main";
import { AsideOrganism } from "./aside";
import { ShowcaseNavigationBarMolecule } from "./showcaseNavigationBar";
import { StorefrontComponentStyled } from "./styles";
import { ShowcaseConfigBarMolecule } from "./showcaseConfigBar";

export const StorefrontTemplate = () => {
  return (
    <StorefrontComponentStyled>
      <ShowcaseConfigBarMolecule/>
      <div className="aside-main">
        <aside>
          <AsideOrganism/>
        </aside>
        <main>
          <MainOrganism/>
        </main>
      </div>
      <ShowcaseNavigationBarMolecule/>
    </StorefrontComponentStyled>
  )
};