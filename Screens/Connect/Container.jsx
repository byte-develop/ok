import React from 'react'

export default function Container({children, active}) {
	return (
		<div className={`text-white w-[90%] h-12 border-[1px] rounded-lg border-opacity-25 border-white flex items-center ml-[5%] mb-3.5 ${active ? "text-opacity-100" : 'text-opacity-30'}`}>
			<div className={`h-[12px] w-[12px] rounded-full ml-[20px] ${active ? 'bg-green-600' : 'bg-red-700'}`}></div>
			<div className='ml-[20px] text-[15px]'>{children}</div>
		</div>
	)
}
