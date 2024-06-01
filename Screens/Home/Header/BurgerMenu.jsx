import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import BurgerMenuItems from './BurgerMenuItems'

export default function BurgerMenu({onChange}) {

	return (
		<button className='z-30' onClick={() => onChange()}>
			<RxHamburgerMenu
				className='ml-4'
				size={40}
				color='white'
			/>
		</button>
	)
}
