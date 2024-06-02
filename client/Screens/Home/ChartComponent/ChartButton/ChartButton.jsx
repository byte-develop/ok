import React from 'react'

export default function ChartButton({ chartActive, children, ...props }) {
	return (
		<button
			{...props}
			style={{ border: '1px solid rgba(255, 255, 255, .2)' }}
			className={`mb-3 ml-[10px] w-12 h-6 bg-[#1A1A1A] text-xs rounded-md ${
				chartActive ? 'bg-[#F7931A]' : 'bg-[#1A1A1A] text-white'
			}`}
		>
			{children}
		</button>
	)
}
