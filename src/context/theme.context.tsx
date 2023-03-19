import type { Dispatch, ReactNode, SetStateAction } from 'react'
import { useEffect, useState, createContext } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
	theme: Theme
	setTheme: Dispatch<SetStateAction<Theme>>
}

const defaultContext: ThemeContextType = {
	theme: 'light',
	setTheme: () => {
		throw new Error('setTheme has not been initialized')
	},
}

export const ThemeContext = createContext<ThemeContextType>(defaultContext)

export default function ThemeProvider({
	children,
}: {
	children: ReactNode
}): JSX.Element {
	const userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light'

	if (localStorage.getItem('theme') === null)
		localStorage.setItem('theme', userTheme)

	const [theme, setTheme] = useState<Theme>(userTheme)

	useEffect(() => {
		localStorage.setItem('theme', theme)
	}, [theme])

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
