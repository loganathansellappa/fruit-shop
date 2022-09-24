import { renderWithRouter } from '../../../utils/tests';
import Error from '../Error';

test('renders Error Page', () => {
  const { container } = renderWithRouter(<Error />);
  expect(container.firstChild).toMatchSnapshot();
});
