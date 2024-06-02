import React, { useState } from 'react'
import Bar from '../Home/Bar/Bar'
import Header from '../Home/Header/Header'
import ProfitInfo from './ProfitInfo'
import ProfitButton from './ProfitButton'
import ProfitContainer from './ProfitContainer'
import ProfitList from "./ProfitList"

export default function Profit() {

	const data = [
		{ id: 1, summa: '0.00189009', status: true, date: '19.05.2024' },
		{ id: 2, summa: '0.00189009', status: true, date: '18.05.2024' },
		{ id: 3, summa: '0.00000543', status: true, date: '18.05.2024' },
		{ id: 4, summa: '0.2339009', status: false, date: '19.05.2024' },
		{ id: 5, summa: '0.00189009', status: false, date: '18.05.2024' },
		{ id: 6, summa: '2.00189009', status: false, date: '18.05.2024' },
];

	const balance = data
    .filter(item => item.status)
    .reduce((acc, item) => acc + parseFloat(item.summa), 0);

	const payments = data
    .filter(item => !item.status)
    .reduce((acc, item) => acc + parseFloat(item.summa), 0);

	const [tab, setTab] = useState('profit')

	const[profitactive, setProfitActive] = useState(true) 

	return (
		<>
			<Header />
			<ProfitInfo payments={payments} balance={balance} profitactive={profitactive}/>
			<ProfitButton profitactive={profitactive} onChange={current => setProfitActive(current)}/>
			<Bar active={tab}/>
			<ProfitList data={data} profitactive={profitactive}/>
		</>
	)
}
