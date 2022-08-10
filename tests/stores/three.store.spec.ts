import { render, screen } from '@testing-library/svelte'
import { getInitialThreeState } from '../../src/stores/three.store'
import '@testing-library/jest-dom'

describe('stores/three.store.ts', () => {
	test('initial state is instantiated correctly', () => {
		const s = getInitialThreeState()
		expect(s).toHaveProperty('camera')
		expect(s).toHaveProperty('clock')
		expect(s).toHaveProperty('lights')
		expect(s).toHaveProperty('material')
		expect(s).toHaveProperty('mesh')
		expect(s).toHaveProperty('rotate')
		expect(s).toHaveProperty('scene')
		expect(s).toHaveProperty('stlLoader')
		expect(s.camera).toBeDefined()
		expect(s.clock).toBeDefined()
		expect(s.lights).toBeDefined()
		expect(s.material).toBeDefined()
		expect(s.mesh).toBeDefined()
		expect(s.rotate).toBeDefined()
		expect(s.scene).toBeDefined()
		expect(s.stlLoader).toBeDefined()
	})
	test('store is successfully created', () => {})
	test('reset function disposes of animation state', () => {})
})
