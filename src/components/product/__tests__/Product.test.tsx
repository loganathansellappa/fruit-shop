import { mockResource, renderWithRouter } from '../../..//utils/tests';
import Product from '../Product';

describe('Product', () => {
  let element: { container: HTMLElement };
  const handleAddToCart = jest.fn();
  beforeEach(() => {
    element = renderWithRouter(
      <Product
        product={mockResource().prodWithoutDiscount}
        discount={mockResource().discounts[0]}
        handleAddToCart={handleAddToCart}
      />
    );
  });

  test('renders component for user', () => {
    expect(element.container.firstChild).toMatchSnapshot();
    expect(element.container.textContent).toContain(
      mockResource().prodWithoutDiscount.title
    );
    expect(element.container.textContent).toContain('Add to Cart');
  });

  test('renders component for owner', () => {
    element = renderWithRouter(
      <Product
        product={mockResource().prodWithoutDiscount}
        discount={mockResource().discounts[0]}
        handleAddToCart={handleAddToCart}
        owner={true}
      />
    );
    expect(element.container.firstChild).toMatchSnapshot();
    expect(element.container.textContent).toContain(
      mockResource().prodWithoutDiscount.title
    );
    expect(element.container.textContent).toContain('View More');
  });
});
