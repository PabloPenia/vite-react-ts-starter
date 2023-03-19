import './loader.styles.scss'

export default function Loader(): JSX.Element {
	return (
		<div className='Loader'>
			<h3>Loading...</h3>
			<div className='spinner' />
		</div>
	)
}
