import React, { useState } from 'react'

export default function WorkersButton({workersactive, onChange}) {

	return (
		<div className='text-white text-[11px] mt-3 ml-5'>
			<button className={`w-[95px] h-[23px] rounded-md ${workersactive === 'active' ? 'bg-[#F7931A] text-black' : 'bg-black border-[1px] border-white border-opacity-20'}`} onClick={() => onChange('active')}>Активные</button>
			<button className={`w-[95px] h-[23px] rounded-md ml-3 ${workersactive === 'nonactive' ? 'bg-[#F7931A] text-black' : 'bg-black border-[1px] border-white border-opacity-20'}`} onClick={() => onChange('nonactive')}>Неактивные</button>
		</div>
	)
}
