import styled from "styled-components";

export const  LoginStyledComponent = styled.div`
  background-color: green;
  width: 100%;
  height: 100vh;
  margin: 0;
  justify-content: center;
  align-items: center;
 

   .form-socialAuth {
     display: flex;
   

    form {
      box-sizing: border-box;
      width: 450px;
      background-color: white;
      display: flex;
      flex-direction: column;
      padding: 32px;
      border-radius: 6px;
     
      .labelIcon{
        display: flex;
        justify-content: space-between;
        margin: 0 0 6px; 

        >span {

          i {

            svg {
              transform: scale(70%);
            }
          }

          span {

          }
        }
      }

      .emailLabel {
        display: flex;
      }

      .input-container {
        display: flex;
      }

      .notification {
        box-sizing: border-box;
        margin: 0 0 9px 0; 
        border-left: 2px solid red;
        margin:8px 0 8px 0;
        padding: 8px; 
        color: black;
        font-size: 13px;
      }
      
      .submitLabel {
        border: none;
        background-color: #006eff;
        color: white;
        height: 35px;   
        border-radius: 6px;
        margin: 0 0 8px 0;
        display: flex;
        align-items: center;
        justify-content: center;

        input {
          width: 50%;
          height:100%; 
        }

        svg {
          width: 50%;
          height:100%;  
          display: flex;
          justify-content: center;

          circle {
            fill: #4f9bff;
            animation: Bounce 1s ease-in-out infinite both;
          }

          .one {
      
            animation-delay: 0.30s;
          }

          .two {
     
            animation-delay: 0.40s;
          }

          .thwee {
        
            animation-delay: 0.50s;
          }

          @keyframes Bounce {
            0% {
              -webkit-transform: scale(1);
                      transform: scale(1);
            }

            40% {
              -webkit-transform: scale(1.2);
                      transform: scale(1.2);
            }

            80% {
              -webkit-transform: scale(1);
                      transform: scale(1);
            }

            100% {
              -webkit-transform: scale(1);
                      transform: scale(1);
            }
          }
        }
      }

      .forgot {
        border: none;
        background-color: transparent;
        padding: 0 8px;
        color: grey;
        margin: 0 0 8px 0;
      }

      .submit {
        border: none;
        background-color: transparent;
      }

      .signup {
        border: 1px solid #e6e6e6;
        background-color: transparent;
        height: 35px;
        border-radius: 6px;
        margin: 0 0 8px 0;
      }
   
      a {
        text-decoration: none;
        color: blue;
        
        :hover {
          color: blue;
        }
      }

      .inputEmail {
        width: 100%;
        height: 40px;
        border-radius: 3px;
        display: flex;
        align-items: center;
        border: 1px solid #e6e6e6;

        div {
          width: 83%;
          height: 100%;
          ///background-color: orange;
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          display: flex;
          align-items: center;

          input {
            border: none;
            width: 100%;
            outline: none;
            margin: 0 0 0 16px;

            ::placeholder {
              color: black;
            }
          }

          
          input:focus {

            ::placeholder {
              color: #575757;
            }
          }
        }

          .inputHiddeClear {
            height: 100%;
            //background-color: #187c80;
            width: 17%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .blockIcon {

              svg {
                transform: scale(70%);
                fill: red;
              }
            }

            .checkIcon {

              svg {
                transform: scale(70%);
                fill: green;
              }
            }

            label {

              i {

                svg {
                  transform: scale(70%);
                }
              }
            }
          }
    }
  }
`;