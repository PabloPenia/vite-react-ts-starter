import type { FC } from 'react'
import Hyperlink from '~/components/atoms/hyperlink/hyperlink.atom'

const MainFooter: FC = () => (
	<footer className='main-header'>
		<Hyperlink
			to='https://github.com/PabloPenia/vite-react-ts-starter/'
			title='Know more about this starter framework'
		>
			Know more about this starter framework
		</Hyperlink>
	</footer>
)

export default MainFooter
