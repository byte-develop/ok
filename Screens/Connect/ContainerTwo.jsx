import React from 'react'

export default function ContainerTwo({children, img}) {
	return (
		<div className='text-white w-[90%] h-12 border-[1px] rounded-lg border-opacity-25 border-white flex items-center ml-[5%] mb-3.5 mt-2'>
			<img className='ml-[20px]' src={img} alt="" />
			<div className='ml-[20px] text-[15px]'>{children}</div>
		</div>
	)
}
