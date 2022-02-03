import { render } from '@testing-library/react';

import DynamicUi from './dynamic-ui';

describe('DynamicUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DynamicUi />);
    expect(baseElement).toBeTruthy();
  });
});
