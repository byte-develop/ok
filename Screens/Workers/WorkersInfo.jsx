import React, { useState } from 'react'

export default function WorkersInfo({col_active, col_nonactive}) {

	return (
		<div className='text-white ml-5 mt-9'>
			<p className='text-[36px] font-bold'>Список воркеров</p>
			<div className="flex mt-3">
				<div className="flex">
					<p className='text-[25px] font-bold'>{col_active}</p>
					<img className='ml-3' src="../public/active.svg" alt="" />
				</div>
				<div className="flex">
					<p className='text-[25px] font-bold ml-5'>{col_nonactive}	</p>			
					<img className='ml-3' src="../public/non-active.svg" alt="" />
					</div>
			</div>
		</div>
	)
}
