// actionに応じてstateを変更する
const initialState = {
  hotelName: "",
  reviewAverage: "",
  hotelImageUrl: "",
  hotelSpecial: "",
  access: "",
  userReview: "",
  roomInfo: ""
};

export function hotel(state = initialState,action){
  switch (action.type) {
    case "setHotel":{
      return state;
    }

    default:
    return state;
  }
}
