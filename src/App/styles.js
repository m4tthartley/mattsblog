export default {
	'@global': {
		'*': {
			margin: 0,
			padding: 0
		}
	},
	view: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '1024px',
		maxWidth: '100%',
		margin: '0 auto'
	},
	header: {
		fontFamily: 'Playfair Display,Georgia',
		fontSize: '2rem',
		fontWeight: 'normal',
		margin: '40px 0 0'
	},
	photo: {
		display: 'block',
		margin: '40px 0',
		maxWidth: '100%',
		maxHeight: '1024px'
	},
	'@media (max-width: 720px)': {
		header: {
			margin: '40px 0'
		},
		photo: {
			margin: '0',
		}
	}
}