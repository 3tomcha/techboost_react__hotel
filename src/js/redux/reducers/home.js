const initialState = {
  location: null,
  hotels: null,
  checkInDay: null,
  checkOutDay: null
};

export default function(state = initialState, action){
  switch(action.type){
    case "setHome":{
      return state;
    }
    default:
    return state;
  }
}
