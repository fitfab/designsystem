import React from 'react';
import { cleanup, render } from '../../../test-util'
import 'jest-styled-components';


import Input from './index';

describe('Button', () => {
    test('Render Correctly', () => {
        const { container } = render(<Input label='user name:'
        size='large'
        name= 'userName' />)
        expect(container).toMatchSnapshot()
    })
});