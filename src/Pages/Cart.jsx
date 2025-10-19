import { useSelector } from 'react-redux';
import CartList from '../Component/CartList';

export default function Cart() {
  const products = useSelector(state => state.cart);
  return (
    <div className='shop'>
        <CartList products={products} />
    </div>
  );
}
