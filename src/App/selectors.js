import {createSelector} from 'reselect'

const getPhotos = () => {
	const req = require.context('../../photos', true, /\.jpg$/)
	const files = req.keys().map(key => req(key))
	return files
}

export const selectPhotos = createSelector(
	getPhotos,
	(photos) => photos.reverse()
)