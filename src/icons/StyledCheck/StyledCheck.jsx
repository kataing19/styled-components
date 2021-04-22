import React from 'react';
import { oneOf } from 'prop-types';
import Check from './StyledCheck.styles';
import { FaCheck } from 'react-icons/fa';

const StyledCheck = ({ variant }) => {
  return (
    <Check variant={variant}>
      <FaCheck />
    </Check>
  );
};

StyledCheck.propTypes = {
  variant: oneOf(['startIcon', 'endIcon', 'standAlone']),
};

export default StyledCheck;
