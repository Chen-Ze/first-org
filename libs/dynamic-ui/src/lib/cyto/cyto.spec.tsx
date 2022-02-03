import { render } from '@testing-library/react';

import Cyto from './cyto';

describe('Cyto', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cyto />);
    expect(baseElement).toBeTruthy();
  });
});
