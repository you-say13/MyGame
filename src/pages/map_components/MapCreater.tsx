import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import Markers from "./Markers";
import { useEffect, useState } from "react"
import { MapEvents } from "./MapEvents";
import { MapData } from "./type/MapData";
import { getMapData } from "./MapFunction";
import { LatLng, latLng } from "leaflet";

const MapCreater = () => {
	document.title="旅行用マップ"

	const [PosData, setPosData] = useState<Array<MapData>>([])
	const [flag, SetFlag] = useState(false)
	const [isChangeCenter, SetIsChangeCenter] = useState(false)
	const [center, SetCenter] = useState<LatLng>()

	const MoveMarker = () => {
		const map = useMap()
		if(!center) return
    map.setView(center, 11)
		return null
  }

	useEffect(()=>{
		getMapData({setPosData})
	}, [])

	return (
		<div className="w-screen h-[80vh]">
			<MapContainer 
				className="w-full h-full"
				center={{lat: 43.06631300099352, lng:141.351315}}
				zoom={11}
				zoomControl={false}
				doubleClickZoom={false}
				
			>
				{isChangeCenter && !flag &&
					<MoveMarker />
				}
				<div className="absolute z-[9999] rounded-xl bg-white w-[20%] p-2 m-4 border border-neutral-300 hover:pointer-cursor">
					<div className="w-full h-full font-thin text-2xl" onClick={() => SetFlag(!flag)}>マーカー一覧</div>
					{flag &&
						<div className="w-full mt-2 flex flex-col justify-start gap-2">
						{
							PosData.map((marker, index) => {
								return (
									<div key={index} className="w-full flex items-center justify-start font-thin">
										<li className="w-1/2 whitespace-nowrap truncate">{marker.name}</li>
										<button className="w-1/2 border border-neutral-800 rounded-lg bg-black text-white" onClick={() => {
											SetCenter(latLng(marker.lat, marker.lng))
											// マーカーに沿って画面を移動するため
											SetIsChangeCenter(true)
										}}>移動</button>
									</div>
								)
							})
						}
					</div>
					}
				</div>
				<TileLayer
					attribution="googlemap"
					url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
				/>
				<MapEvents />
				{PosData && PosData.length != 0 &&
					PosData.map((pos, index) => {
						console.log(pos)
						return(
							<div key={index}>
								<Markers PosData={pos} setPosData={setPosData} />
							</div>
						)
					})
				}
			</MapContainer>
		</div>
	)
}

export default MapCreater;