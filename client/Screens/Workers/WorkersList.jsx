import React from 'react'
import WorkersContainer from './WorkersContainer'

export default function WorkersList({workersactive, data}) {

	return (
		<div>
		{data.map((worker) => {
			if (workersactive === 'active' && !worker.active) {
				return null;
			}
			if (workersactive === 'nonactive' && worker.active) {
				return null;
			}
			return (
				<WorkersContainer key={worker.id} active={worker.active} hashrate={worker.hashrate}>
					{worker.id}
				</WorkersContainer>
			);
		})}
	</div>
	)
}