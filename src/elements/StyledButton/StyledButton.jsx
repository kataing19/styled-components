import React, { useState } from 'react';
import {
  string,
  array,
  oneOf,
  oneOfType,
  func,
  symbol,
  object,
  boolean,
} from 'prop-types';
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
  const Icon = startIcon || endIcon;

  const handleOnClick = () => {
    if (activatable) {
      setIsActive(!isActive);
    }
  };

  return (
    <Button
      type={submit ? 'submit' : 'button'}
      activated={isActive}
      variant={variant}
      color={color}
      size={size}
      onClick={handleOnClick}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {startIcon && (
        <span className="icon">
          <Icon />
        </span>
      )}
      {children}
      {endIcon && (
        <span className="icon">
          <Icon />
        </span>
      )}
    </Button>
  );
};

StyledButton.propTypes = {
  children: oneOfType([string, array]),
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
  startIcon: func,
  endIcon: func,
  activatable: func,
  disabled: func,
  submit: func,
};

export default StyledButton;
