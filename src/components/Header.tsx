import { useEffect, useState } from 'react';
import User from '../Data/Player.json';
import { Player } from '../types/Status';

const Header = () => {

	const user: Player = User.Player;
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		console.log('Header time set');
		const timer = setInterval(() => {
			setDate(new Date());
		}, 1000);
		return () => {
			clearInterval(timer);
		}
	}, [])

	return (
		<div className={`bg-black flex w-full h-full`}>
			<div className="flex-col items-center w-2/3 h-full rounded-l-md border border-white py-2">
				<div className='ml-10 grid grid-rows-3 grid-flow-col gap-1'>
					<div className="text-white">
						名前:{user.name}
					</div>
					<div className="text-white">
						HP:{user.status.hp}
					</div>
					<div className="text-white">
						MP:{user.status.mp}
					</div>
					<div className="text-white">
						Level:{user.level}
					</div>
					<div className="text-white">
						ATK:{user.status.atk}
					</div>
					<div className="text-white">
						DEF:{user.status.def}
					</div>
					<div></div>
					<div className='text-white'>
						Gold:{user.gold}
					</div>
					<div className='text-white'>
						Exp:{user.exp}
					</div>
				</div>
			</div>
			<div className='flex justify-center items-center w-1/3 h-full rounded-r-md border border-white text-white'>
				{date.toLocaleDateString()} {date.toLocaleTimeString()}
			</div>
		</div>
	)
}
export default Header;