export const GET_CATEGORIES_FAIL = 'my-jokes-app/categories/LOAD_FAIL';
export const GET_CATEGORIES = 'my-jokes-app/categories/LOAD';
export const GET_CATEGORIES_SUCCESS = 'my-jokes-app/categories/LOAD_SUCCESS';
export const GET_CATEGORIESBNK = 'my-jokes-app/categories/LOAD_BNK';
export const GET_CATEGORY_JOKE_FAIL = 'my-jokes-app/categoryJoke/LOAD_CATEGORY_JOKE_FAIL';
export const GET_CATEGORY_JOKE = 'my-jokes-app/categoryJoke/LOAD_CATEGORY_JOKE';
export const GET_CATEGORY_JOKE_SUCCESS = 'my-jokes-app/categoryJoke/LOAD_CATEGORY_JOKE_SUCCESS';
export const GET_CATEGORIES_JOKE_BNK = 'my-jokes-app/categoryJoke/LOAD_CATEGORY_JOKE_BNK';
export const GET_RANDOM_JOKE_FAIL = 'my-jokes-app/categoryJoke/LOAD_RANDOM_JOKE_FAIL';
export const GET_RANDOM_JOKE = 'my-jokes-app/categoryJoke/LOAD_RANDOM_JOKE';
export const GET_RANDOM_JOKE_SUCCESS = 'my-jokes-app/categoryJoke/LOAD_RANDOM_JOKE_SUCCESS';
export default function getcategories(state = { categories: [] }, action) {
  switch (action.type) {
    case GET_CATEGORY_JOKE:
        return { ...state, loading: true };
    case GET_CATEGORY_JOKE_SUCCESS:
        return { ...state, loading: false, categoryJoke: action.payload.data };
    case GET_CATEGORY_JOKE_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
      };
    case GET_RANDOM_JOKE:
      return { ...state, loading: true };
    case GET_RANDOM_JOKE_SUCCESS:
      return { ...state, loading: false, randomJoke: action.payload.data };
    case GET_RANDOM_JOKE_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
      };
    case GET_CATEGORIES_JOKE_BNK:
        return { ...state, loading: false, categories: action.payload.data};
    case GET_CATEGORIES:
      return { ...state, loading: true, };
    case GET_CATEGORIES_SUCCESS:
      statebnk = { categories: action.payload.data }
      return { ...state, loading: false, categories: action.payload.data};
    case GET_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
      };
    case GET_CATEGORIESBNK:
      return { ...state, loading: false, categories: action.payload.data};
    default:
      return state;
  }
}
export function getList(){
  return {
    type: GET_CATEGORIESBNK,
    categories: statebnk.categories
  };
}
export function listCategory() {
  return {
    type: GET_CATEGORIES,
    payload: {
      request: {
        url: `/jokes/categories`
      }
    }
  };
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
export function getRandomJoke() {
  return {
    type: GET_RANDOM_JOKE,
    payload: {
      request: {
        url: `/jokes/random`
      }
    }
  };
}
// export function getJoke(){
//     return {
//       type: GET_CATEGORIES_JOKE_BNK,
//       categoryJoke: bnk.categoryJoke
//     };
//   }
