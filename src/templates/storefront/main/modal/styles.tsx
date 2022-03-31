import styled from "styled-components";

export const ModalViewProductStyledComponent = styled.div`
  background-color: green;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .container {
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255, 0.5);
    //max-height: 1250px;
    //max-width: 800px;
    filter:blur(4px);
    -o-filter:blur(4px);
    -ms-filter:blur(4px);
    -moz-filter:blur(4px);
    -webkit-filter:blur(4px);
  }

  .white {
    box-sizing: border-box;
    background-color: white;
    position: absolute;

    .productInformation {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 ;
 
      .productImages {
      box-sizing: border-box;
      display: flex;
      width:  590px;
      height: 520px;
      padding: 24px 0 0 0;
      //height: 310px;
      //background-color: green;

        .selectImage { 
        box-sizing: border-box;
        height: 95%;
        width: 148px;
        padding: 24px 24px;
        //background-color: #140e35;
        overflow-y: auto;
        scroll-behavior: smooth;
        
          figure {
          width: 65.4px;
          height: 93px;
          background-color: #8ab68a;
          margin: 0 0 24px 0;
          overflow: hidden;

            img {
              height: 100%;
            }
          }
        }

        .productDisplay {
        box-sizing: border-box;
        width: 70%;
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        //background-color: #aeff17;

          figure {
          width: 344px;
          height: 498px;
          //background-color: #7bc97b;
          margin: 0;
          overflow: hidden;

            img {
              height: 100%;
            }
          }
        }
      }

      .productData {
      box-sizing: border-box;
      display: flex;
      width:  450px;
      //height: 430px;
      //background-color: #587558;
      flex-direction: column;
      padding: 8px;

        .purchase {
          width: 80%;
          height: 40px;
          //background-color: #aeff17;
          border: none;
          border-bottom: 2px solid grey;
        }

        .hiddeModal {
          width: 30px;
          height: 30px;
          background-color: #b8b8b8;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 500px;
        }

        .productOptions{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
      
          figure {
            width: 65.4px;
            height: 93px;
            background-color: #8ab68a;
            margin: 0;
            overflow: hidden;
            margin: 0 12px 0 0;

            img {
              height: 100%;
            }
          }
        }
      }
    }

    a {
      color: blue;

      :hover {
        text-decoration: underline;
      }
    }

    .utilsBtns {
      width: 100%;
      height: 60px;
      //background-color: #aeff17;
      display: flex;
      align-items: center;
      justify-content: center;
 

      .share {
        width: 50px;
        height: 50px;
        background-color: #aeff17;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 500px;
      }

      .saveAsfavorite {
        width: 50px;
        height: 50px;
        background-color: #aeff17;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 500px;
    
      }

      .view {
        width: 50px;
        height: 50px;
        background-color: #f1ff71;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #420303;
        border-radius: 500px;
      }
    }
  }
`;