import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import PostPunk from './index';

describe('PostPunk Area', () => {
  const defaultProps = {
    title: 'Ian Curtis',
    children: undefined,
  };
  it('should render the PostPunk, react FC children demo', () => {
    const component = render(<PostPunk {...defaultProps} />);
    expect(
      component.getByTestId('big-root-class__someSubDiv'),
    ).toBeInTheDocument();
  });
});
