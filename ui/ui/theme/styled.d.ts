import 'styled-components'

import { ThemeColors } from './ThemeColors'

import { ThemeName } from './ThemeName'
import { ThemeShadows } from './ThemeShadows'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: ThemeName
    colors: ThemeColors
    shadows: ThemeShadows
  }
}