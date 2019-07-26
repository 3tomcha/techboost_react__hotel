import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import HotelPlanList from '../src/js/Components/HotelPlanList.js';
import App from '../src/js/App.js';
import TestRenderer from 'react-test-renderer';
import { Link, Route } from "react-router-dom"
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {render} from "enzyme";
import ReactTestUtils from 'react-dom/test-utils';
import {MainRouter} from '../src/js/Components/MainRouter.js';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import RakutenTravelApi from '../src/js/libs/RakutenTravelApi';

Enzyme.configure({ adapter: new Adapter() });


const roomInfos =
[
  {"roomInfo":
    [
      {"roomBasicInfo":
        {"roomClass":"s2",
          "roomName":"□禁煙□スタンダードダブルルーム ",
          "planName":"【楽天限定】ポイント5倍！！素泊まりプラン＊東京駅徒歩3分＊高濃度人工炭酸泉でぐっすり",
          "reserveUrl":"https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=141356&f_syu=s2&f_hi1=2019-08-03&f_hi2=2019-08-04&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3997968",
        }
      },
      {"dailyCharge":{
        "total":17900
      }}
    ]
  },
  {"roomInfo":
    [
      {"roomBasicInfo":
        {"roomClass":"s2",
          "roomName":"□禁煙□スタンダードダブルルーム ",
          "planName":"【楽天限定】ポイント5倍！！素泊まりプラン＊東京駅徒歩3分＊高濃度人工炭酸泉でぐっすり",
          "reserveUrl":"https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=141356&f_syu=s2&f_hi1=2019-08-03&f_hi2=2019-08-04&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3997968",
        }
      },
      {"dailyCharge":{
        "total":17900
      }}
    ]
  }
];

test("aaa" ,() =>{
  const wrapper = shallow(<HotelPlanList roomInfos={roomInfos} />);
  console.log(wrapper.debug());
});
