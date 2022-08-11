import { dev } from '$app/env'
import { trackGoal, trackPageview } from 'fathom-client'

export const APP_ID = 'QYWVIGOF'

export const EVENTS = {
	load: {
		component: {
			resume: {
				certificates: 'GSZZPWAQ',
				education: 'QQJIG01K',
				experience: 'ZHPPYXVV',
				interests: 'KXM3JAXE',
				languages: 'TF7EIOFL',
				skills: 'QRTNYBFW',
				volunteer: 'FAYGRCF5'
			}
		},
		route: {
			unknown: 'ZVD8U8F1'
		}
	},
	tap: {
		main: {
			nav: 'JC3KUKOB'
		},
		resume: {
			nav: 'WPIKKFTJ'
		}
	}
}

export function track(goalId: string) {
	if (!dev) trackGoal(goalId, 0)
}

export function handleNavigation(url: URL) {
	trackPageview({
		url: url.toString()
	})
}
