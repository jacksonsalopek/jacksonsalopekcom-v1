export interface FontConfig {
  italic?: boolean
  mono?: boolean
  size?: string
}

export class Font {
  static defaultFontSize = '16px'
  static family(mono: boolean = false) {
    return `font-family: ${mono ? '"Basier Square Mono"' : '"Basier Square"'};`
  }
  static style(italic: boolean = false) {
    return `font-style: ${italic ? 'italic' : 'normal'};`
  }
  static regular(config: FontConfig = {}) {
    return `
      ${Font.family(config.mono)}
      ${Font.style(config.italic)}
      font-weight: 400;
      font-size: ${config.size || Font.defaultFontSize};
    `
  }
  static medium(config: FontConfig = {}) {
    return `
      ${Font.family(config.mono)}
      ${Font.style(config.italic)}
      font-weight: 500;
      font-size: ${config.size || Font.defaultFontSize};
    `
  }
  static semibold(config: FontConfig = {}) {
    return `
      ${Font.family(config.mono)}
      ${Font.style(config.italic)}
      font-weight: 600;
      font-size: ${config.size || Font.defaultFontSize};
    `
  }
  static bold(config: FontConfig = {}) {
    return `
      ${Font.family(config.mono)}
      ${Font.style(config.italic)}
      font-weight: 700;
      font-size: ${config.size || Font.defaultFontSize};
    `
  }
}