import userReducer from './user/user.reducer';
import { combineReducers } from 'redux';
import ErrorReducer from './Errors/errors.reducer';
import ProductsReducer from './products/products.reducer';
import ShCardReducer from './shcard/shCard.reducer';

export default combineReducers({
  user: userReducer,
  error: ErrorReducer,
  products: ProductsReducer,
  card: ShCardReducer,
});
