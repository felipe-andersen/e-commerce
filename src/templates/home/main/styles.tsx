import styled from "styled-components";

export const  Main = styled.main`

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

    .local {
      height: 100%;
      padding:0 16px;
      border: none;
      background-color: #dd00ad;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;

      :hover {
        background-color: #c20098;
      }

      svg {
        transform: scale(30%)
      }
    }

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

  .galery {
    box-sizing: border-box;
    max-width: 1850px;
    width: 100%;
    max-height: 400px;
    height: 400px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

      span {
        box-sizing: border-box;
        max-width: 1024px;
        width: 90%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        align-items:center;
        padding: 0 16px;
        position: absolute;
        
        .bigBtn {
          width: 35px;
          height: 35px;
          border-radius: 556565px;
          border: 1px solid rgb(196, 196, 196, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.3);
        }

        .galleryGuide {
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          align-self: flex-end;
          position: relative;
       
          .slide {
            width: 10px;
            height: 10px;
            background-color: #ff7c7c;
            border: 2px solid red;
            border-radius: 10px;
            margin: 0 0 0 6px;
          }
        }
      }

    .items {
      box-sizing: border-box;
      width: 100%;
      height: 100%;

      display: flex;
      align-items:center;

      overflow-x: auto;

      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      scroll-behavior: smooth;
  
        ::-webkit-scrollbar {

        }
  
    ::-webkit-scrollbar-track {

    }

    ::-webkit-scrollbar-thumb {

    }

    ::-webkit-scrollbar-thumb:hover {

    }  

      .item {
        box-sizing: border-box;
        flex: none;
        scroll-snap-align: start;
        width:100%;
        height: 98%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border: none;
        }
      }
    }

      /*
        @Keyframes TransitionGaleryImg {
          0%{ opacity:0.8; }
          100%{ opacity:1; }
        }

        @-webkit-keyframes TransitionGaleryImg {
          0%{ opacity:0.8; }
          100%{ opacity:1; }
        }

        @keyframes TransitionGaleryImg {
          0%{ opacity:0.8; }
          100%{ opacity:1; }
        }
        */
    }   
    
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

  .downloadApp-newslatter {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .downloadApp {
      width: 49.95%;
      background-color: #d4d4d4;
      box-sizing: border-box;
      padding: 35px;
      margin: 0 0 70px 0;
    }

    .newslatter {
      width: 48%;
      background-color: #ffe2d2;
      box-sizing: border-box;
      padding: 35px;
      margin: 0 0 70px 0;

      h6 {
        font-size: 20px;
      }

      form {
        display: flex;

        .huif-2354 {
          width: 250px;
          height: 40px;
          border: none;
          border-radius: 3px;

          outline-color: #9c009c;

          ::placeholder {
            color: black;
          
          }
        }

        label {
          width: 80px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #fa0000;
          border-bottom: 2px solid yellow;
          margin: 0 0 0 10px;
          color: white;
          border-radius: 3px;
        }

        .guirl {
          background-color: #a39230;
          color: white;
        }

        .boy {
          background-color: #a39230;
          color: white;
        }
      }
    }
  }

  @media (width: 500px) {
    .head {
      display: none;
    }
  }
`;