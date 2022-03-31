import { BlockIcon } from "../../../libs/icons/block";
import { CheckIcon } from "../../../libs/icons/check";
import { ClearCloseIcon } from "../../../libs/icons/clear-close";
import { InfoIcon } from "../../../libs/icons/info";
import { VisibilityEyeIcon } from "../../../libs/icons/visibity-eye";
import { LoginStyledComponent } from "./styles";



interface ILoginOrganism {
  isValid: string;
}

// traduzir manualmente para outro idioma.
export const LoginOrganism = () => {

  function reset() {
  let inputEmail = document.getElementById('email')?.nodeValue;
  inputEmail = "";
  }

  let status = "valid";

  let style = {
    display: "flex",
    fill: "green",
    border: "green",
  };

  /*
  switch (status){
    case "valid":
      return ""
      //fill: grey; border: grey;;
    ;

    case "invalid":
      return ""
      //fill: grey; border: grey;;
    ;

    case "atention":
      return ""
      //fill: grey; border: grey;;
    ;
  }
*/

  return (
    <LoginStyledComponent>
    
      <h1>{"Entre com uma conta"}</h1>
      <p></p>
      <div className="form-socialAuth" id="">

      <form className="" id="">
        <div className="pic-email--molecule">
          <picture>
            <img src="" alt="" className="" id=""/>
          </picture>
          <span>{""}</span>
        </div>
    
          <label htmlFor="email" className="labelIcon" id="">
            <span>{"Email"}</span>
            <span>
              <span className="" id="">invalid</span>
              <i><InfoIcon/></i>
            </span>
          </label>
          <div className="inputEmail" id="inputEmail">
            <div className="" id="">
              <input type="email" form="" name="" className="email" id="email" placeholder={"Insira seu email"} aria-label={"Email"}/>
            </div>
            <div className="inputHiddeClear" id="inputHiddeClear">
             
              <i className="blockIcon"><BlockIcon/></i>
              <i className="checkIcon"><CheckIcon/></i>
              <label htmlFor="reset" className="reset" id="">
                <i><ClearCloseIcon/></i>
                <input type="reset" className="" id="" onClick={() => reset()}/>
              </label>
            </div>
          </div>
      
          <label className="notification" id="notification">Verifique o email likg hdç lgj dçhk ljg lçh kd   djlg kdlhkfj glghdk fjlghkdjfld lhklghkddfjkklghdflh</label>
          <span className="labelIcon" id="">
            {"password"}
            <span>
              <span>invalid</span>
              <i><InfoIcon/></i>
            </span>
          </span>
      
          <div  className="" id="password">
            <input type="password" form="" className="" id="password" aria-label={"Senha"}  placeholder={"Insira sua senha"}/>
          </div>
       
        <span className="notification" id="notification">Verifique o email likg hdç lgj dçhk ljg lçh kd djlg kdlhkfj glghdk fjlghkdjfld lhklghkddfjkklghdflh</span>
        <button className="forgot" id="forgot" >{"esqueci email/senha"}</button>
        <label className="submitLabel" id="submitLabel" htmlFor="submit">
          <input type="submit" form="" className="submit" id="submit" value={"Entrar"}/>
          <svg  viewBox="0 -20 50 50" xmlns="http://www.w3.org/2000/svg">
            <circle className="one" cx="6" cy="3" r="5" />
            <circle className="two" cx="26" cy="3" r="5" />
            <circle className="thwee" cx="46" cy="3" r="5" />
          </svg>
        </label>
        <button title={"Cadastre-se"} className="signup" id="signup">Cadastre-se</button>
        <a href="">{"Termos de uso e Política de Privacidade "}</a> 
        <a href="">{"Help"}</a> 
      </form>
      <div  className="socialAuth" id="socialAuth">
        <button className="" id="">{"Entre con Facebook"}</button>
      </div>
      </div>
    </LoginStyledComponent>
  )
};

//email invalido - depois do evento onchange/ ou depois de submete-lo imput fica vermelho em caso de invalido
// senha invalida - sernha com caracteres invalidos, tratamento de senha pelo javascript, passar para um string
// senha invalida, bloqueio de tentativa utros metodos de autenticação