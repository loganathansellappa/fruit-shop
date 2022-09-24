import { renderWithRouter } from '../../../utils/tests';
import Error from '../OrderConfirmation';

test('renders OrderConfirmation Page', () => {
  const { container } = renderWithRouter(<Error />);
  expect(container.firstChild).toMatchSnapshot();
  expect(container.textContent).toContain(
    'Your order has been placed successfully!'
  );
});
