import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const DEFAULT_VOLUME = "50";

const SettingScene = () => {
  const [bgmVolume, setBgmVolume] = useState(DEFAULT_VOLUME)
  const [clickVolume, setClickVolume] = useState(DEFAULT_VOLUME);

  const navigator = useNavigate()

  return (
    <div className="SelectMenu flex justify-center items-center w-full h-full bg-gray-900 text-white text-2xl font-bold">
      <div className="text-center w-2/3 h-2/3 max-h-2/3 bg-black border border-white rounded-xl overflow-auto hidden-scrollbar">
        <div className="w-full flex items-center">
          <div className="w-1/5">
            <FaArrowLeft className="mx-auto hover:cursor-pointer" onClick={() => navigator("/")} />
          </div>
          <h1 className="my-4 w-3/5">設定</h1>
        </div>
        <div className="text-start w-full">
          <h3 className="text-center w-full">音量マスタ</h3>
          <div className="w-full px-10 py-2 flex font-thin justify-center items-center">
            <label className="w-32">BGM</label>
            <input className="w-2/3 mx-2" type="range" value={bgmVolume} step={1} min={0} max={100} onChange={(e) => setBgmVolume(e.target.value)} />
            <input type="text" value={bgmVolume} className="w-12 bg-black rounded-lg border border-white text-center" onChange={(e) => setBgmVolume(e.target.value)} />
          </div>
          <div className="w-full px-10 py-2 flex font-thin justify-center items-center">
            <label className="w-32">クリック音</label>
            <input className="w-2/3 mx-2" type="range" value={clickVolume} step={1} min={0} max={100} onChange={(e) => setClickVolume(e.target.value)} />
            <input type="text" value={clickVolume} className="w-12 bg-black rounded-lg border border-white text-center" onChange={(e) => setClickVolume(e.target.value)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingScene;