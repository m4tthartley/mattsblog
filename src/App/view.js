import React from 'react'

export default ({classes,photos}) => {
	return (
		<div className={classes.view}>
			<h1 className={classes.header}>Matt Hartley</h1>

			{photos.map(v =>
				<img key={v} className={classes.photo} src={v} alt="" />
			)}
		</div>
	)
}