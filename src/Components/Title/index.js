import React from 'react';
import propTypes from 'prop-types';

import { Head } from './styles';

const Title = ({ children }) => {
  return <Head>{children}</Head>;
};

Title.propTypes = {
  children: propTypes.string.isRequired,
};

export default Title;
