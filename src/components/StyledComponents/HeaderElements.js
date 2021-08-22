import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  padding: 0px 50px; // 50 for left and right
  height: ${(props) => props.theme.navHeight};
  background-color: ${(props) => props.theme.bgColor};
`;

//     display: flex;
//     -webkit-box-pack: justify;
//     justify-content: space-between;
//     -webkit-box-align: center;
//     align-items: center;
//     position: fixed;
//     top: 0px;
//     z-index: 11;
//     padding: 0px 50px;
//     width: 100%;
//     height: var(--nav-height);
//     background-color: rgb(10 25 47 / 85%);
//     backdrop-filter: blur(10px);
//     transition: var(--transition);
//     filter: none !important;
//     pointer-events: auto !important;
//     user-select: auto !important;
