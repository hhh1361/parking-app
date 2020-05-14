import React from 'react'
import { connect } from 'react-redux'

function Header(props) {
	const { header } = props
	return <td scope="row">{header}</td>
}

const mapStateToProps = state => {
	return {
		menu: state.menu,
	}
}

export default connect(mapStateToProps)(Header)
