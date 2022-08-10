import UnderConstruction from '../../src/components/UnderConstruction.svelte'
import { render, screen } from '@testing-library/svelte'
import '@testing-library/jest-dom'

describe('components/UnderConstruction.svelte', () => {
	test('shows proper text when rendered', () => {
		render(UnderConstruction)
		const h4 = screen.getByText('⚠ ... Page Under Construction')
		expect(h4).toBeInTheDocument()
	})
})
