import { resolve } from 'path'
import { copyFileSync, lstatSync, mkdirSync, readdirSync } from 'fs'
import yargs from 'yargs'

export type DirectoryMap = { [dir: string]: string[] }

export function getFilesFromDirectory(
	directory: string,
	topLevelDirectory: string,
	buildDirectory: string,
	verbose: boolean,
	directoryMap: DirectoryMap = {}
) {
	const files = readdirSync(resolve(directory))
	files.forEach((file) => {
		const fullPath = resolve(directory + '/' + file)
		if (lstatSync(fullPath).isDirectory()) {
			getFilesFromDirectory(fullPath, topLevelDirectory, buildDirectory, verbose, directoryMap)
		}

		const fileDir = fullPath.slice(
			fullPath.indexOf(topLevelDirectory) + topLevelDirectory.length + 1,
			fullPath.indexOf(file)
		)
		const newFileDir = resolve(buildDirectory + '/' + fileDir)
		const newFile = resolve(newFileDir, file)
		try {
			const newDirStats = lstatSync(newFileDir)
			if (verbose) console.log(newFileDir, 'exists! STATS:', newDirStats)
		} catch (e) {
			mkdirSync(newFileDir, { recursive: true })
		}
		try {
			const newFileStats = lstatSync(newFile)
			if (verbose) console.log(newFile, 'exists! STATS:', newFileStats)
		} catch (e) {
			copyFileSync(resolve(fullPath), newFile)
			if (directoryMap[fileDir]) directoryMap[fileDir].push(file)
			else directoryMap[fileDir] = [file]
		}
	})
	return directoryMap
}

;(() => {
	const { inputDir, outputDir, verbose } = yargs(process.argv.slice(2))
		.options({
			inputDir: { type: 'string', default: 'static' },
			outputDir: { type: 'string', default: 'build' },
			verbose: { type: 'boolean', default: false }
		})
		.parseSync()
	const outputDirPath = resolve(outputDir)
	let dirError = false
	try {
		const isOutputDirArgDirectory = lstatSync(outputDirPath).isDirectory()
		if (!isOutputDirArgDirectory) throw new Error('isNotDir')
	} catch (e: unknown) {
		if ((e as Error).message === 'isNotDir') {
			dirError = true
			console.error('outputDir is not a directory!')
		} else {
			mkdirSync(outputDirPath)
		}
	}
	if (!dirError) {
		const directoryMap = getFilesFromDirectory(inputDir, inputDir, outputDir, verbose)
		console.log(`Wrote ${inputDir} files to ${outputDirPath}:`, directoryMap)
	}
})()
