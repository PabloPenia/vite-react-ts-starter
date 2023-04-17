import './theme/App.scss'
import { createRoot } from 'react-dom/client'
import { lazy, StrictMode } from 'react'
import LazyLoad from './components/helpers/lazy-load/lazy-load.component'

const App = lazy(async () => await import('./App'))

const rootEl = document.getElementById('root')

if (rootEl == null) throw new Error('Failed to find the root element.')

const root = createRoot(rootEl)

root.render(
	<StrictMode>
		<LazyLoad>
			<App />
		</LazyLoad>
	</StrictMode>,
)
