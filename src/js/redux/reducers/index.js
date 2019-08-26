import { combineReducers } from "redux";
import { home } from './home';
import { hoteldetail } from './hoteldetail';
import { hotel } from './hotel';
// import home from './home';
// import hoteldetail  from './hoteldetail';

// export default combineReducers({home});
export default combineReducers({home, hoteldetail, hotel});
// export default combineReducers({home, hoteldetail});
