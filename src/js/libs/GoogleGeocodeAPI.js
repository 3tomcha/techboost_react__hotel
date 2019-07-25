import fetch from 'node-fetch';

export default async function fetchGeoCode(location){
  let url = `https://map.yahooapis.jp/geocode/V1/geoCoder`
  + `?appid=dj00aiZpPUFjQzFjbjNvemRPayZzPWNvbnN1bWVyc2VjcmV0Jng9MzQ-`
  + `&query=${location}&output=json&datum=wgs`;

  const res = await fetch(encodeURI(url))
  .catch(() => console.log("fetchに失敗しました"));

  if (await res.ok) {
    const json = await res.json();

    if(json.ResultInfo.Count != 0){
      let geometry = json.Feature[0].Geometry.Coordinates;
      geometry = geometry.split(",");

      return {"latitude":geometry[0], "longitude":geometry[1]};

    }else{
        throw Error("件数が0です");
    }

  }else{
    throw Error("fetchGeoCodeのエラー");
  }
}
