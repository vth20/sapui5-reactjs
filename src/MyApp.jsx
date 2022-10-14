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
import '@ui5/webcomponents-icons/dist/list.js';
import '@ui5/webcomponents-icons/dist/table-view.js';

import json from './dataset.json';
import pic from './assets/images/profilePictureExample.png';
import logo from './assets/images/reactLogo.png';
const dataset = json.dataset;

const tableData = new Array(500).fill(null).map((_, index) => {
	return {
		name: `name${index}`,
		age: Math.floor(Math.random() * 100),
		friend: {
			name: `friend.Name${index}`,
			age: Math.floor(Math.random() * 100),
		},
	};
});

const tableColumns = [
	{
		Header: 'Name',
		accessor: 'name', // String-based value accessors!
	},
	{
		Header: 'Age',
		accessor: 'age',
	},
	{
		Header: 'Friend Name',
		accessor: 'friend.name',
	},
	{
		Header: 'Friend Age',
		accessor: 'friend.age',
	},
];

export function MyApp() {
	const [toggleCharts, setToggleCharts] = useState(true);
	const [toggleNameCharts, setToggleNameCharts] = useState('Line chart');
	const [loading, setLoading] = useState(false);
	const contentTitle = toggleCharts ? 'Line Chart' : 'Bar Chart';
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
				logo={<img src={logo} />}
				profile={
					<Avatar>
						<img src={pic} />
					</Avatar>
				}
				primaryTitle="My App"
			>
				<ShellBarItem icon="add" text="Add" />
			</ShellBar>
			<FlexBox
				justifyContent={FlexBoxJustifyContent.Center}
				wrap={FlexBoxWrap.Wrap}
				style={spacing.sapUiContentPadding}
			>
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
					style={{ width: '300px', ...spacing.sapUiContentPadding }}
				>
					<Text style={spacing.sapUiLargeMargin}>{contentTitle}</Text>
					{toggleCharts ? (
						<LineChart
							dataset={dataset}
							dimensions={[{ accessor: 'month' }]}
							measures={[
								{ accessor: 'data', label: 'Stock Prince' },
							]}
							loading={loading}
						/>
					) : (
						<BarChart
							dataset={dataset}
							dimensions={[{ accessor: 'month' }]}
							measures={[
								{ accessor: 'data', label: 'Stock Prince' },
							]}
							loading={loading}
						/>
					)}
				</Card>
				<Card
					header={
						<CardHeader
							titleText="Process"
							subtitleText="List"
							avatar={<Icon name="list" />}
						/>
					}
					style={{ width: '300px', ...spacing.sapUiContentPadding }}
				>
					<List>
						<StandardListItem
							additionalText="finished"
							additionalTextState={ValueState.Success}
						>
							Activity 1
						</StandardListItem>
						<StandardListItem
							additionalText="failed"
							additionalTextState={ValueState.Error}
						>
							Activity 2
						</StandardListItem>
						<StandardListItem
							additionalText="In process"
							additionalTextState={ValueState.Warning}
							style={{ height: '80px' }}
						>
							<Title level={TitleLevel.H5}>Activity 3</Title>
							<ProgressIndicator
								value={78}
								valueState={ValueState.Success}
							/>
						</StandardListItem>
						<StandardListItem
							additionalText="In process"
							additionalTextState={ValueState.Warning}
							style={{ height: '80px' }}
						>
							<Title level={TitleLevel.H5}>Activity 4</Title>
							<ProgressIndicator
								value={5}
								valueState={ValueState.Error}
							/>
						</StandardListItem>
					</List>
				</Card>
				<Card
					header={
						<CardHeader
							titleText="Analytical Table"
							avatar={<Icon name="table-view" />}
						/>
					}
					style={{
						maxWidth: '900px',
						...spacing.sapUiContentPadding,
					}}
				>
					<AnalyticalTable
						visibleRows={6}
						rowHeight={30}
						data={tableData}
						columns={tableColumns}
					/>
				</Card>
			</FlexBox>
		</div>
	);
}
