import React, { useState } from 'react'

export default function Money() {
	const [money24h, setMoney24h] = useState(0)
	const [moneyyesterday, setMoneyYesterday] = useState(0)

	return (
		<div className='mt-8 border-t-[1px] border-white border-opacity-10 mb-24'>
			<div className='text-white text-[14px] ml-5 pt-2'>
				<p className='text-[#8C8C8C]'>Начисления за 24 часа</p>
				<div className='flex items-center'>
					<p className='text-[22px]'>{parseFloat(money24h).toFixed(6)}</p>
					<p className='font-bold text-[19px] pl-2'>~ BTC</p>
				</div>
			</div>
			<div className='text-white text-[14px] ml-5'>
				<p className='text-[#8C8C8C]'>Начисления за вчера</p>
				<div className='flex items-center'>
					<p className='text-[22px]'>{parseFloat(moneyyesterday).toFixed(6)}</p>
					<p className='font-bold text-[19px] pl-2'>~ BTC</p>
				</div>
			</div>
		</div>
	)
}
