import React, { useState } from 'react';
import { string, oneOf, func, object, boolean } from 'prop-types';
import Button from './StyledButton.styles';

const StyledButton = ({
  children,
  variant,
  color,
  size,
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
      size={size}
      onClick={handleOnClick}
      disabled={disabled}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </Button>
  );
};

StyledButton.propTypes = {
  children: string,
  variant: oneOf(['contained', 'outlined', 'minimal']),
  color: oneOf([
    'neutral',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
  ]),
  size: oneOf(['small', 'medium', 'large']),
  onClick: func,
  startIcon: object,
  endIcon: object,
  activatable: boolean,
  disabled: boolean,
  submit: boolean,
};

export default StyledButton;
