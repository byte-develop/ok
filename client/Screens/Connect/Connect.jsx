import React, { useState } from 'react'
import Bar from '../Home/Bar/Bar'
import Header from '../Home/Header/Header'
import Container from './Container'
import ConnectInfo from './ConnectInfo'
import Workerid from './Workerid'
import Password from './Password'

export default function Connect() {

	const [tab, setTab] = useState('connects')

	return (
		<>
			<Header />
			<ConnectInfo />
			<Bar active={tab}/>
			<Container active={true}>stratums+tcp://btc.okixpool.ru:3333</Container>
			<Container active={true}>stratums+tcp://btc.okixpool.ru:443</Container>
			<Container active={false}>stratums+tcp://btc.okixpool.ru:25</Container>
			<Workerid />
			<Password />
		</>
	)
}
