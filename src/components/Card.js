import React from 'react';
import { withTheme } from "styled-components";

import PropTypes from 'prop-types';
import { defaultTheme } from '../theme/';

import CardWrap from '../styled/CardWrap';

const ComponentName = 'Card';

class Card extends React.Component {
  render() {
    return <CardWrap {...this.props} />;
  }
}

Card.propTypes = {
  theme: PropTypes.object
};

Card.defaultProps = {
  theme: defaultTheme
};

Card.displayName = ComponentName;

export default withTheme(Card);
