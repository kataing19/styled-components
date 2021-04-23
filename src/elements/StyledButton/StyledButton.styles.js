import styled, { css } from 'styled-components';
import colorPalette from '../../colors';

const { neutral, blue } = colorPalette;

const Button = styled.button(
  ({ variant, color, size, disabled, activated, startIcon, endIcon }) => {
    const selectedColor = colorPalette[color];
    let baseIndex = color === 'neutral' ? 11 : 5;
    let hoverIndex = baseIndex + 1;

    const baseStyle = {
      textColor: neutral[neutral.length],
      backgroundColor: 'none',
      border: 'none',
      paddingLeft: endIcon ? '10px' : 0,
      paddingRight: startIcon ? '10px' : 0,
    };

    let contained = {
      disabled: {
        textColor: neutral[7],
        backgroundColor: neutral[4],
      },
      textColor: neutral[1],
      backgroundColor: selectedColor[baseIndex],
      hoverBackgroundColor: selectedColor[hoverIndex],
    };

    const outlined = {
      disabled: {
        textColor: neutral[7],
        backgroundColor: neutral[4],
        border: `1px solid ${neutral[6]}`,
      },
      activated: {
        backgroundColor: selectedColor[baseIndex - 4],
        border: `1px solid ${selectedColor[baseIndex + 1]}`,
        textColor: selectedColor[baseIndex],
      },
      textColor: selectedColor[baseIndex],
      backgroundColor: neutral[3],
      border: `1px solid ${neutral[6]}`,
      hoverColor: selectedColor[hoverIndex],
      hoverBackgroundColor: neutral[5],
    };

    const minimal = {
      disabled: {
        textColor: neutral[7],
      },
      textColor: selectedColor[baseIndex],
      hoverColor: selectedColor[hoverIndex],
      hoverBackgroundColor: neutral[3],
    };

    const variantStyles = {
      contained,
      outlined,
      minimal,
    };

    const small = {
      height: '32px',
      fontSize: '14px',
    };

    const medium = {
      height: '36px',
      fontSize: '16px',
    };

    const large = {
      height: '40px',
      fontSize: '20px',
    };

    const sizeStyles = {
      small,
      medium,
      large,
    };

    const getStyle = () => {
      let style = baseStyle;
      const selectedStyle = variantStyles[variant];
      const disabledStyle = selectedStyle.disabled;
      const activatedStyle = selectedStyle.activated;

      if (size) {
        style = { ...style, ...sizeStyles[size] }; // We might want to select a default size
      }

      if (disabled) {
        return { ...style, ...disabledStyle };
      }

      if (activated) {
        return { ...style, ...activatedStyle };
      }

      return { ...style, ...selectedStyle };
    };

    const {
      textColor,
      backgroundColor,
      border,
      hoverColor,
      hoverBackgroundColor,
      height,
      fontSize,
      paddingLeft,
      paddingRight,
    } = getStyle();

    return css`
      // General Button Styling
      display: flex;
      flex-direction: row;
      justify-content: space-between;
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

      outline: none;
      cursor: pointer;

      // Dynamic Button Styling
      background: ${backgroundColor};
      border: ${border};
      box-sizing: border-box;
      border-radius: 5px;
      /* height: ${height}; */

      // General Text Styling
      font-weight: 600;
      line-height: 22px;

      // Dynamic  Text Styling
      color: ${textColor};
      font-size: ${fontSize};

      &:hover:enabled {
        background: ${hoverBackgroundColor};
        color: ${hoverColor};
      }

      &:disabled {
        cursor: not-allowed;
      }

      .icon {
        padding-left: ${paddingLeft};
        padding-right: ${paddingRight};
      }
    `;
  }
);

export default Button;
