<script setup lang="ts">
// import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import CollaborationView from '@/views/CollaborationView.vue'
import ContactsView from '@/views/ContactsView.vue'
import { inject, onMounted, type InjectionKey } from 'vue'
import client from '@/utils/client'
// import { useCookies } from "vue3-cookies";
// const { cookies } = useCookies();



const { VITE_TESTING_APIKEY_ONLY } = import.meta.env
const state: any = inject('state')

//  send api key to backend and see if there is any users with that key, if yes it can stay logged in as admin
// onMounted(async () => {
//     console.log('LOGIN AS ADMIN')
//     client.SetApiKey(VITE_TESTING_APIKEY_ONLY)
//     const response = await client.post('/auth', "")

//     if (!response.error) {
//         state.isAdmin = true
//     }
// })

</script>

<template>
    <div class="flex flex-col min-h-screen bg-primary-bg-color">
        <Navbar />
        <HomeView id="home" />
        <ProjectsView id="projects" />
        <CollaborationView id="collaborate" />
        <ContactsView id="contacts" />
        <!-- <RouterView /> -->
    </div>
</template>

<style scoped></style>
