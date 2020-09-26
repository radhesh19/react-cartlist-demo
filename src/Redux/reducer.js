import data from "../Constants/data.json"

const initialState = {
  products: data,
  cartList: [],
  total:0
};


export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD TO CART": {
      let list = JSON.parse(JSON.stringify(state.products))
      let index = state.cartList.findIndex(x => x.id === list[action.index].id)
      let cartArr =  state.cartList
      if (index > -1) {
        list[action.index]["quanitity"]++
        cartArr[index]["quanitity"]++
        cartArr[index]["updatedRate"] = (cartArr[index]["quanitity"] * cartArr[index]["rate"])
      } else {
        list[action.index]["quanitity"]++
        list[action.index]["updatedRate"] = list[action.index]["rate"]
        cartArr.push(list[action.index])
      }
      state.products = list
      state.cartList = cartArr
      state.total = state.cartList.reduce((accum,item) => accum + item.updatedRate, 0)
     
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}
