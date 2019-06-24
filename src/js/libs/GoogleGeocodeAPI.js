import React from 'react';
import ReactDOM from 'react-dom';

class GoogleGeocodeAPI extends React.Component{
  sendRequest(e){
    const address = "東京都杉並区西荻北";
    let request = {query : address};

    let geocoder = new Y.GeoCoder();
    geocoder.execute( request , function( ydf ){
      if( ydf.features.length > 0 ){
        let latlng = ydf.features[0].latlng;
        const latitude = latlng.lat();
        const longitude = latlng.lng();
        // alert(latitude + "," + longitude);
        console.log(latitude + "," + longitude);
      }
    })

  }
  render(){
    return(
      <button onClick={(e) => this.sendRequest(e)}>GoogleGeocodeAPIのテスト</button>
    );
  }
}
export default GoogleGeocodeAPI;
