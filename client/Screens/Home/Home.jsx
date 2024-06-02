import React from 'react'
import Bar from './Bar/Bar'
import { useState } from 'react'
import ChartItem from './ChartComponent/ChartItem'
import CoinMenu from './Header/CoinMenu'
import Header from './Header/Header'
import BurgerMenuItems from './Header/BurgerMenuItems'
import Info from './Info/Info'
import Money from './Money/Money'

const data_10m = [
	{
		id: 'th/s',
		color: 'hsl(113, 70%, 50%)',
		data: [
			{
				x: '10:00',
				y: 5,
			},
			{
				x: '10:10',
				y: 114,
			},
			{
				x: '10:20',
				y: 288,
			},
			{
				x: '10:30',
				y: 187,
			},
			{
				x: '10:40',
				y: 73,
			},
			{
				x: '10:50',
				y: 33,
			},
			{
				x: '11:00',
				y: 176,
			},
			{
				x: '11:10',
				y: 105,
			},
			{
				x: '11:20',
				y: 30,
			},
			{
				x: '11:30',
				y: 99,
			},
			{
				x: '11:40',
				y: 292,
			},
			{
				x: '11:50',
				y: 51,
			},
		],
	},
]

const data_1h = [
	{
		id: 'th/s',
		color: 'hsl(113, 70%, 50%)',
		data: [
			{
				x: '10:00',
				y: 50,
			},
			{
				x: '11:00',
				y: 70,
			},
			{
				x: '12:00',
				y: 83,
			},
			{
				x: '13:00',
				y: 137,
			},
			{
				x: '14:00',
				y: 267,
			},
			{
				x: '15:00',
				y: 67,
			},
			{
				x: '16:00',
				y: 97,
			},
			{
				x: '17:00',
				y: 195,
			},
			{
				x: '18:00',
				y: 237,
			},
			{
				x: '19:00',
				y: 152,
			},
			{
				x: '20:00',
				y: 91,
			},
			{
				x: '21:00',
				y: 185,
			},
		],
	},
]

const data_1d = [
	{
		id: 'th/s',
		color: 'hsl(113, 70%, 50%)',
		data: [
			{
				x: '01.03',
				y: 26,
			},
			{
				x: '01.04',
				y: 7,
			},
			{
				x: '01.05',
				y: 40,
			},
			{
				x: '01.06',
				y: 157,
			},
			{
				x: '01.07',
				y: 29,
			},
			{
				x: '01.08',
				y: 151,
			},
			{
				x: '01.09',
				y: 91,
			},
			{
				x: '01.10',
				y: 62,
			},
			{
				x: '01.11',
				y: 82,
			},
			{
				x: '01.12',
				y: 120,
			},
			{
				x: '01.13',
				y: 167,
			},
			{
				x: '01.14',
				y: 78,
			},
		],
	},
]

export default function Home() {
	const findMinY = graf => {
		let minY = graf[0].data[0].y

		graf[0].data.forEach(item => {
			if (item.y < minY) {
				minY = item.y
			}
		})

		return minY
	}

	const [tab, setTab] = useState('home')

	const [ActiveChart, setActiveChart] = useState('1d')

	let data
	let base

	if (ActiveChart === '10m') {
		data = data_10m
		base = findMinY(data_10m)
	} else if (ActiveChart === '1h') {
		data = data_1h
		base = findMinY(data_1h)
	} else if (ActiveChart === '1d') {
		data = data_1d
		base = findMinY(data_1d)
	}

	return (
		<>
			<Header />
			<Info />
			<ChartItem
				Base={base}
				data={data}
				active={ActiveChart}
				onChange={current => setActiveChart(current)}
			/>
			<Money />
			<Bar active={tab}/>
		</>
	)
}
