/* eslint-disable camelcase */
import React from 'react'
import { connect } from 'react-redux'
import './Spinner.css'

function Spinner(props) {
	const { isLoading } = props
	const lockerClassname = isLoading ? 'LockOn' : 'LockOff'

	return (
		<>
			{isLoading ? <div className="loader" /> : null}
			<div id="skm_LockPane" className={lockerClassname} />
		</>
	)
}

const mapStateToProps = state => {
	return {
		isLoading: state.isLoading,
	}
}

export default connect(mapStateToProps)(Spinner)
