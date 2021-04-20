import styled, { css } from 'styled-components';
import colorPalette from '../colors';

const { neutral } = colorPalette;

const Button = styled.button(({ activated, variant, color, iconPosition }) => {
  const selectedColor = colorPalette[color];
  let baseIndex = color === 'neutral' ? 11 : 5;
  let hoverIndex = baseIndex + 1;

  const contained = {
    textColor: neutral[1],
    backgroundColor: selectedColor[baseIndex],
    border: 'none',
    hoverBackgroundColor: selectedColor[hoverIndex],
  };

  const outlined = {
    textColor: selectedColor[baseIndex],
    backgroundColor: neutral[3],
    border: `1px solid ${neutral[6]}`,
    hoverColor: selectedColor[hoverIndex],
    hoverBackgroundColor: neutral[5],
  };

  const text = {
    textColor: selectedColor[baseIndex],
    backgroundColor: 'none',
    border: 'none',
    hoverColor: selectedColor[hoverIndex],
    hoverBackgroundColor: neutral[3],
  };

  const variantStyles = {
    contained,
    outlined,
    text,
  };

  const {
    textColor,
    backgroundColor,
    border,
    hoverColor,
    hoverBackgroundColor,
  } = variantStyles[variant];

  return css`
    // General Website Styling
    font-family: 'Nunito Sans', sans-serif;

    // General Button Styling
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px 16px;

    position: static;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 8px 0;

    // Dynamic Button Styling
    background: ${backgroundColor};
    border: ${border};
    box-sizing: border-box;
    border-radius: 5px;

    // General Text Styling
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;

    // Dynamic  Text Styling
    color: ${textColor};

    &:hover {
      background: ${hoverBackgroundColor};
      color: ${hoverColor};
    }
  `;
});

export default Button;
