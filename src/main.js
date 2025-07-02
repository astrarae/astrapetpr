import './styles/style.css'
import './styles/activation.css'
import './styles/themes.css'
import './styles/navbar.css'
import './styles/hero.css'

import * as theme_utils from '/src/theme-utils/theme-scripts.js'
import * as activation_utils from "./activation-utils/activation-scripts.js";


theme_utils.innitThemeToggle()
activation_utils.innitActivationToggle()

