import { Marker, Popup } from "react-leaflet";
import { LatLng } from "leaflet";
import { Dispatch, FC, useEffect, useState } from "react"
import {MapData} from "./type/MapData";
import {CreateMapData, UpdateMapData, deleteMapData} from "./MapFunction";


type Props={
  PosData: MapData;
  setPosData: Dispatch<React.SetStateAction<MapData[]>>
}


const Markers:FC<Props> = ({PosData, setPosData}) => {

  const [name, setName] = useState<string>(PosData.name)
  const [detail, setDetail] = useState<string>(PosData.detail)

  const saveEvent = () => {
    if(PosData.id !== undefined){
      var databox:MapData = CreateMapData({
        id: PosData.id,
        name: name,
        detail: detail,
        lat: PosData.lat,
        lng: PosData.lng,
      })
  
      console.log("pass")
  
      UpdateMapData(databox)
    }
  }

  const deleteEvent = async() => {
    if(PosData.id !== undefined){
      const id = PosData.id
      await deleteMapData({id})
      // await getMapData({setPosData})
      setPosData((prev) => {
        return prev.filter((data) => data.id !== id)
      })
    }else{
      alert("this pin is invalid pin!")
    }
    
  }

  useEffect(() => {
    console.log(PosData)
  },[PosData])

  return (
    <div>
      <Marker
        riseOnHover 
        position={new LatLng(PosData.lat, PosData.lng)}
        eventHandlers={{
          popupopen: () => {
            console.log(`marker name=:${name}\nmarker detail=:${detail}\n marker id=:${PosData.id}`)
          }
        }}
      >
        <Popup
          className="mb-4"
          closeOnClick
        >
          <div className="text-center">
            <div className="text-left text-xl pb-4">スポット詳細</div>
            <div className="flex justify-center items-center mb-4">
              <label>Marker name:</label>
              <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder="マーカー名" className="border-b" />
            </div>
            <div className="flex justify-center items-center mb-4">
              <label>Detail:</label>
              <textarea value={detail} onChange={(e) => { setDetail(e.target.value) }} placeholder="概要" className="border" />
            </div>
            <div className="flex justify-center items-center m-2">
              <button
                className="border rounded-lg p-4 bg-neutral-300 hover:brightness-90"
                onClick={() => {saveEvent()}}
              >
                保存
              </button>
              <button
                className="border rounded-lg p-4 bg-neutral-300 hover:brightness-90"
                onClick={() => {deleteEvent()}}
              >
                削除
              </button>
            </div>
          </div>
        </Popup>
      </Marker>
    </div>
  )
}

export default Markers