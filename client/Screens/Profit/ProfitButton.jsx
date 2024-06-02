import React, { useState } from 'react'

export default function WorkersButton({profitactive, onChange}) {

	return (
		<div className='text-white text-[11px] mt-3 ml-5'>
			<button className={`w-[95px] h-[23px] rounded-md ${profitactive === true ? 'bg-[#F7931A] text-black' : 'bg-black border-[1px] border-white border-opacity-20'}`} onClick={() => onChange(true)}>Начисления</button>
			<button className={`w-[95px] h-[23px] rounded-md ml-3 ${profitactive === false ? 'bg-[#F7931A] text-black' : 'bg-black border-[1px] border-white border-opacity-20'}`} onClick={() => onChange(false)}>Выплаты</button>
		</div>
	)
}
