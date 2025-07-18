import './LEGACY_CODE/styles/style.css';
import './LEGACY_CODE/styles/activation.css';
import './LEGACY_CODE/styles/themes.css';
import './LEGACY_CODE/styles/navbar.css';
import './LEGACY_CODE/styles/hero.css';

import { initThemeToggle } from './modules/theme.js';
import { initActivationToggle } from './modules/auth.js';

initThemeToggle();
initActivationToggle();

console.log('Refactored version using modular code.');
