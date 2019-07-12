import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import HotelDetail from '../src/js/Components/HotelDetail.js';
import App from '../src/js/App.js';
import renderer from 'react-test-renderer';
import { Link, Route } from "react-router-dom"
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
Enzyme.configure({ adapter: new Adapter() });

test("detail", () => {
  let wrapper = renderer(
    <MemoryRouter initialEntries={["/hotels/141356?checkInDate=2019-07-12&checkOutDate=2019-07-13"]}>
    <MainRouter />
    </MemoryRouter>

    // <Link to="/hotels/141356?checkInDate=2019-07-12&checkOutDate=2019-07-13">
      // <a href="/hotels/141356?checkInDate=2019-07-12&checkOutDate=2019-07-13">
      //   <button>詳細ボタン</button>
      // </a>
    // </Link>
  );
  // wrapper.find('button').simulate('click');
  console.log(wrapper.debug());


  // console.log(link);
  // console.log(link.debug());

  // const component = renderer.create(
  //   <MemoryRouter initialEntries=
  //   {['hotels/141356?checkInDate=2019-07-15&checkOutDate=2019-07-16']}>
  //   <App />
  //   </MemoryRouter>
  //
  //   // <Route component={props => <HotelDetail {...props} />}
  //   // path='hotels/141356?checkInDate=2019-07-15&checkOutDate=2019-07-16' />
  //     // <Route path="/hotels/:id" component={HotelDetail}></Route>
  //   // <MemoryRouter initialEntries=
  //   // {['hotels/141356?checkInDate=2019-07-15&checkOutDate=2019-07-16']}>
  //   // <Route component={props => <HotelDetail {...props} />}
  //   // path='hotels/141356?checkInDate=2019-07-15&checkOutDate=2019-07-16' />
  //   // </MemoryRouter>
  // );
  // let tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});
