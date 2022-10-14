import { Avatar, ShellBar, ShellBarItem } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-icons/dist/add.js';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Home } from './Home';
import { Detail } from './Detail';
import logo from './assets/images/reactLogo.png';
import pic from './assets/images/profilePictureExample.png';

export function MyApp() {
	const navigate = useNavigate();
	const handleLogoClick = () => {
		navigate('/');
	}
	return (
		<>
			<ShellBar
				logo={<img src={logo} />}
				profile={
					<Avatar>
						<img src={pic} />
					</Avatar>
				}
				primaryTitle="My App"
				onLogoClick={handleLogoClick}
			>
				<ShellBarItem icon="add" text="Add" />
			</ShellBar>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/detail" element={<Detail />} />
				<Route path="/" element={<Navigate replace to="/home" />} />
			</Routes>
		</>
	);
}
