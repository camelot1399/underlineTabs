import React, { useEffect, useRef, useState } from "react";
import './menu.scss';

export const Menu = () => {

	const [underlineState, setUnderlineState] = useState({
		width: 10,
		left: 0
	}); 

	const [activeTab, setActiveTab] = useState(0);

	useEffect(() => {
		console.log('activeTab', menuItems[activeTab]);
	}, [activeTab]);

	const menuItems = [
		{id: 0, name: 'главная'},
		{id: 1, name: 'первая'},
		{id: 2, name: 'вторая'},
		{id: 3, name: 'третья'},
		{id: 4, name: 'четвертая'},
	];

	const onMouseMoveLi = (e) => {
		let width = e.currentTarget.clientWidth;
		let left = e.currentTarget.offsetLeft;

		setUnderlineState({
			width,
			left
		})
	}

	return (
		<div className="menu">
			<div className="menu__wrapper">
				<ul>
					{menuItems.map(item => (
						<li 
							key={item.id}
							onMouseMove={(e) => onMouseMoveLi(e)}
						>{item.name}</li>
					))}
				</ul>

				<div 
					className="underline"
					style={{left: underlineState.left, width: underlineState.width + 'px'}}
				></div>
			</div>
		</div>
	);
};