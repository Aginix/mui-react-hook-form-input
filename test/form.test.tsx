import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Form } from '../stories/Form.stories';

describe('Form', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
