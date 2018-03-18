import React from 'react'

import Test from '../Test'

export default ({classes,photos,...props}) => {
	return (
		<div className={classes.view}>
			<h1 className={classes.header} onClick={props.update}>Matt Hartley</h1>

			{photos.map(v =>
				<img key={v} className={classes.photo} src={v} alt="" />
			)}
		</div>
	)
}