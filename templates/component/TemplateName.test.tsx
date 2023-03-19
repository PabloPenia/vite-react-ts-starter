import { describe, it } from 'vitest'
import { render /*, screen */ } from '@testing-library/react'
import TemplateName from './TemplateName.component'

describe('TemplateName', () => {
	it('Renders TemplateName', () => {
		// Arrange
		render(<TemplateName />)
		// Act
		// expect
		// 	expect(
		// 		screen.getByRole('heading', {
		// 			level: 1,
		// 		}),
		// 	).toHaveTextContent('Hello World')
	})
})
