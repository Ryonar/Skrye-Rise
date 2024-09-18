import { createApp } from 'vue'
import App from './App.vue'
import CardList from './components/CardList.vue'
createApp(App).mount('#app')

const app = createApp(App)
app.component('card-list', from CardList)
app.mount('#app')

