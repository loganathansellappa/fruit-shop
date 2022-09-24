import { mockResource, renderWithRouter } from '../../..//utils/tests';
import ProductDetailedInfo from '../ProductDetailedInfo';
import { waitFor } from '@testing-library/react';

const mockResponse = {
  data: { ...mockResource().prodWithDiscount },
};

jest.mock('../../../services/Product', () => ({
  __esModule: true,
  useGetProductsQuery: () => mockResponse,
  useEditProductMutation: () => {
    const td = () =>
      Promise.resolve({
        data: {
          ...mockResource().prodWithDiscount,
          discount: mockResource().discounts[0],
        },
      });
    return [td];
  },
}));

describe('ProductDetailedInfo', () => {
  let element: { container: HTMLElement };

  const match = { params: { id: mockResource().prodWithoutDiscount.id } };

  beforeEach(() => {
    element = renderWithRouter(<ProductDetailedInfo match={match} />);
  });

  test('renders ProductDetailedInfo', async () => {
    await waitFor(() => {
      expect(element.container.firstChild).toMatchSnapshot();
      expect(element.container.textContent).toContain(
        mockResource().prodWithDiscount.title
      );
    });
  });
});
