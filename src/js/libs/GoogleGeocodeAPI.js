import React from 'react';
import ReactDOM from 'react-dom';

class GoogleGeocodeAPI extends React.Component{
  sendRequest(e){

  }
  render(){
    return(
      <button onClick={(e) => this.sendRequest(e)}>GoogleGeocodeAPIのテスト</button>
    );
  }
}
export default GoogleGeocodeAPI;
