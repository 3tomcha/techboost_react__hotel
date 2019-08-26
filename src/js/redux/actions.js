export const setHoteldetail = hotel => ({
    type: "setHoteldetail",
    payload: hotel
});

export const setHome = () => ({
    type: "setHome"
});

export const setHotel = () => ({
    type: "setHotel"
});

export const setForm = location => ({
    type: "setLocation",
    payload: location
});

export const setCheckIn = date => ({
    type: "setCheckIn",
    payload: date
});

export const setCheckOut = date => ({
    type: "setCheckOut",
    payload: date
});

export const setHotelInfo = hotel =>({
  type: "setHotelInfo",
  payload: hotel
});
