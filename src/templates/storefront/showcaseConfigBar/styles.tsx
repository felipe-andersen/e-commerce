import styled from "styled-components"

export const ShowcaseConfigBarComponentStyled = styled.div` 
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin: 0 0 24px 0;

  .quantProducts, .displayConfig, .popularHighestHowestPriceFilter {

    height: 30px;

    //background-color: blue;
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .popularHighestHowestPriceFilter {
    width: 140px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid grey;
  }

`;