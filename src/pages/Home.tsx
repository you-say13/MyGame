import { useState } from "react";

const Home = () => {

	const [location, setLocation] = useState<string>("");

	const clickEvent = () => {
		window.location.href = location
	}

	return (
		<h1 className="w-full h-full flex flex-col justify-center items-center">
			<select value={location} onChange={(e) => { setLocation(e.target.value) }} name="select-app" className="border rounded-lg p-2">
				<option value={"/create"}>(旧バージョン)表を作成する＋</option>
				<option value={"/newCreate"}>(新バージョン)表を作成する＋</option>
				<option value={"/Dungeon"}>ゲームで遊ぶ</option>
				<option value={"/Map"}>マップを利用する</option>
			</select>
			<button onClick={clickEvent}>選択</button>
		</h1>
	)
}
export default Home;