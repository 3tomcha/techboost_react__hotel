// actionに応じてstateを変更する
const initialState = {
  hotelName: "",
  reviewAverage: "",
  hotelImageUrl: "",
  hotelSpecial: "",
  access: "",
  userReview: "",
  roomInfo: "",
  planListUrl: ""
};

export function hoteldetail(state = initialState,action){
  switch (action.type) {
    case "setHoteldetail":{
      return {
        ...state,
        hotelName: action.payload.hotelName,
        reviewAverage: action.payload.reviewAverage,
        hotelImageUrl: action.payload.hotelImageUrl,
        hotelSpecial: action.payload.hotelSpecial,
        access: action.payload.access,
        userReview: action.payload.userReview,
        roomInfo: action.payload.roomInfo,
        planListUrl: action.payload.planListUrl
      };
    }

    default:
    return state;
  }
}
