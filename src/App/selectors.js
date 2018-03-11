import {createSelector} from 'reselect'

const getPhotos = () => require.context('../../public/photos', true, /\.jpg$/).keys()

export const selectPhotos = createSelector(
	getPhotos,
	(photos) => photos.map((v) => v.replace('./', '/photos/')).reverse()
)