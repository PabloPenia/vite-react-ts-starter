import type { ReactNode } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '~/context/theme.context'

function AppWrapper({ children }: { children: ReactNode }): JSX.Element {
	const { theme } = useContext(ThemeContext)
	return (
		<main id='app' data-theme={theme}>
			{children}
		</main>
	)
}
export default AppWrapper
