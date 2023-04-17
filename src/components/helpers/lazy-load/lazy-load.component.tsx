import type { FC, ReactNode } from 'react'
import { Suspense } from 'react'
import Loader from '../../atoms/loader/loader.component'

interface LazyLoadProps {
	children: ReactNode
}

const LazyLoad: FC<LazyLoadProps> = ({ children }) => (
	<Suspense fallback={<Loader />}>{children}</Suspense>
)

export default LazyLoad
