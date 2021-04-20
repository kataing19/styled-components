import './App.css';
import { StyledButton } from './elements/index.js';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Theme</h1>
      </div>
      <div className="horizontal">
        <div>
          <h2>Contained Buttons</h2>
          <StyledButton variant="contained" color="neutral">
            Contained Neutral
          </StyledButton>
          <StyledButton variant="contained" color="red">
            Contained Red
          </StyledButton>
          <StyledButton variant="contained" color="yellow">
            Contained Yellow
          </StyledButton>
          <StyledButton variant="contained" color="green">
            Contained Green
          </StyledButton>
          <StyledButton variant="contained" color="blue">
            Contained Blue
          </StyledButton>
          <StyledButton variant="contained" color="orange">
            Contained Orange
          </StyledButton>
        </div>
        <div>
          <h2>Outlined Buttons</h2>
          <StyledButton variant="outlined" color="neutral">
            Outlined Neutral
          </StyledButton>
          <StyledButton variant="outlined" color="red">
            Outlined Red
          </StyledButton>
          <StyledButton variant="outlined" color="yellow">
            Outlined Yellow
          </StyledButton>
          <StyledButton variant="outlined" color="green">
            Outlined Green
          </StyledButton>
          <StyledButton variant="outlined" color="blue">
            Outlined Blue
          </StyledButton>
          <StyledButton variant="outlined" color="orange">
            Outlined Orange
          </StyledButton>
        </div>
        <div>
          <h2>Text Buttons</h2>
          <StyledButton variant="text" color="neutral">
            Text Neutral
          </StyledButton>
          <StyledButton variant="text" color="red">
            Text Red
          </StyledButton>
          <StyledButton variant="text" color="yellow">
            Text Yellow
          </StyledButton>
          <StyledButton variant="text" color="green">
            Text Green
          </StyledButton>
          <StyledButton variant="text" color="blue">
            Text Blue
          </StyledButton>
          <StyledButton variant="text" color="orange">
            Text Orange
          </StyledButton>
        </div>
      </div>
      <div>
        <h1>Size</h1>
      </div>
      <div className="horizontal">
        <div>
          <h2>Contained Buttons</h2>
          <StyledButton variant="contained" color="blue" size="small">
            Small Text
          </StyledButton>
          <StyledButton variant="contained" color="yellow" size="medium">
            Medium Text
          </StyledButton>
          <StyledButton variant="contained" color="red" size="large">
            Large Text
          </StyledButton>
        </div>
        <div>
          <h2>Outlined Buttons</h2>
          <StyledButton variant="outlined" color="blue" size="small">
            Small Text
          </StyledButton>
          <StyledButton variant="outlined" color="yellow" size="medium">
            Medium Text
          </StyledButton>
          <StyledButton variant="outlined" color="red" size="large">
            Large Text
          </StyledButton>
        </div>
        <div>
          <h2>Text Buttons</h2>
          <StyledButton variant="text" color="blue" size="small">
            Small Text
          </StyledButton>
          <StyledButton variant="text" color="neutral" size="medium">
            Medium Text
          </StyledButton>
          <StyledButton variant="text" color="red" size="large">
            Large Text
          </StyledButton>
        </div>
      </div>
    </div>
  );
}

export default App;
