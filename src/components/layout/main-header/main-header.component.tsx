import './main-header.styles.scss'
import { NavLink } from 'react-router-dom'
import reactLogo from '~/assets/react.svg'
import viteLogo from '~/assets/vite.svg'
import type { FC } from 'react'
import Hyperlink from '~/components/atoms/hyperlink/hyperlink.atom'

const MainHeader: FC = () => (
	<header className='main-header'>
		<nav>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/page'>Another Page</NavLink>
		</nav>
		<Hyperlink
			title='Get more information at ViteJS Homepage'
			to='https://vitejs.dev'
			target='_blank'
			rel='noreferrer'
		>
			<img src={viteLogo} className='logo' alt='Vite logo' />
		</Hyperlink>
		<Hyperlink
			title='Get more information at ReactJS Homepage'
			to='https://reactjs.org'
			target='_blank'
			rel='noreferrer'
		>
			<img src={reactLogo} className='logo react' alt='React logo' />
		</Hyperlink>
		<h1>Vite + React + TS</h1>
	</header>
)

export default MainHeader
