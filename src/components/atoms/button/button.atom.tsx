import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

const Button: FC<ButtonProps> = ({ children, ...props }) => (
	<button type='button' {...props}>
		{children}
	</button>
)
export default Button
