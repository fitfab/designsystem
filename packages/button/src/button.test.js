import React from 'react';
import { cleanup, render } from '../../../test-util'
import 'jest-styled-components';


import Button from './index';

describe('Button', () => {
    test('Render Correctly', () => {
        const { container } = render(<Button size="small" label="hello" />)
        expect(container).toMatchSnapshot()
    })
});