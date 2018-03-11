import React from 'react'
import {withProps,withLifecycle} from 'react-with-props'

const TestView = (props) => (
	Object.keys(props).map(v =>
		<p>{v}: {props[v]}</p>
	)
)

const mapStateToProps = (props) => ({
	hello: 'world',
	fuck: 'shit'
})

const mapDispatchToProps = (props) => ({
	componentDidMount() {
		console.log('mount')
	},
	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
	}
})

const Test = withProps(mapStateToProps)(withLifecycle(mapDispatchToProps)(TestView))

class TestContainer extends React.Component {
	state = {}
	render() {
		return (
			<div>
				<p onClick={() => this.setState({test:'yes'})}>test</p>
				<Test test={this.state.test} />
			</div>
		)
	}
}

export default TestContainer