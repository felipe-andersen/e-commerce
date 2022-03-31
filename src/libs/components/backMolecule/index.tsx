import * as React from 'react';

const backMoleculeTranslationkit = {
    title: "Voltar ao início"
};

const adapter:BackMoleculeProps = {
  title: backMoleculeTranslationkit.title
};

export interface BackMoleculeProps {
  title: string;
}

export const BackMolecule:React.FC = ():JSX.Element => {
    return (
      <>
        <button title="" className="" id=""/>
      </>
    )
  }