class GoogleGeocodeAPI{
  constructor(address){
    this.address = address;
  }
  sendRequest(){
    const address = this.address;
    let request = {query : address};
    let geocoder = new Y.GeoCoder();

    var latitude;
    var longitude;

    let p1 = new Promise((resolve, reject) =>
    geocoder.execute( request , function( ydf ){
      if( ydf.features.length > 0 ){
        let latlng = ydf.features[0].latlng;
        resolve(latlng);
      }
    })
  );
  return p1.then(latlng=> {
    return {"latitude":latlng.lat(), "longitude":latlng.lng()};
  });
}
}
export default GoogleGeocodeAPI;
