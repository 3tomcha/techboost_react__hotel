// actionに応じてstateを変更する
const initialState = {
  id: "",
  checkInDay: "",
  checkOutDay: "",
  hotelName: "",
  reviewAverage: "",
  hotelImageUrl: "",
  hotelSpecial: "",
  access: "",
  userReview: "",
  roomInfo: ""
};

export default function(state = initialState,action){
  switch (action.type) {
    case "addHoteldetail":{
      const { id, checkInDay, checkOutDay } = action.payload;

      return {
        ...state,
        id: id,
        checkInDay: checkInDay,
        checkOutDay: checkOutDay
      };
    }

    default:
    return state;
  }
}
