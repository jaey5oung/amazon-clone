export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);
//배열에 모든요소에 대해서 모든 콜백함수를 호출하는것
//amount 초기값 이자 앞으로 축적될 값들이 저장될 인수
//0 도 처음 값
//item 현재의 아이템 속성이 들어가는데 item.price 장바구니 아이템의 가격

//reduce 배열의 모든 값을 합산할때 사용
//basket 배열에서 item의 price를 합산하기 위해 reduce 를 사용한다

//0 <- 처음 값이 얼마냐
//Ex) 0 + (item.price 1 , item.price 2 , item.price 3)

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_TO_BASKET':
      console.log(state);
      console.log(action);

      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn('(id' + action.id + ')이 장바구니에 존재하지 않습니다');
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};
//아이템을 제거할땐 기존 바스킷아이템 아이디와 액션으로 넘어온아이디가 일치하면 새로운 뉴바스켓 배열을 만들어주고
//Splice(제거를 시작할 인덱스, 몇개를 제거할것인가) 원본배열을 제거하는것
export default reducer;
