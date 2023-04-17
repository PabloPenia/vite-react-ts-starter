import type { AnchorHTMLAttributes, FC, ReactNode } from 'react'
import type { LinkProps } from 'react-router-dom'
import omit from 'lodash/omit'
import { Link } from 'react-router-dom'

interface HyperlinkProps extends LinkProps {
	children: ReactNode
	isExternal?: boolean
	to: string
	title: string
}

const Hyperlink: FC<HyperlinkProps> = ({
	children,
	isExternal = false,
	to,
	title,
	...props
}: HyperlinkProps) => {
	const linkProps: LinkProps = {
		...omit(props, ['children', 'isExternal']),
		to,
		title,
	}
	const anchorProps: AnchorHTMLAttributes<HTMLAnchorElement> = {
		...omit(props, [
			'children',
			'isExternal',
			'to',
			'reloadDocument',
			'replace',
			'state',
			'preventScrollReset',
			'relative',
		]),
		href: to,
		target: '_blank',
		rel: 'noopener noreferrer',
		title,
	}

	return isExternal ? (
		<a {...anchorProps}>{children}</a>
	) : (
		<Link {...linkProps}>{children}</Link>
	)
}

export default Hyperlink
