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

Enzyme.configure({ adapter: new Adapter() });

jest.mock('query-string');
const queryString = require('query-string');
queryString.parse.mockReturnValue({
  checkInDate: "2019-08-08",
  checkOutDate: "2019-08-09"
});


jest.mock('../libs/RakutenTravelApi');
// JSON.stringifyがないとテスト対象のJSON.parseでエラーになる
RakutenTravelApi.fetchDetailPlan.mockResolvedValue(JSON.stringify({
  "hotels":[
    {"hotel":[{
      "hotelBasicInfo": {
        "hotelName": "テストホテル",
        "reviewAverage": 4.0,
        "hotelImageUrl": "3.jpg",
        "hotelSpecial": "素敵です",
        "access": "東京駅",
        "userReview": "レビューです",
      },
      "roomInfo": "roomInfoです"
    }]}
  ]
}));

test("query", async(done) => {
  const wrapper = await shallow(
    <HotelDetail
      match={{params: {id: 25555}}}
      location={{search: '東京都千代田区丸の内１丁目'}}
      />);
      // setStateが動くタイミングまで待つ
      setTimeout(() => {
        wrapper.update();
        console.log(wrapper.state());
        done();
      }, 4000);
    });
