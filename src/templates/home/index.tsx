import { AsideOrganism } from "../home/aside";
import { FooterOrganism } from "./footer";
import { HeaderOrganism } from "./header";
import { MainOrganism } from "./main";
import { HomeStyledComponent } from "./styles";

export const HomeTemplate = () => {
  return (
    <HomeStyledComponent>
      <head></head>
      <header className="a-hdr-ognm1-mlcl-atm">
        <HeaderOrganism/>
      </header>
      <div className="main-aside-footer">
        <div className="main-footer">
          <main>
            <MainOrganism/>
          </main>
          <footer>
            <FooterOrganism/>
          </footer>
        </div>
        <aside>
          <AsideOrganism/>
        </aside>
      </div>
   </HomeStyledComponent>
  )
}