import type { FC, ReactNode } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '~/context/theme.context'

interface AppWrapperComponent {
	children: ReactNode
}

const AppWrapper: FC<AppWrapperComponent> = ({ children }) => {
	const { theme } = useContext(ThemeContext)
	return (
		<main id='app' data-theme={theme}>
			{children}
		</main>
	)
}
export default AppWrapper
