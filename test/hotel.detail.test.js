import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import HotelDetail from '../src/js/Components/HotelDetail.js';
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

jest.mock('query-string');
const queryString = require('query-string');
queryString.parse.mockReturnValue({
  checkInDate: "2019-08-08",
  checkOutDate: "2019-08-09"
});


jest.mock('../src/js/libs/RakutenTravelApi');
RakutenTravelApi.fetchDetailPlan.mockResolvedValue({
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
});

test("query", async() => {
  console.log(queryString.parse("a"));
  const wrapper = mount(
    <HotelDetail
      match={{params: {id: 25555}}}
      location={{search: '東京都千代田区丸の内１丁目'}}
      />);
      console.log(wrapper.debug());
      console.log(wrapper.state());

      // await promise;


      // HotelDetail.setState().then(
        // expect("aa").toBe("bbb")
      // );

      // expect(wrapper.find('ul')).to.have.lengthOf(3);

      // console.log(HotelDetail.prototype.componentDidMount);


      // const hotelDetail = await TestRenderer.create(
      //   <HotelDetail
      //      match={{params: {id: 25555}}}
      //      location={{search: '東京都千代田区丸の内１丁目'}}
      //      />);
      // // console.log(hotelDetail.debug());
      // // console.log(hotelDetail.toJSON());
      //  await expect(hotelDetail.toJSON()).toMatchSnapshot();
    });

    // test("mock", () => {
    //   jest.mock("../src/js/Components/HotelDetail.js", ()=>{
    //     return jest.fn().mockImplementation(()=>{
    //       return "";
    //     });
    //   });
    // });

    // test("detail1", async() => {
    //   const wrapper = shallow(<HotelDetail match={{params:{id:141356}}} location={{search: "/hotels/141356?checkInDate=2019-07-20&checkOutDate=2019-07-21"}}
    //     />);
    //     wrapper

    // wrapper.debug();

    // const tree = await TestRenderer.create(<HotelDetail match={{params:{id:141356}}} location={{search: "/hotels/141356?checkInDate=2019-07-20&checkOutDate=2019-07-21"}}
    // />);
    //     await expect(tree).toMatchSnapshot();
    // });

    //   it('/foo routing', () => {
    //     const tree = TestRenderer.create(
    //       <MemoryRouter initialEntries={["/hotels/141356?checkInDate=2019-07-20&checkOutDate=2019-07-21"]}><MainRouter /></MemoryRouter>
    //     ).toJSON()
    //     expect(tree).toMatchSnapshot()
    //   });
    //
    // test("detail", async() => {
    // console.log(TestRenderer);
    // let testRenderer = await TestRenderer.create(
    //   <MemoryRouter initialEntries={["/hotels/141356?checkInDate=2019-07-20&checkOutDate=2019-07-21"]}>
    //   <MainRouter />
    //   </MemoryRouter>
    // );
    // const root = await testRenderer.root;
    // const hoteldetail = await root.findByType(HotelDetail);
    //
    // // 下記でstateは取得できるらしいが、更新はされていないので更新をしたい
    // console.log(await hoteldetail._currentFiber().stateNode.state);

    // const wrapper = render(
    //   <MemoryRouter initialEntries={["/hotels/141356?checkInDate=2019-07-20&checkOutDate=2019-07-21"]}>
    //   <App />
    //   </MemoryRouter>
    // );
    // console.log(wrapper.find(HotelDetail));


    // console.log(wrapper.find(HotelDetail));

    // expect(toJson(wrapper).find(MainRouter)).toMatchSnapshot();




    // const instance = testRenderer.getInstance();
    // expect(instance.state.id).toBe(1);


    // console.log(hoteldetail._currentFiber());
    // console.log(hoteldetail._currentFiber().stateNode);

    // console.log(testRenderer);
    // console.log(testRenderer.root);
    // console.log(testRenderer.root._fiber);

    // console.log(testRenderer.getInstance());
    // console.log(testRenderer.root);
    //
    // testRenderer.flushPassiveEffects();
    // console.log(testRenderer);


    // console.log(hoteldetail);


    // console.log(hoteldetail.memorizedState);


    // console.log(hoteldetail.props.match.params.id);


    // console.log(hoteldetail.toJSON());

    // await testRenderer.toJSON().toMatchSnapshot();

    // propsは取得できる。その後のstateを読み取りたい
    // console.log(hoteldetail);
    // console.log(hoteldetail.state.checkInDay);

    // TestRenderer.update(hoteldetail);

    // console.log(hoteldetail.state.id);

    // const hotelDetail = () => <HotelDetail/>;
    // console.log(root.findByType(HotelDetail));
    // console.log(instance);

    // console.log(root.findByType('div'));
    // console.log(instance.state.id);


    // console.log(root);
    //
    // await wrapper.update();
    // console.log(wrapper.toJSON());
    // console.log(wrapper.toJSON().children);

    // const testInstance = wrapper.getInstance();
    // console.log(testInstance);

    // expect(wrapper.toJSON()).toMatchSnapshot();
    // expect(testInstance.findByType(div).)




    // expect(wrapper.root.instance.state).toBe("Hello Bob");



    // const wrapper = () => {
    //   return (
    //     <MemoryRouter initialEntries={["/hotels/141356?checkInDate=2019-07-12&checkOutDate=2019-07-13"]}>
    //       <MainRouter />
    //     </MemoryRouter>
    //   )
    // };
    // const root = tree.root;
    // // const root = TestRenderer.create(wrapper).root;
    // const instance = root.instance;
    // console.log(instance.state.id);

    // console.log(wrapper.state());
    // expect(wrapper.state("id")).to.equal(10);

    // expect(wrapper.find("div").length).toBe(4);
    // wrapper.find('button').simulate('click');
    // console.log(wrapper.debug());

    // <Link to="/hotels/141356?checkInDate=2019-07-12&checkOutDate=2019-07-13">
    // <a href="/hotels/141356?checkInDate=2019-07-12&checkOutDate=2019-07-13">
    //   <button>詳細ボタン</button>
    // </a>
    // </Link>


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
    // });
