<script setup lang="ts">
// import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import CollaborationView from '@/views/CollaborationView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactsView from '@/views/ContactsView.vue'
import { inject, onMounted } from 'vue'
import client from '@/utils/client'

const state: any = inject('state')

onMounted(async () => {
    const response = await client.get('/verify')

    if (!response.error) {
        client.SetApiKey(response.body)
        state.isAdmin = true
    }
})

</script>

<template>
    <div class="flex flex-col min-h-screen bg-primary-bg-color">
        <Navbar />
        <HomeView id="home" />
        <ProjectsView id="projects" />
        <CollaborationView id="collaborate" />
        <AboutView id="about" />
        <ContactsView id="contacts" />
        <!-- <RouterView /> -->
    </div>
</template>

<style scoped></style>
