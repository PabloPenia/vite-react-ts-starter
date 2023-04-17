import './icon.styles.scss'
import type { FC, ReactNode } from 'react'
import { Fragment, isValidElement } from 'react'
import defaultSprite from './default.sprite.svg'
import classNames from 'classnames'

export interface IconProps {
	id: string
	className?: string
	sprite?: string
	title?: string
	desc?: string
	size?: string
	children?: ReactNode
}
// TODO Add the old inline svg implementation
const Icon: FC<IconProps> = ({
	id,
	className,
	title,
	desc,
	sprite,
	size,
	children,
}) => {
	const SYMBOL_ID = id.trim()
	const spriteFile = sprite ?? defaultSprite
	const customStyle = className?.split(' ') ?? []
	const iconClasses = classNames('l-icon', customStyle)
	const containerClasses = classNames('l-icon__container', customStyle)

	const isString = typeof children === 'string'
	const isFragment = isValidElement(children) && children.type === Fragment
	// TODO improve sizing utility
	const styleProps =
		size !== undefined ? { width: size, paddingTop: size } : undefined

	const iconSvg = (
		<span className={iconClasses} style={styleProps}>
			<svg
				aria-labelledby={title !== undefined ? `${SYMBOL_ID}-title` : undefined}
				aria-describedby={desc !== undefined ? `${SYMBOL_ID}-desc` : undefined}
				aria-hidden='true'
				role='img'
				focusable='false'
			>
				{title !== undefined && (
					<title id={`${SYMBOL_ID}-title`}>{title}</title>
				)}
				{desc !== undefined && <desc id={`${SYMBOL_ID}-desc`}>{desc}</desc>}
				<use xlinkHref={`${spriteFile}#${SYMBOL_ID}`} />
			</svg>
		</span>
	)

	return isString || isFragment ? (
		<span className={containerClasses}>
			{iconSvg}
			<span>{children}</span>
		</span>
	) : (
		iconSvg
	)
}

export default Icon
