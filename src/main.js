// ⚠️ DEPRECATED CODE: This logic is outdated and is deprecated.
import './LEGACY_CODE/styles/style.css'
import './LEGACY_CODE/styles/activation.css'
import './LEGACY_CODE/styles/themes.css'
import './LEGACY_CODE/styles/navbar.css'
import './LEGACY_CODE/styles/hero.css'

import * as theme_utils from '/src/LEGACY_CODE/theme-utils/theme-scripts.js'
import * as activation_utils from "./LEGACY_CODE/activation-utils/activation-scripts.js";

theme_utils.innitThemeToggle()
activation_utils.innitActivationToggle()

console.log("This version still uses the legacy code.")
// =============================================================
