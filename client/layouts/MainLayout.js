import React from 'react'
import { Link } from 'react-router'
import Footer from '../components/common/Footer'
import { PageHeader } from 'react-bootstrap'
import Navigation from '../components/common/Navigation'

class MainLayout extends React.Component {
	render() {
		return (
			<div className='app'>
				<header className='primary-header'></header>
				<Navigation/>
				<main>
					{this.props.children}
				</main>
				<Footer
					footerText={ footerConfig.footerText }
				/>
			</div>
		)
	}
}

const footerConfig = {
	footerText: 'This site was built with react!'
}

MainLayout.contextTypes = {
	router: React.PropTypes.object.isRequired
}


export default MainLayout
