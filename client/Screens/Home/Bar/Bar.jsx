import React, { Component } from 'react'
import './Bar.css'
import Button from '../Button/Button'

export default function Bar({ active }) {
	return (
		<div
			className='bar h-[73px] bg-black bg-opacity-90'
		>
			<Button
				name={'home'}
				isActive={active === 'home'}
			>
				Главная
			</Button>
			<Button
				name={'workers'}
				isActive={active === 'workers'}
			>
				Воркеры
			</Button>
			<Button
				name={'profit'}
				isActive={active === 'profit'}
			>
				Доходность
			</Button>
			<Button
				name={'connects'}
				isActive={active === 'connects'}
			>
				Подключение
			</Button>
		</div>
	)
}
