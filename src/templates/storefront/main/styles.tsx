import styled from "styled-components"


export const MaintComponentStyled = styled.div` 

  height: 2000px; //max-content;
  //min-width: 70%;
  //background-color: green;
  //border: 1px solid grey;

  .showcase {
    box-sizing: border-box;
    //width: min-content;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 20px;
    color: #a1a1a1;
   
    .itemProduct {
      box-sizing: border-box;
      height: 450px; //max-content;
      width: 218px;
      font-size: 12px;
      //margin: 0 0 12px 12px;
      //border: 1px solid grey;
      //background-color: #a80707;
      overflow: hidden;

      figure {
        height: 310px; //max-content;
        width: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;

        img {
          height: 100%;
        }
      }
    }
  }
`;