import { Dispatch } from "react"
import { db } from "../../../firebase"
import {MapData} from "./type/MapData"
import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, query, setDoc } from "firebase/firestore"

export const CreateMapData = (props:{
  id?: string;
  name:string;
  detail:string;
  lat: number;
  lng: number;
}) => {
  const today = new Date();

  let dFormat : string = today.getFullYear() + "年" + (today.getMonth() + 1) +  "月" + today.getDate() + "日 " + today.getHours() + ":" + today.getMinutes()

  if(props.id !== undefined){
    return {
      id: props.id,
      name: props.name,
      detail: props.detail,
      lat: props.lat,
      lng: props.lng,
      updated: dFormat
    }
  }else{
    return {
      name: props.name,
      detail: props.detail,
      lat: props.lat,
      lng: props.lng,
      updated: dFormat
    }
  }

}

export const addingMapData = async(props:MapData) => {

  console.log(props);

  try{
    const docRef = await addDoc(collection(db, "Spots"),{ 
      name: props.name,
      detail: props.detail,
      lat: props.lat,
      lng: props.lng,
      updated: props.updated
    });
    console.log("Document written with ID: ", docRef.id)
  }catch (e){
    console.error("Error adding document: ", e)
  }
}

export const UpdateMapData = async(props:MapData)=> {
  if(props.id !== undefined){
    try{
      const docRef = doc(db, "Spots", props.id.toString());

      const docSnap = await getDoc(docRef);

      if(docSnap.exists()){
        const data = docSnap.data();

        const mapData = CreateMapData({
          name: props.name,
          detail: props.detail,
          lat: data.lat,
          lng: data.lng
        })

        setDoc(docRef, mapData)
      }
      
    }catch(e){
      console.error("occerd error: ", e);
    }
  }
}

export const getMapData = async(props:{ setPosData: Dispatch<React.SetStateAction<MapData[]>>}) => {
  let mResData : MapData[] = [];

  const q = query(collection(db, "Spots"));

  onSnapshot(q, (querySnapshot) => {
    mResData = []
    querySnapshot.forEach((doc) => {
      mResData.push({
        id: doc.id,
        name: doc.data().name,
        detail: doc.data().detail,
        lat: doc.data().lat,
        lng: doc.data().lng,
        updated: doc.data().updated,
      })
    })
    props.setPosData(mResData)
  })

  console.log("Get Document Length: ", mResData.length);

}

export const deleteMapData = async(props:{ id: string}) => {
  await deleteDoc(doc(db, "Spots", props.id))
}