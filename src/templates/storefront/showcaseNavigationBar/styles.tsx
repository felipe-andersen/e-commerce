import styled from "styled-components"


export const ShowcaseNavigationBarComponentStyled = styled.div` 
  height: 60px;
  display: flex;
  align-items:center;
  padding: 0 0 0 24px;
  border-bottom: 1px solid grey;
  border-top: 1px solid grey;
  margin: 40px 12px;

  > nav {
    display: flex;
    width: 100%;
    justify-content: space-between;

  
    .navigationBtns {
        width: 200px;
        //background-color: blue;
        display: flex;
        align-items:center;
        justify-content: space-between;
    }
  }
`;