import React from 'react'

export default function BurgerMenuItems({ burger }) {
	return (
		<div
			className={` fixed h-[100vh] w-[100vw] bg-[#000] z-20 top-0 ${
				burger ? 'block' : 'hidden'
			}`}
		>
				<div className="text-white flex items-center translate-x-[15%] pt-36">
					<p className='text-[36px] font-bold pr-6'>Меню</p>
					<div className="flex w-36 h-9 bg-[#1A1A1A] rounded-lg justify-center items-center">
						<img src="../public/Gear.png" alt="" />
						<p className='pl-2'>Login</p>
					</div>
				</div>
				<ul className='text-white text-[20px] translate-x-[15%] mt-10'>
					<li>
						<button className='flex pb-4'>
							<img src="../public/Bank.png" alt="" />
							<p className='pl-3'>Настроить выплаты</p>
						</button>
					</li>
					<li>
						<button className='flex pb-4'>
						<img src="../public/Link.png" alt="" />
							<p className='pl-3'>Подключение</p>
						</button>
					</li>
					<li>
						<button className='flex pb-4'>
						<img src="../public/Bell.png" alt="" />
							<p className='pl-3'>Уведомления</p>
						</button>
					</li>
					<li>
						<button className='flex pb-4'>
						<img src="../public/Ref.png" alt="" />
							<p className='pl-3'>Реферальная система</p>
						</button>
					</li>
					<li>
						<button className='flex pb-4'>
						<img src="../public/TP.png" alt="" />
							<p className='pl-3'>Техническая поддержка</p>
						</button>
					</li>
					<li>
						<button className='flex'>
						<img src="../public/Gem.png" alt="" />
							<p className='pl-3'>Наш Телеграм канал</p>
						</button>
					</li>
				</ul>
			<div 
			className='flex text-white absolute bottom-0 ml-[50%] -translate-x-2/4 mb-5'>
				<img src='../public/RU.png' alt='' />
				<p className='pl-2'>Русский</p>
				<p className='pl-2 underline'>RU</p>
			</div>
		</div>
	)
}
