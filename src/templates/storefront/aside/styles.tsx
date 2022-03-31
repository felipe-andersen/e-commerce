import styled from "styled-components"


export const AsideComponentStyled = styled.div` 


  .cleanFilter {
    width: 100%;
    height: 40px;
    margin: 0 0 24px 0;
    border: none;
    border-bottom: 2px solid #dbdbdb;
    border-top: 1px solid #dbdbdb;
    background-color: transparent;

    :hover {
      background-color: #e0e0e0;
    }
  }

  .filterTypeList {
    width: 100%;
    height:300px;
   // border: 1px solid #dbdbdb;
    margin: 0 0 24px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    font-size: 13px;
    box-sizing: border-box;


    > span {
      width:100%;
      height: 40px;
      //background-color: #f0f0f0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #dbdbdb;
      border-top: 1px solid #dbdbdb;
      padding: 0 5% 0 5%;
      svg {
        fill: #53becc;
      }
    }

    .filteredItem {
      width:100%;
      height: 40px;
 
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #a1a1a1;

      button {
        background-color: transparent;
        border: #a1a1a1;

        
        svg {
          transform: scale(70%);
          fill: grey;
        }
      }
    }

    .listScroll {
      box-sizing: border-box;
      width:100%;
      height: calc(100% - 70px);
      scroll-behavior: smooth;
      overflow-y: auto;

      //display: none;

      .list {
        width:100%;
        display: flex;
        flex-direction: column;
        list-style: none;
        //background-color: red;
        list-style-type: none;
        margin: 0 0;

        li {
          width:100%;
          height: 35px;
          //background-color: red;
          float: left;
      
          button {
            width:100%;
            height: 100%;
            border: none;
            background-color: transparent;
            color: #a1a1a1;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        
          
            :hover {
              color: white;
              background-color: #51ffff;
            }
          }
        }
      }
    }
  }
`;