import React, { useState } from 'react'
import CoinMenu from './CoinMenu'
import BurgerMenu from './BurgerMenu'
import BurgerMenuItems from './BurgerMenuItems'

export default function Header() {

	const [burger, setBurger] = useState(false)

	function handleBurger() {
		setBurger(!burger)
	}

	return (
		<div className='flex items-center h-[4.375rem] border-b-[1px] border-white border-opacity-10'>
			<BurgerMenuItems burger={burger}/>
			<BurgerMenu onChange={() => handleBurger()}/>
			<CoinMenu />
		</div>
	)
}
