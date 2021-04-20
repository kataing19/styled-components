import styled, {css} from "styled-components";

export default styled.button`
  font-family: ${(props) => props.theme.font};
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  padding: 7px 10px;
  color: #fff;
  /* This method is used for binary props */
  /* background: ${(props) => (props.primary ? "red" : "green")}; */

  /* This method is used for a theme object */
  /* background: ${(props) => props.theme.primary}; */

  /* This method is used for multi-line css strings */
  ${
    (props) =>
    props.color &&
    css`
      background: ${(props) => props.theme[props.color]};
      color: black;
    `
  }
  
  &:hover {
    background: blue;
  }
`;