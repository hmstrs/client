import React from 'react';

import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap'

import { FaRegMap, FaRegHeart, FaPlus, FaRegBell, FaRegUser } from 'react-icons/fa';

import './NavBar.css'

function NavBar() {
  return (
		<div className="NavBar">
			<LinkContainer to="/" exact>
				<Button variant="link">
					<FaRegMap />
				</Button>
			</LinkContainer>
			<LinkContainer to="/likes">
				<Button variant="link">
					<FaRegHeart />
				</Button>
			</LinkContainer>
			<LinkContainer to="/create">
				<Button variant="dark" className="primary">
					<FaPlus />
				</Button>
			</LinkContainer>
			<LinkContainer to="/notifications">
				<Button variant="link">
				<FaRegBell />
				</Button>
			</LinkContainer>
			<LinkContainer to="/profile">
				<Button variant="link">
					<FaRegUser />
				</Button>
			</LinkContainer>
		</div>
	)
}

export default NavBar;
