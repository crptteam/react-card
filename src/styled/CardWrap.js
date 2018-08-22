import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys, innerMerge } from '../utils';
import { defaultTheme } from '../theme/';

const Elem = styled.div`
  js-display: ${props => (props.flex ? 'flex' : 'block')};
  display: ${props => (props.flex ? 'flex' : 'block')};
  background: ${props => props.background};
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  padding-bottom: ${props => props.paddingBottom};
  padding-top: ${props => props.paddingTop};
  font-family: ${props => props.fontFamily};
  flex-grow: 1;
  flex-direction: column;
  margin-top: ${props => props.marginTop};
  box-shadow: ${props => props.boxShadow};
  border-radius: ${props => props.borderRadius};
`;

const CardWrap = props => {

  const merged = innerMerge(
    {},
    defaultTheme.Card,
    props.theme && props.theme.Card ? props.theme.Card : {}
  );

  const theme = getThemeAsPlainTextByKeys(merged);

  return <Elem {...theme} {...props} />;
};

export default CardWrap;
