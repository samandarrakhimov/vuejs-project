

import { createApp } from 'vue'
import App from './components/app/App.vue'
import uiCompanent from './components/ui-companent'

const app = createApp(App)
uiCompanent.map(component => app.component(component.name, component))

app.mount('#app')
