import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import GoogleGeocodeAPI_wrapper from '../src/js/Components/GoogleGeocodeAPI_wrapper.js';
import GoogleGeocodeAPI from '../src/js/libs/GoogleGeocodeAPI.js';
import testRendrer from 'react-test-renderer';
import { Link, Route } from "react-router-dom"
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';

// ここらへんはいるかは不明
Enzyme.configure({ adapter: new Adapter() });

let container;
let script;

beforeEach(() => {
  container = document.createElement('div');
  // document.body.appendChild(container);
  script = document.createElement("script");
  script.src = "https://map.yahooapis.jp/js/V1/jsapi?appid=dj00aiZpPUFjQzFjbjNvemRPayZzPWNvbnN1bWVyc2VjcmV0Jng9MzQ-";
  container.appendChild(script);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("Y is installed", async () => {
  // act(() => {
  //   ReactDOM.render(<GoogleGeocodeAPI_wrapper />, container);
  // });
  // let script = await document.createElement("script");
  // script.src = "https://map.yahooapis.jp/js/V1/jsapi?appid=dj00aiZpPUFjQzFjbjNvemRPayZzPWNvbnN1bWVyc2VjcmV0Jng9MzQ-";
  // await document.body.appendChild(script);
  let googleGeocodeAPI = await new GoogleGeocodeAPI("東京都千代田区丸の内１丁目");
  await googleGeocodeAPI.sendRequest();
});
// const testRendrer = testRendrer.create(
//   <script src = "https://map.yahooapis.jp/js/V1/jsapi?appid=dj00aiZpPUFjQzFjbjNvemRPayZzPWNvbnN1bWVyc2VjcmV0Jng9MzQ-">
//   </script>);
// let script = document.createElement("script");
// script.src = "https://map.yahooapis.jp/js/V1/jsapi?appid=dj00aiZpPUFjQzFjbjNvemRPayZzPWNvbnN1bWVyc2VjcmV0Jng9MzQ-";
// testRendrer.appendChild(script);
// let googleGeocodeAPI_wrapper = new GoogleGeocodeAPI_wrapper;
// googleGeocodeAPI.sendRequest();
// expect(false).toBe(true);
