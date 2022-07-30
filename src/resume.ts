import resume from 'src/data/resume.json'

export type Resume = typeof resume
export type ResumeKeys = keyof Resume
export type ResumeSection<T extends ResumeKeys> = Pick<Resume, T>

export const RESUME = resume
