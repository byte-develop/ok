import React, { useState } from 'react'

export default function Info() {

	const [hashrate, setHashrate] = useState(0)
	const [activeworkers, setActiveWorkers] = useState(0)
	const [nonactiveworkers, setNonActiveWorkers] = useState(0)

	return (

		<div>
			<div className='text-white ml-5 mt-5'>
				<p className='text-[14.5px] text-[#8C8C8C]'>Текущий хэшрейт</p>
				<p className='text-[36px] font-bold'>{hashrate} th/s</p>
			</div>
			<div className="text-white ml-5 mt-2">
			<p className='text-[14.5px] text-[#8C8C8C]'>Состояние воркеров</p>
			<div className="flex text-[25px] font-bold">
				<div className="flex mr-5">
					<img src="../public/active.svg" alt="" />
					<div className="pl-2">
						{activeworkers}
					</div>
				</div>
				<div className="flex">
					<img src="../public/non-active.svg" alt="" />
					<div className="pl-2">
						{nonactiveworkers}
					</div>
				</div>
			</div>
			</div>
		</div>
	)
}
