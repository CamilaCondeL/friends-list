import React from 'react';
import { render } from '@testing-library/react';
import Info from './info';
import detailMockData from '../../mocks/detailsMockData.json';

describe('Info component', () => {
  it('matches the snapshot', () => {
    const props = detailMockData;

    const { container } = render(<Info {...props} />);
    expect(container).toMatchSnapshot();
  });
});
