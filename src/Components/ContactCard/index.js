import React from 'react';
import propTypes from 'prop-types';
import { FaEnvelope, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

import { Container } from './styles';

const ContactCard = ({ text, icon }) => {
  const showIcon = (iconName) => {
    switch (iconName) {
      case 'email':
        return <FaEnvelope size="40" />;
      case 'linkedin':
        return <FaLinkedinIn size="40" />;
      default:
        return <FaInstagram size="40" />;
    }
  };

  return (
    <Container href={`http://${text}`} target="_blank">
      <p>{text}</p>
      {showIcon(icon)}
    </Container>
  );
};

ContactCard.propTypes = {
  text: propTypes.string.isRequired,
  icon: propTypes.oneOf(['email', 'linkedin', 'instagram']).isRequired,
};

export default ContactCard;
