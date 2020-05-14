import React from 'react'
import { connect } from 'react-redux'
import './Header.css'

function Header(props) {
	const { mode } = props
	return (
		<ul className="nav nav-pills nav-justified">
			<li className="nav-item" />
		</ul>
	)
}

const mapStateToProps = state => {
	return {
		mode: state.mode,
	}
}

export default connect(mapStateToProps)(Header)
