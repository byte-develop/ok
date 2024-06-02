import React, { useState } from 'react'
import { ResponsiveLine } from '@nivo/line'
import ChartButton from './ChartButton/ChartButton'

const theme = {
	grid: {
		line: {
			stroke: 'rgba(255, 255, 255, 0.2)',
			strokeWidth: 0.4,
		},
	},
	axis: {
		ticks: {
			line: {
				strokeWidth: 0,
			},
			text: {
				fontSize: 8,
				fill: 'rgba(255, 255, 255, .2',
				outlineWidth: 0,
				outlineColor: 'transparent',
			},
		},
	},
	tooltip: {
		wrapper: {},
		container: {
			background: 'rgba(255, 255, 255, .1)',
			color: '#fff',
			fontSize: 10,
		},
		basic: {},
		chip: {},
		table: {},
		tableCell: {},
		tableCellValue: {},
	},
}

export default function ChartItem({ data, active, onChange, Base }) {
	return (
		<div className='h-48 mt-5 w-[96%] ml-[2%] border-t-[1px] border-white border-opacity-10'>
			<div className='ml-[10px] mt-2'>
				<ChartButton
					chartActive={active === '10m'}
					onClick={() => onChange('10m')}
				>
					10 мин
				</ChartButton>
				<ChartButton
					chartActive={active === '1h'}
					onClick={() => onChange('1h')}
				>
					1 час
				</ChartButton>
				<ChartButton
					chartActive={active === '1d'}
					onClick={() => onChange('1d')}
				>
					1 день
				</ChartButton>
			</div>
			<ResponsiveLine
				theme={theme}
				data={data}
				colors={'#F7931A'}
				margin={{ bottom: 50, left: 20, right: 20 }}
				xScale={{ type: 'point' }}
				yScale={{
					type: 'linear',
					min: 'auto',
					max: 'auto',
					stacked: true,
					reverse: false,
				}}
				yFormat=' >-.2f'
				curve='natural'
				axisTop={null}
				axisRight={null}
				axisBottom={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legendOffset: 36,
					legendPosition: 'middle',
					truncateTickAt: 0,
				}}
				axisLeft={null}
				enableGridY={false}
				lineWidth={1.21}
				pointSize={5}
				enableArea={true}
				areaOpacity={0.16}
				areaBaselineValue={Base}
				pointColor={'white'}
				pointBorderColor={{ from: 'serieColor' }}
				pointLabel='data.yFormatted'
				pointLabelYOffset={-12}
				enableSlices='x'
				enableTouchCrosshair={true}
				useMesh={true}
			/>
		</div>
	)
}
