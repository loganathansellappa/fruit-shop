import { mockResource, renderWithRouter } from '../../..//utils/tests';
import Cart from '../Cart';

describe('Cart', () => {
  let element: { container: HTMLElement };
  const mockFn = jest.fn();

  beforeEach(() => {
    element = renderWithRouter(
      <Cart
        checkoutCart={mockResource().cart}
        discounts={mockResource().discounts}
        addToCart={mockFn}
        removeFromCart={mockFn}
        clearCart={mockFn}
      />
    );
  });

  test('renders cart', () => {
    expect(element.container.firstChild).toMatchSnapshot();
    expect(element.container.textContent).toContain(
      mockResource().prodWithoutDiscount.title
    );
    expect(element.container.textContent).toContain('Total');
  });

  test('renders empty cart', () => {
    element = renderWithRouter(
      <Cart
        checkoutCart={{ products: [] }}
        discounts={mockResource().discounts}
        addToCart={mockFn}
        removeFromCart={mockFn}
        clearCart={mockFn}
      />
    );
    expect(element.container.firstChild).toMatchSnapshot();
    expect(element.container.textContent).toContain('Your Cart is Empty');
  });
});
