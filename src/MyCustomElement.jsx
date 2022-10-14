import { createUseStyles } from 'react-jss';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { redirect } from 'react-router-dom';

const styles = {
	container: {
		backgroundColor: ThemingParameters.sapBackgroundColor,
		fontFamily: ThemingParameters.sapFontFamily,
		height: '50px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		border: '1px solid red',
		'border-radius': '10px',
		padding: '4px'
	},
};

const useStyles = createUseStyles(styles);
export const MyCustomElement = () => {
	const classes = useStyles();
	console.log(ThemingParameters);
	return (
		<div className={classes.container}>
			<span
				style={{
					color: ThemingParameters.sapNegativeColor,
					fontSize: ThemingParameters.sapFontHeader1Size,
				}}
			>
				My custom Text Element
			</span>
		</div>
	);
};
