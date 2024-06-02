import React, { useState } from 'react'

export default function CoinMenu() {

	const[coinActive, setCoinActive] = useState(false)

	return (
		<button 
		className='z-30 absolute top-0 right-0 mt-3 mr-4' 
		onClick={() => setCoinActive(!coinActive)}
		>
			{coinActive ? 
			<div 
			className='flex flex-col button-content'>
			<img src='../public/BTC.png' alt='' />
			<img src='../public/LTC.png' alt='' />
			</div>
			:
			<div className='button-content'>
			<img src='../public/BTC.png' alt='' />
			</div>}
		</button>
	)
}
