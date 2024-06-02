import React from 'react'
import ProfitContainer from './ProfitContainer'

export default function WorkersList({profitactive, data}) {

	return (
			<div>
					{data.filter(profit => (profitactive === true && profit.status) || (profitactive === false && !profit.status))
									.map(profit => (
											<ProfitContainer key={profit.id} status={profit.status} date={profit.date}>
													{profit.summa}
											</ProfitContainer>
					))}
			</div>
	);
}