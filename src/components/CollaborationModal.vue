<script setup lang="ts">
import { mapResourceToDomain } from '@/utils/mapper'
import resource from '../assets/resources/collaboration.json'

interface CollaborationDomain {
    title: string
    description: string
}

const collabItems: CollaborationDomain[] = mapResourceToDomain(resource, (item: any) => ({
    title: item.title,
    description: item.description
}))

const goToContactView = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })
    
}
</script>

<template>
    <div class="p-4 mx-2 m-auto flex flex-col bg-slate-100 bg-opacity-85 rounded sm:max-w-[1000px]">
        <div class="my-10" v-for="(item, index) in collabItems" :key="index">
            <h1 class="sm:text-center">{{ index + 1 }}. {{ item.title }}</h1>
            <p class="mt-4">{{ item.description }}</p>
            <div class="divider"></div>
        </div>
       <button @click="goToContactView" class="action-btn hover:action-btn-hover">Let's get started</button>
    </div>
</template>
