import type { FC } from 'react'
import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AppWrapper from './components/app-wrapper/app-wrapper.component'
import LazyLoad from './components/lazy-load/lazy-load.component'
import MasterHeader from './components/master-header/master-header.component'
import ThemeProvider from './context/theme.context'

const Home = lazy(async () => await import('./routes/home/home.route'))
const NotFound = lazy(
	async () => await import('./routes/not-found/not-found.route'),
)
const Page = lazy(async () => await import('./routes/page/page.route'))

const App: FC = () => {
	const views = [
		{ route: '/', element: <Home /> },
		{ route: '/page', element: <Page /> },
		{ route: '*', element: <NotFound /> },
	]
	return (
		<ThemeProvider>
			<BrowserRouter>
				<AppWrapper>
					<MasterHeader />
					<Routes>
						{views.map((view) => (
							<Route
								key={view.route}
								path={view.route}
								element={<LazyLoad>{view.element}</LazyLoad>}
							/>
						))}
					</Routes>
				</AppWrapper>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
