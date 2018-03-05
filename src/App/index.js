import injectSheet from 'react-jss'
import {connect} from 'react-redux'

import View from './view'
import styles from './styles'
import {selectPhotos} from './selectors'

const mapStateToProps = (_) => ({
	photos: selectPhotos()
})

export default connect(mapStateToProps)(injectSheet(styles)(View))