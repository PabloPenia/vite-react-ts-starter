import './master-header.styles.scss'
import { NavLink } from 'react-router-dom'
import reactLogo from '~/assets/react.svg'
import viteLogo from '~/assets/vite.svg'
// type MasterHeaderProps = {}

export default function MasterHeader(/*	{}: MasterHeaderProps	*/): JSX.Element {
	return (
		<header className='master-header'>
			<nav>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/page'>Another Page</NavLink>
			</nav>
			<a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
				<img src={viteLogo} className='logo' alt='Vite logo' />
			</a>
			<a href='https://reactjs.org' target='_blank' rel='noreferrer'>
				<img src={reactLogo} className='logo react' alt='React logo' />
			</a>
			<h1>Vite + React + TS</h1>
		</header>
	)
}
