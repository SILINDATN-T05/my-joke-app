export const GET_CATEGORY_JOKE_FAIL = 'my-jokes-app/categoryJoke/LOAD_CATEGORY_JOKE_FAIL';
export const GET_CATEGORY_JOKE = 'my-jokes-app/categoryJoke/LOAD_CATEGORY_JOKE';
export const GET_CATEGORY_JOKE_SUCCESS = 'my-jokes-app/categoryJoke/LOAD_CATEGORY_JOKE_SUCCESS';
export const GET_CATEGORIES_JOKE_BNK = 'my-jokes-app/categoryJoke/LOAD_CATEGORY_JOKE_BNK';
let bnk = { categoryJoke: {} };
export default function getcategoryJoke(state = { categoryJoke:{} }, action) {
  switch (action.type) {
    case GET_CATEGORY_JOKE:
        return { ...state, loading: true };
    case GET_CATEGORY_JOKE_SUCCESS:
        bnk = { categoryJoke: action.payload.data };
        return { ...state, loading: false, categoryJoke: action.payload.data };
    case GET_CATEGORY_JOKE_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
      };
    case GET_CATEGORIES_JOKE_BNK:
        return { ...state, loading: false, categories: action.payload.data};
    default:
      return state;
  }
}

export function getCategoryJoke(category) {
  return {
    type: GET_CATEGORY_JOKE,
    payload: {
      request: {
        url: `/jokes/random?category=${category}`
      }
    }
  };
}
export function getJoke(){
    return {
      type: GET_CATEGORIES_JOKE_BNK,
      categoryJoke: bnk.categoryJoke
    };
  }