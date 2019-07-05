import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import HotelDetail from '../src/js/Components/HotelDetail.js';
import renderer from 'react-test-renderer';
import { Link, Route } from "react-router-dom"

test("detail", () => {
  const component = renderer.create(
    <MemoryRouter initialEntries=
    {['hotels/141356?checkInDate=2019-07-8&checkOutDate=2019-07-9']}>
    <Route component={props => <HotelDetail {...props} />}
    path='hotels/141356?checkInDate=2019-07-8&checkOutDate=2019-07-9' />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
