import styled from "styled-components"


export const StyledHeaderOrganism = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin :0;
    position: relative;

    button {
      border: none;
      background-color: transparent;
    }

  .hdr {
    width: 100%;
    //background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
        width: 1024px;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        //background-color: #7a9908;

        form {
          width: 350px;
          height: 35px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 566565px;
          //border: 2px solid grey;
       
          background-color: #fadbe2;


          .searchInput {
            width: 150px;
            height: 100%;
            outline: none;
            border: none;
            background-color: rgb(255, 236, 241, 0);
            color: #865b67;
          }

          .submitLabel {
            width: 35px;
            height: 35px;
            display: flex;
            justify-content:  center;
            align-items: center;
            border-radius: 566565px;
            //border: 2px solid grey;
            background-color: #ffecf1;

            input {
              display: none;
            }
          }

          .imageLabel {
            width: 35px;
            height: 35px;
            display: flex;
            justify-content:  center;
            align-items: center;
            border-radius: 566565px;
            //border: 2px solid grey;
            background-color: #ffecf1;

            input {
              display: none;
            }
          }

        
        }

        .signup {
          display: flex;
          justify-content: space-between;
          align-items: center;

          svg {
            margin: 0 8px 0 0;
          }
        }

        .favorite-cart {
          display: flex;

          a, button {
            width: 40px;
            height: 40px;
            background-color: #f8f8f8;
            border-radius: 566565px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 4px;
          }

          .addFavoritesBtn {
            svg {
              fill: #ff0000;
            }
          }

          svg {
            
          }
        }

      .cartModal {
        display: flex;
        width: 330px;
        height: calc(95vh - 70px);
        background-color: white;
        position: absolute;
        z-index: 100000;
        margin: 74px 0 0 calc(1024px - 307px);
        align-self: flex-start;
        -webkit-box-shadow: 0px 0px 12px -2px rgba(0,0,0,0.5); 
        box-shadow: 0px 0px 12px -2px rgba(0,0,0,0.3);
        border-radius: 6px;

        .cart {
          width: 100%;
          height: calc(100% - 40px);
          padding: 6px;
          box-sizing: border-box;

          .menu {
            box-sizing: border-box;
            width: 100%;
            height:  50px;
            display: flex;
            padding: 0 8px;
            align-items: center;
            height: 50px;
            justify-content: space-between;

            .icon-sectionTitle {
              display: flex;
              display: flex;
              justify-content: center;
              align-items: center;

              .fullScreen {
              border: none;
              width: 35px;
              height:  35px;
              border-radius: 50000px;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #eeeeee;

                :hover {
                  background-color: #dfdfdf;
                }
              }

              .sectionTitle {
                margin: 0 0 0 25px;
              }
            }
         
            > button {
              border: none;
              width: 35px;
              height:  35px;
              border-radius: 50000px;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #e1fcff;

              :hover {
                background-color: #d0fcff;
              }
            }
          }

          .itemsView {
            width: 100%;
            height: calc(100% - 50px);
            overflow-y: scroll;
            scroll-behavior: smooth;

          .item {
            font-size: 13px;
            padding: 6px 4px;
            background-color: #f7f7f7;
            border-top: 2px solid white;
            border-bottom: 2px solid white;
            //border-left: 2px solid blue;
            box-sizing: border-box;
            color: #333333;
         

            :hover {
                background-color: #ececec;
              }
   
            > span {
              //background-color: #f7f7f7;
              min-height:  30px;
              max-height:  35px;
              display: flex;

              :hover {
                border-left: 3px solid black;
              }

            .description {
              display: flex;
              //background-color: #91f8ff;
              width: 41%;
              justify-content: center;

                > span {
                  overflow-y: hidden;
                  flex-wrap: wrap;
              }
            }

            .price {
              display: flex;
              //background-color: #1b1d7a;
              align-items: center;
              width: 20%;
              justify-content: center;
            }
            .amount {
              display: flex;
              //background-color: #657a1b;
              justify-content: space-around;
              align-items: center;
              width: 16%;
              

              > button {
                border: none;
                background-color: transparent;
                background-color: #d0fcff;
                border-radius: 5466px;

              }
            }

              .subtotal {
                display: flex;
                //background-color: #671b7a;
                align-items: center;
                width: 20%;
                justify-content: center;
              }
            }

            .address {
              height:  20px;
              padding: 0 10px;
              color: #b6b6b6;
              margin: 3px 0 0 0;
            }
          }

          }


          .total {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height:  40px;
            background-color: rgba(89, 255, 56,1);
            color: white;
            border-radius: 6px;
            //margin: 4px 0 0 0;
            border-bottom: 3px solid rgb(255, 174, 0);

            :hover {
              background-color: rgba(89, 255, 56,0.7);
            }
            
          }
        }
      }
    }
  }
  
  .container_section2 {
    width: 100%;
    background-color: #ff00c8;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container_section3 {
    width: 100%;
    background-color: #00ff22;
    display: flex;
    justify-content: center;

  }

  > div {
    width: 1024px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    //background-color: blue;
  }

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
          background-color: none;
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: #0cce26;
          } 
    
    > ul {
      box-sizing: border-box;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;

        :hover {
          ::-webkit-scrollbar-thumb:hover {
            background-color: #0cce26;
          } 
        }

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

`;