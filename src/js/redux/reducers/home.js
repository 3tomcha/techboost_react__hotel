const initialState = {
  location: null,
  hotels: null,
  checkInDay: null,
  checkOutDay: null
};

export function home(state = initialState, action){
  switch(action.type){
    case "setHome":{
      return state;
    }
    case "setHotelInfo":{
      return{
        ...state,
        hotels: action.payload
      };
    }
    // case "setCheckIn":{
    //   return{
    //     ...state,
    //     checkInDay: action.payload
    //   }
    // }
    // case "setCheckOut":{
    //   return{
    //     ...state,
    //     checkOutDay: action.payload
    //   }
    // }
    default:
    return state;
  }
}
