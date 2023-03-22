import type { FC } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '~/context/theme.context'
import './home.styles.scss'

const Home: FC = () => {
	const { theme, setTheme } = useContext(ThemeContext)
	return (
		<div className='l-home'>
			<section className='card'>
				<button
					type='button'
					onClick={() => {
						setTheme(theme === 'light' ? 'dark' : 'light')
					}}
				>
					{theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</section>
			<section>
				<p className='read-the-docs'>
					Click on the Vite and React logos to learn more
				</p>
				<a href='https://github.com/PabloPenia/vite-react-ts-starter/'>
					Know more about this starter framework
				</a>
			</section>
		</div>
	)
}

export default Home
