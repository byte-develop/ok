import React, { useState } from 'react'
import Bar from '../Home/Bar/Bar'
import Header from '../Home/Header/Header'
import WorkersInfo from './WorkersInfo'
import WorkersButton from './WorkersButton'
import WorkersList from './WorkersList'

export default function Workers() {

	const data = [
		{ id: '01', active: true, hashrate: '121.8 th/s' },
		{ id: 't2tz', active: true, hashrate: '31.7 th/s' },
		{ id: 'antminerx32x3402', active: false, hashrate: '0.0 th/s' },
		{ id: '03', active: true, hashrate: '109 th/s' },
		{ id: '04', active: true, hashrate: '122.4 th/s' },
		{ id: '05', active: false, hashrate: '0.0 th/s' },
		{ id: '09', active: true, hashrate: '121.8 th/s' },
		{ id: '10', active: false, hashrate: '121.8 th/s' }]

	const [tab, setTab] = useState('workers')

	const[workersactive, setWorkersActive] = useState('active') 

	const col_active = data.filter(item => item.active).length;
	const col_nonactive = data.filter(item => !item.active).length;

	return (
		<>
		<Header />
		<Bar active={tab}/>
		<WorkersInfo col_active={col_active} col_nonactive={col_nonactive}/> 
		<WorkersButton workersactive={workersactive} onChange={current => setWorkersActive(current)}/>
		<WorkersList data={data} workersactive={workersactive}/>
		</>
	)
}
