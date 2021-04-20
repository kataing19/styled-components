import React, { useState } from 'react';
import { array, oneOf, func, object, boolean } from 'prop-types';
import Button from './StyledButton.styles';

const StyledButton = ({
  children,
  variant,
  color,
  onClick,
  startIcon,
  endIcon,
  activatable,
  disabled,
  submit,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = () => {
    if (activatable) {
      setIsActive(!isActive);
    }
  };
  return (
    <Button
      type={submit ? 'submit' : 'button'}
      activated={false}
      variant={variant}
      color={color}
      onClick={handleOnClick}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </Button>
  );
};

StyledButton.propTypes = {
  type: oneOf(['button', 'submit']),
  children: array,

  // These all affect the appearance of the type of button we want to display
  // theme: oneOf(['solid', 'outline', 'borderless']),
  // appearance: oneOf(['default', 'primary', 'minimal']),
  variant: oneOf(['contained', 'outlined', 'text']),

  // These all affect the color of the button we want to display
  color: oneOf([
    'primary',
    'neutral',
    'red',
    'yellow',
    'green',
    'blue',
    'orange',
  ]),
  // intent: oneOf(['none', 'error', 'warning', 'success', 'information', 'in progress']), // Do we want to consolidate primary blue with blue?

  size: oneOf(['small', 'medium', 'large']),
  onClick: func,
  startIcon: object,
  endIcon: object,
  activatable: boolean,
  disabled: boolean,
};

export default StyledButton;
