import { writable, type Writable } from 'svelte/store'
import {
	Clock,
	DoubleSide,
	Mesh,
	MeshStandardMaterial,
	PerspectiveCamera,
	PointLight,
	Scene
} from 'three'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import type { ThreeState } from 'src/types'

type ThreeStore = {
	set: Writable<ThreeState>['set']
	subscribe: Writable<ThreeState>['subscribe']
	update: Writable<ThreeState>['update']
	reset: () => void
}

export function getInitialThreeState(): ThreeState {
	return {
		camera: new PerspectiveCamera(),
		clock: new Clock(),
		lights: [new PointLight(0xffffff, 1), new PointLight(0xffffff, 0.5)],
		material: new MeshStandardMaterial({
			flatShading: true,
			side: DoubleSide
		}),
		mesh: new Mesh(),
		rotate: true,
		scene: new Scene(),
		stlLoader: new STLLoader()
	}
}

export function createThreeStore(): ThreeStore {
	const { set, subscribe, update } = writable<ThreeState>(getInitialThreeState())
	const reset = () => {
		set(getInitialThreeState())
	}
	return {
		set,
		subscribe,
		update,
		reset
	}
}

export const three = createThreeStore()
