import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardLine = styled.div`
  js-display: flex;
  display: flex;
  padding-bottom: 32px;
  height: ${props => (props.fixed ? '76px' : 'auto')};
  align-items: flex-start;
  width: 100%;
  justify-content: stretch;
`;

CardLine.displayName = 'CardLine';

export default CardLine;
