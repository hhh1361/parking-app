/* eslint-disable camelcase */
import React from 'react'
import { connect } from 'react-redux'
import './Spinner.css'

function Spinner(props) {
	const { isLoading } = props

	return <>{isLoading ? <div className="loader" /> : null}</>
}

const mapStateToProps = state => {
	return {
		isLoading: state.isLoading,
	}
}

export default connect(mapStateToProps)(Spinner)
