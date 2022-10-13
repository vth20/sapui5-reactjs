import { useState } from 'react';
import {
	Avatar,
	Card,
	CardHeader,
	Text,
	ShellBar,
	ShellBarItem,
	List,
	StandardListItem,
	ValueState,
	ProgressIndicator,
	Title,
	TitleLevel,
	FlexBox,
	FlexBoxJustifyContent,
	FlexBoxWrap,
	FlexBoxDirection,
	AnalyticalTable,
	Icon,
} from '@ui5/webcomponents-react';
import { spacing } from '@ui5/webcomponents-react-base';
import { BarChart, LineChart } from '@ui5/webcomponents-react-charts';
import './App.css';
import '@ui5/webcomponents-icons/dist/line-chart.js';
import '@ui5/webcomponents-icons/dist/horizontal-bar-chart.js';
import '@ui5/webcomponents-icons/dist/add.js';
import json from './dataset.json';
const dataset = json.dataset;
// const dataset = [
// 	{
// 		month: 'January',
// 		data: 65,
// 	},
// 	{
// 		month: 'February',
// 		data: 59,
// 	},
// 	{
// 		month: 'March',
// 		data: 80,
// 	},
// 	{
// 		month: 'April',
// 		data: 81,
// 	},
// 	{
// 		month: 'May',
// 		data: 56,
// 	},
// 	{
// 		month: 'June',
// 		data: 55,
// 	},
// 	{
// 		month: 'July',
// 		data: 40,
// 	},
// ];

export function MyApp() {
	const [toggleCharts, setToggleCharts] = useState(true);
	const [toggleNameCharts, setToggleNameCharts] = useState('Line chart');
	const [loading, setLoading] = useState(false);
	const handleHeaderClick = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setToggleCharts(!toggleCharts);
			setToggleNameCharts(toggleCharts ? 'Line Chart' : 'Bar chart');
		}, 2000);
	};
	return (
		<div>
			<ShellBar
				logo={<img src="" />}
				profile={
					<Avatar>
						<img src="" />
					</Avatar>
				}
				primaryTitle="My App"
			>
				<ShellBarItem icon="add" text="Add" />
			</ShellBar>
			<Card
				header={
					<CardHeader
						titleText="Stock Prices"
						interactive
						subtitleText={`Click here to switch to ${toggleNameCharts}`}
						onClick={handleHeaderClick}
						avatar={
							<Icon
								name={
									toggleCharts
										? 'line-chart'
										: 'horizontal-bar-chart'
								}
							/>
						}
					/>
				}
				style={{ width: '300px' }}
			>
				<Text style={spacing.sapUiLargeMargin}>My root component</Text>
				{toggleCharts ? (
					<LineChart
						dataset={dataset}
						dimensions={[{ accessor: 'month' }]}
						measures={[{ accessor: 'data', label: 'Stock Prince' }]}
						loading={loading}
					/>
				) : (
					<BarChart
						dataset={dataset}
						dimensions={[{ accessor: 'month' }]}
						measures={[{ accessor: 'data', label: 'Stock Prince' }]}
						loading={loading}
					/>
				)}
			</Card>
		</div>
	);
}
