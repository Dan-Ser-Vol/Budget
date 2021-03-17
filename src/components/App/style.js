import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
}
`;

export const Wrapper = styled.div`
  
    background-color:#DFE161;
`;

Wrapper.displayName = 'TransWrapper'