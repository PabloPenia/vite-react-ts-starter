import type { FC } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '~/context/theme.context'
import './home.styles.scss'
import Button from '~/components/atoms/button/button.atom'

const Home: FC = () => {
	const { theme, setTheme } = useContext(ThemeContext)
	return (
		<div className='l-home'>
			<section className='card'>
				<Button
					onClick={() => {
						setTheme(theme === 'light' ? 'dark' : 'light')
					}}
				>
					{theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
				</Button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</section>
			<section>
				<p className='read-the-docs'>
					Click on the Vite and React logos to learn more
				</p>
			</section>
		</div>
	)
}

export default Home
