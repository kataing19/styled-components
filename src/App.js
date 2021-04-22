import './reset.css';
import './App.css';
import { StyledButton } from './elements/index.js';
import { StyledCheck } from './icons/index.js';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Theme</h1>
      </div>
      <div className="horizontal">
        <div>
          <h2>Contained Buttons</h2>
          <StyledButton
            variant="contained"
            color="neutral"
            startIcon={StyledCheck}
          >
            Contained Neutral
          </StyledButton>
          <StyledButton variant="contained" color="red" endIcon={StyledCheck}>
            Contained Red
          </StyledButton>
          <StyledButton variant="contained" color="orange">
            <StyledCheck variant="startIcon" />
            Contained Orange
          </StyledButton>
          <StyledButton variant="contained" color="yellow">
            Contained Yellow
            <StyledCheck variant="endIcon" />
          </StyledButton>
          <StyledButton variant="contained" color="green">
            Contained Green
          </StyledButton>
          <StyledButton variant="contained" color="blue">
            Contained Blue
          </StyledButton>
          <StyledButton variant="contained" color="purple">
            Contained Purple
          </StyledButton>
          <StyledButton variant="contained" color="purple" disabled>
            Contained Purple Disabled
          </StyledButton>
        </div>
        <div>
          <h2>Outlined Buttons</h2>
          <StyledButton
            variant="outlined"
            color="neutral"
            activatable
            startIcon={StyledCheck}
          >
            Outlined Neutral
          </StyledButton>
          <StyledButton
            variant="outlined"
            color="red"
            activatabl
            endIcon={StyledCheck}
          >
            Outlined Red
          </StyledButton>
          <StyledButton variant="outlined" color="orange" activatable>
            <StyledCheck variant="startIcon" />
            Outlined Orange
          </StyledButton>
          <StyledButton variant="outlined" color="yellow" activatable>
            Outlined Yellow
            <StyledCheck variant="endIcon" />
          </StyledButton>
          <StyledButton variant="outlined" color="green" activatable>
            Outlined Green
          </StyledButton>
          <StyledButton variant="outlined" color="blue" activatable>
            Outlined Blue
          </StyledButton>
          <StyledButton variant="outlined" color="purple" activatable>
            Outlined Purple
          </StyledButton>
          <StyledButton variant="outlined" color="purple" disabled>
            Outlined Purple Disabled
          </StyledButton>
        </div>
        <div>
          <h2>Minimal Buttons</h2>
          <StyledButton variant="minimal" color="neutral">
            Minimal Neutral
          </StyledButton>
          <StyledButton variant="minimal" color="red">
            Minimal Red
          </StyledButton>
          <StyledButton variant="minimal" color="orange">
            Minimal Orange
          </StyledButton>
          <StyledButton variant="minimal" color="yellow">
            Minimal Yellow
          </StyledButton>
          <StyledButton variant="minimal" color="green">
            Minimal Green
          </StyledButton>
          <StyledButton variant="minimal" color="blue">
            Minimal Blue
          </StyledButton>
          <StyledButton variant="minimal" color="purple">
            Minimal Purple
          </StyledButton>
          <StyledButton variant="minimal" color="purple" disabled>
            Minimal Purple Disabled
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
            Small Contained
          </StyledButton>
          <StyledButton variant="contained" color="blue" size="medium">
            Medium Contained
          </StyledButton>
          <StyledButton variant="contained" color="blue" size="large">
            Large Contained
          </StyledButton>
        </div>
        <div>
          <h2>Outlined Buttons</h2>
          <StyledButton variant="outlined" color="blue" size="small">
            Small Outlined
          </StyledButton>
          <StyledButton variant="outlined" color="blue" size="medium">
            Medium Outlined
          </StyledButton>
          <StyledButton variant="outlined" color="blue" size="large">
            Large Outlined
          </StyledButton>
        </div>
        <div>
          <h2>Minimal Buttons</h2>
          <StyledButton variant="minimal" color="neutral" size="small">
            Small Minimal
          </StyledButton>
          <StyledButton variant="minimal" color="neutral" size="medium">
            Medium Minimal
          </StyledButton>
          <StyledButton variant="minimal" color="neutral" size="large">
            Large Minimal
          </StyledButton>
        </div>
      </div>
    </div>
  );
}

export default App;
