// 액션타입선언
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

//액션생성함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

//초기상태
//꼭 객체이거나 배열일 필요는 없다.
const intialState = 0;

//state는 intialState 이고, 액션을 받아오겠다.
export default function counter(state = intialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
