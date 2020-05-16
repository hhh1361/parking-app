import React from 'react'
import { connect } from 'react-redux'

import './Form.css'

function Form(props) {
	return <div className="container">something</div>
}

const mapStateToProps = state => {
	return {
		carList: state.carList,
		sort: state.sort,
		onTerritory: state.onTerritory,
	}
}

export default connect(mapStateToProps)(Form)
