import styled, { css } from 'styled-components';

const Check = styled.div(({ variant }) => {
  let paddingRight = 0;
  let paddingLeft = 0;

  if (variant === 'startIcon') {
    paddingRight = '10px';
  } else if (variant === 'endIcon') {
    paddingLeft = '10px';
  }

  return css`
    padding-left: ${paddingLeft};
    padding-right: ${paddingRight};
  `;
});

export default Check;
