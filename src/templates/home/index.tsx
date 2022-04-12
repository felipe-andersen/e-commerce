import { AsideOrganism } from "../home/aside";
import { FooterOrganism } from "./footer";
import { HeaderOrganism } from "./header";
import { MainOrganism } from "./main";
import { Div } from "./styles";


export const HomeTemplate = () => {
  return (
    <Div>

      <HeaderOrganism/>

      <div className="main-aside-footer">

        <div className="main-footer">
         
          <MainOrganism/>
        
          <FooterOrganism/>
       
        </div>

        <AsideOrganism/>
      
      </div>
      
   </Div>
  )
}