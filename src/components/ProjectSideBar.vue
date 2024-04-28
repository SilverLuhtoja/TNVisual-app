<script setup>
import triangleSvg from '@/assets/icons/triangle.svg'
import AddProjectModal from '@/components/AddProjectModal.vue'
import { defineProps } from 'vue'

const { allProjects, active, changeActive, getAllProjects } = defineProps(['allProjects', 'active', 'changeActive', 'getAllProjects'])
</script>
<template>
    <h1 class="ml-16 tracking-[1rem] underline mt-10">PROJECTS</h1>
    <AddProjectModal :getAllProjects="getAllProjects" />
    <div class="ml-24 mt-10">
        <div class="mt-4" v-for="(project, index) in allProjects" :key="index">
            <div v-if="active == project" class="flex items-center cursor-pointer">
                <img class="size-4" :src="triangleSvg" alt="triangleSvg" />
                <h1 class="ml-4 tracking-widest underline">{{ project }}</h1>
            </div>
            <div v-else>
                <h1 @click="changeActive(project)" class="ml-4 tracking-widest cursor-pointer">
                    {{ project }}
                </h1>
            </div>
        </div>
    </div>
</template>
