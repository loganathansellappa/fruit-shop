import { mockResource, renderWithRouter } from '../../..//utils/tests';
import Products from '../Products';

const mockResponse = {
  data: { ...mockResource().listResponse },
};

jest.mock('../../../services/Product', () => ({
  __esModule: true,
  useGetProductsQuery: () => mockResponse,
}));

describe('Products', () => {
  let element: { container: HTMLElement };

  beforeEach(() => {
    element = renderWithRouter(<Products />);
  });

  test('renders Products', async () => {
    expect(element.container.firstChild).toMatchSnapshot();
    expect(element.container.textContent).toContain(
      mockResource().listResponse.products[0].title
    );
  });
});
