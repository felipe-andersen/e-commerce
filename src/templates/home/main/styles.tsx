import styled from "styled-components";

export const  StyledMainComponent = styled.div`

  .section1 {
    width: 100%;
    background-color: #ff00c8;
    display: flex;
    justify-content: center;
    align-items: center;

    .productCategoryList {
      width: 1024px;
      height: 70px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      //background-color: #ff00c8;

      > ul {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;

        .item {
          box-sizing: border-box;
          width: 85px;
          height: 30px;
          color: #777777;
          font-size: 12px;
          background-color:white;
          list-style: none;
          display: flex;
          justify-content: center;
          align-items: center;

          a {
            text-decoration: none;
            color: #777777;

            :hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }

  .container_section3 {
    width: 100%;
    background-color: #00ff22;
    display: flex;
    justify-content: center;
  }

  .section2 {
    width: 1024px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    //background-color: blue;
  }

  .productCategoryList {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    //background-color: #ff00c8;

    > ul {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;

      .item {
        box-sizing: border-box;
        width: 85px;
        height: 30px;
        color: #777777;
        font-size: 12px;
        background-color:white;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          text-decoration: none;
          color: #777777;

          :hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .topSearchList {
    width: 1024px;
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    overflow-x: scroll;
    overflow-y: none;
    scroll-behavior: smooth;
    //background-color: rgba(0, 255, 34, 1.5);

        ::-webkit-scrollbar {
          height: 5px;
          background-color: transparent;
        }

        ::-webkit-scrollbar-track {
          background-color: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background-color: #0cce26;
        }
    
    > ul {
      box-sizing: border-box;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
       
      li {
        box-sizing: border-box;
        width: 100px;
        color: #777777;
        font-size: 12px;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          text-decoration: none;
          color: #777777;
        }
      }
    }
  }

  .banner {
    width: 100%;
    min-height: 300px;
    max-height:  400px;
    height:  400px;
    overflow: hidden;
    overflow-x: scroll;
    scroll-behavior: smooth;
    display: flex;
    
    ::-webkit-scrollbar {
      height: 5px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1ce;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }  

    > img {
      width: 100%;
    }
  }
  
  .galleryGuide {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;

    .previusBtn {
      width: 20px;
      height: 20px;
      border-radius: 556565px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
     
        transform: rotate(180deg) scale(340%);

      }
    }

    .nextBtn {
      width: 20px;
      height: 20px;
      border-radius: 556565px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        transform: scale(340%);
      }
    }
    
    .slide {
      width: 10px;
      height: 10px;
      background-color: #ff7c7c;
       border: 2px solid red;
      border-radius: 10px;
      margin: 0 0 0 6px;
    }

    .newslatter {
      width: 100%;
      background-color: yellow;
      box-sizing: border-box;
      padding: 35px;
    }
  }
`;