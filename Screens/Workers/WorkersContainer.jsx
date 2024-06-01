import React from 'react'

export default function WorkersContainer({children, active, hashrate}) {
	return (
		<div className={`text-white w-[90%] h-12 border-[1px] rounded-lg border-opacity-25 border-white flex items-center ml-[5%] mb-3.5 mt-3 justify-between`}>
			<div className={`h-[12px] w-[12px] rounded-full ml-[20px] ${active ? 'bg-green-600' : 'bg-red-700'}`}></div>
			<div className='absolute ml-12 text-[15px] translate-y-[10%]'>ID {children}</div>
			<div className="mr-[20px]">{hashrate}</div>
		</div>
	)
}
