import React from 'react';

import Card from './Card';

const CardList = ({robots}) => {
	const cardArray = robots.map((user ,i) => {
		return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
	})

	return (
		<div>{cardArray}</div>
/*Or insted of {cardArray}, we can put "return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>" here*/
		);
}

export default CardList;