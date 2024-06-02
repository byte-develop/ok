import React, { useState } from 'react'

export default function ProfitInfo({profitactive, balance, payments}) {

	return (
		<div className='text-white ml-5 mt-3'>
			<p className='text-[35px] font-bold'>{profitactive ? "Баланс" : "Выплаты"}</p>
			<p className='text-[14px] text-[#8C8C8C]'>{profitactive ? "Текущий баланс" : "Всего выплачено"}</p>
			<div className="flex items-center">
				<p className='text-[25px]'>{profitactive ? parseFloat(balance).toFixed(6) : parseFloat(payments).toFixed(6)}</p>
				<p className='ml-2 text-[16px] font-bold'>~BTC</p>
			</div>
		</div>
	)
}
