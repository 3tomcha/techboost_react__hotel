import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import HotelDetail from '../Components/HotelDetail.js';
import App from '../App.js';
import TestRenderer from 'react-test-renderer';
import { Link, Route } from "react-router-dom"
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {render} from "enzyme";
import ReactTestUtils from 'react-dom/test-utils';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import RakutenTravelApi from '../libs/RakutenTravelApi';
import Home from '../Home';

Enzyme.configure({ adapter: new Adapter() });

test("home", () => {
  const wrapper = shallow(
    <Home />);
  console.log(wrapper.debug());
}
);
