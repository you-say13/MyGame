import { FC } from "react";
import { useMapEvents } from "react-leaflet";
import { MapData } from "./type/MapData";
import { CreateMapData, addingMapData } from "./MapFunction";


export const MapEvents : FC = () => {

  useMapEvents({
    async dblclick(e){
      console.log(e.latlng)

      var databox:MapData = CreateMapData({
        name: "名無し",
        detail: "名無し",
        lat: e.latlng.lat,
        lng: e.latlng.lng
      })
  
      console.log("pass")

      await addingMapData(databox)

    }
  })
  return(<></>)
}