import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from './components/HomePage.vue'
import VenuePage from './components/VenuePage.vue'
import ProgramPage from './components/ProgramPage.vue'
import OurStoryPage from './components/OurStoryPage.vue'
import PhotosPage from './components/PhotosPage.vue'
import RsvpPage from './components/RsvpPage.vue'

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path : '/venue', component: VenuePage },
        { path : '/programme', component: ProgramPage },
        { path : '/our-story', component: OurStoryPage },
        { path : '/photos', component: PhotosPage },
        { path : '/rsvp', component: RsvpPage },
    ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')
