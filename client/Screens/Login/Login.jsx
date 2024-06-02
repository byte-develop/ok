import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {

	const postData = async (id, login) => {
		await fetch('https://okpool.ru/user', {
				method: 'POST',
				headers: {
						'Content-Type': 'application/json',
				},
				body: JSON.stringify({ id, login }),
		})
	}
	
	const getData = async () => {
		const response = await fetch('https://okpool.ru/user')
		const data = await response.json()
		console.log(data)
	}

	const[logininput, setLogin] = useState('')

	return (
		<div className='text-white flex flex-col items-center h-[100vw] w-[100vw]text-white mt-[25vh]' >
			<div className="flex flex-col  w-[17rem] ">
				<img className='w-[47px]' src="../public/voltage.png" alt="" />
				<p className='text-[35px] font-bold w-52 leading-[125%] mt-4'>Добро пожаловать!</p>
				<p className='text-[14px] text-opacity-60 text-white w-60  mt-3'>
					Придумайте логин логин будет использоваться для подключения вашего
					оборудования
				</p>
			</div>
			<form className='mt-5 w-[17rem]' >
				<input className='mb-6 h-14 w-[17rem] bg-transparent border-[1px] border-solid border-white border-opacity-25 rounded-md pl-[20px] text-[16px] text-white placeholder:text-[color: rgba(255, 255, 255, 0.35)]' placeholder='Введите логин' type="text" onChange={(e) => setLogin(e.target.value)} value={logininput}/>
				<Link to = {'/home'}><button onClick={() => postData('8888', logininput)} className='h-14 w-[17rem] bg-white text-black rounded-md'>Создать аккаунт</button></Link>
			</form>
		</div>
	)
}