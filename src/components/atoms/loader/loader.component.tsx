import type { FC } from 'react'
import './loader.styles.scss'

const Loader: FC = () => (
	<div className='Loader'>
		<h3>Loading...</h3>
		<div className='spinner' />
	</div>
)

export default Loader
