import injectSheet from 'react-jss'
import {withProps} from 'react-with-props'

import View from './view'
import styles from './styles'
import {selectPhotos} from './selectors'

const mapStateToProps = (_) => ({
	photos: selectPhotos()
})

const mapDispatchToProps = () => ({
	componentDidMount() {
		console.log('mount')
	},
	componentWillReceiveProps() {
		console.log('props')
	}
})

export default withProps(mapStateToProps)(injectSheet(styles)(View))