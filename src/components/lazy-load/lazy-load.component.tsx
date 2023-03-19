import type { ReactNode } from 'react'
import { Suspense } from 'react'
import Loader from '../loader/loader.component'

interface LazyLoadProps {
	children: ReactNode
}

export default function LazyLoad({ children }: LazyLoadProps): JSX.Element {
	return <Suspense fallback={<Loader />}>{children}</Suspense>
}
