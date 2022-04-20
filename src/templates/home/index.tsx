import { useState } from "react";
import BusinessData from "../../businessData";
import { AsideOrganism } from "../home/aside";
import { FooterOrganism } from "./footer";
import HeaderComponent, { HeaderComponentProtocol } from "./header";
import MainComponent, { LangType, MainComponentProtocol } from "./main";
import { Div } from "./styles";


interface HomeTemplateProtocol {
  lang?: string;
  content: object;
  setContent?: object;
  childreen: [
    header?: ChildreenProtocol,
    main?: MainComponentProtocol,
    aside?: any,
    footer?: ChildreenProtocol,
  ]
};

export interface ChildreenProtocol {
  lang?: string;
  content: object;
  setContent?: object;
  component?: (props:any) => JSX.Element;
  childreen?: ChildreenProtocol[]
};

export const HomeTemplate = ( props?:HomeTemplateProtocol ) => {
    const { topSearchList, productCategoriesList, hotListProducts, input_error, galeryImg } = new BusinessData('ptBR')
    const [ newslatterTitle, setNewslatterTitle ] = useState<string>("");
    const [ newslatterDescription, setNewslatterDescription ] = useState<string>("");
    const [ myTitle, setMyTitle ] = useState<string>("Click me");
    const [lang, setLang] = useState<LangType>("en");
  
    const header:HeaderComponentProtocol = {
        content: {
            myTitle
        },
        setContent: {
            setMyTitle
        },
        childreen: [],
    };

    const main: MainComponentProtocol = {
        content: {
            newslatterTitle,
            newslatterDescription,
            newsllaterResponse: {
                error: "",
                success: ""
            },
            productCategoriesList,
            topSearchList,
            hotListProducts,
            input_error,
            galeryImg
        },
        setContent: {
            setNewslatterTitle,
            setNewslatterDescription
        },
        childreen: [header]
    };

    const aside:ChildreenProtocol = {
        content: {
            newslatterTitle: {
                this: newslatterTitle,
                setNewslatterTitle: setNewslatterTitle
            }
        },
        childreen: []
    };

    const footer = {
        data: {
            newslatterTitle: "",
            newslatterDescription : "",
        },
        childreen: []
    };

    const home: HomeTemplateProtocol = {
        content: {},
        childreen: [  
            header,
            main,
            aside
        ]
    };

    return (
        <Div>
            <HeaderComponent/>
            <div    className="main-aside-footer">
                <div    className="main-footer">
                    <MainComponent    
                        content={{ ...home.childreen[1]?.content }}    
                        childreen={ home.childreen[1]?.childreen }    
                        setContent={ home.setContent }    
                        lang={lang}/>
                    <FooterOrganism/>
                </div>
                <AsideOrganism/>
            </div>
        </Div>
    )
}