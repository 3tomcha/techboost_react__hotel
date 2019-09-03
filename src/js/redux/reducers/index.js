import { combineReducers } from "redux";
import { home } from './home';
import { hoteldetail } from './hoteldetail';
import { hotel } from './hotel';
import { searchform } from './searchform';
// import home from './home';
// import hoteldetail  from './hoteldetail';

// export default combineReducers({home});
export default combineReducers({home, hoteldetail, hotel, searchform});
// export default combineReducers({home, hoteldetail});
