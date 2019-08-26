// actionに応じてstateを変更する
const initialState = {
    location: "",
    hotels: "",
    checkInDay: "",
    checkOutDay: ""
};

export function searchform(state = initialState,action){
  switch (action.type) {
    case "searchForm":{
      return state;
    }
    case "setLocation":{
      return{
        ...state,
        location: action.payload
      };
    }
    case "setCheckIn":{
      return{
        ...state,
        checkInDay: action.payload
      };
    }
    case "setCheckOut":{
      return{
        ...state,
        checkOutDay: action.payload
      };
    }
    // case "setHotelInfo":{
    //   return{
    //     ...state,
    //     hotels: action.payload
    //   };
    // }
    // case "setCheckIn":{
    //   return{
    //     ...state,
    //     checkInDay: action.payload
    //   }
    // }

    default:
    return state;
  }
}
