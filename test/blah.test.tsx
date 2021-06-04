import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PillPity from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PillPity />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
