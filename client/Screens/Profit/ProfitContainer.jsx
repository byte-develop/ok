import React from 'react'

export default function ProfitContainer({children, status, date}) {
	return (
		<div className={`text-white w-[90%] h-12 border-[1px] rounded-lg border-opacity-25 border-white flex items-center ml-[5%] mb-3.5 mt-3 justify-between`}>
			<img className='ml-3' src={status == true ? "../public/balance.png" : "../public/payment.png"} alt="" />
			<div className='absolute ml-12 text-[15px]'>{children}</div>
			<div className="mr-[20px] text-white text-opacity-40">{date}</div>
		</div>
	)
}