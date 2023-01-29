import {
	Clock,
	Mesh,
	MeshLambertMaterial,
	PerspectiveCamera,
	PointLight,
	Scene,
	WebGLRenderer
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'

export type ThreeConfig = {
	color: string
	backgroundColor: string
	charSet: string
	resolution: number
	modelUrl: string
}

export type ThreeState = {
	camera: PerspectiveCamera
	clock: Clock
	controls?: OrbitControls
	domElement?: HTMLElement
	effect?: AsciiEffect
	lights: [PointLight, PointLight]
	material: MeshLambertMaterial
	mesh: Mesh
	renderer?: WebGLRenderer
	rotate: boolean
	scene: Scene
	stlLoader: STLLoader
}

export type ArrayElement<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never
