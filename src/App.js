import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { Button } from './elements/index.js';

const theme = {
  primary: "teal",
  secondary: "green",
  alert: "yellow",
  font: "sans-serif",
};

const H1 = styled.h1`
  font-family: ${(props) => props.theme.font};
  font-size: 3em;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <H1>Styled Components</H1>
        <form action="">
          <input type="text" />
          <button>Create</button>
          <Button color="alert">Create</Button>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default App;
