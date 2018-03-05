import React from 'react'

export default ({classes}) => {
	const photos = require.context('../../public/photos', false, /\.jpg$/).keys().reverse()
	return (
		<div className={classes.view}>
			<h1 className={classes.header}>Matt Hartley</h1>

			{photos.map(v =>
				<img key={v} className={classes.photo} src={v.replace('./', '/photos/')} alt="" />
			)}
		</div>
	)
}