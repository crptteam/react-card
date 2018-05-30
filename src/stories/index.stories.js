import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  select
} from '@storybook/addon-knobs/react';

import { Card, CardLine } from '../../index.js';

const elements = storiesOf('ImageElem', module);

elements.addDecorator(withKnobs);

elements.add('round', () => {
  return <Card>
      <CardLine>1</CardLine>
      <CardLine>2</CardLine>
      <CardLine>3</CardLine>
    </Card>
    ;
});
