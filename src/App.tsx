import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Error from './components/error/Error';
import Products from './components/products/Products';
import ProductDetailedInfo from './components/productDetailedInfo/ProductDetailedInfo';
import OrderConfirmation from './components/orderConfirmation/OrderConfirmation';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/admin" element={<Products />} />
          <Route path="/order" element={<OrderConfirmation />} />
          <Route path="/admin/products/:id" element={<ProductDetailedInfo />} />
          <Route index element={<Products />} />
          <Route
            path="*"
            element={<Error message={'We couldnt find the page'} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
