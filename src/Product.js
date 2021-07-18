import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  //basket은 가져올것 dispatch 쏠것

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  console.log('장바구니 확인', basket);

  //왼쪽은이름 오른쪽은 내용
  //dispatch에 설정해주는것들이 reducer에 액션에 들어간다

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>가격</small>
          <strong>{price}</strong>
          <small>원</small>
        </p>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>★</p>
            ))}
          {/* Rating 안의 크기만큼의 array가 생성되는데, 이건 [] 이런 배열이 생성된다 */}
          {/* fill 메소드에 의해 [undefined][undefined][undefined][undefined][undefined] */}
          {/* <p>별</p><p>별</p><p>별</p><p>별</p><p>별</p> */}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>장바구니 담기</button>
    </div>
  );
}

export default Product;
