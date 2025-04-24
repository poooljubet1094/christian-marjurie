import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './components/HomePage.vue'
import VenuePage from './components/VenuePage.vue'
import ProgramPage from './components/ProgramPage.vue'
import OurStoryPage from './components/OurStoryPage.vue'
import PhotosPage from './components/PhotosPage.vue'
import RsvpPage from './components/RsvpPage.vue'
import RsvpListPage from './components/RsvpListPage.vue'
import EntouragePage from './components/EntouragePage.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/venue', component: VenuePage },
        { path: '/programme', component: ProgramPage },
        { path: '/entourage', component: EntouragePage },
        { path: '/our-story', component: OurStoryPage },
        { path: '/photos', component: PhotosPage },
        { path: '/rsvp', component: RsvpPage },
        { path: '/rsvp-list', component: RsvpListPage }
    ],
})