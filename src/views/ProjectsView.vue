<script setup lang="ts">
import ProjectSideBar from '@/components/ProjectSideBar.vue'
import ProjectShowcase from '@/components/ProjectShowcase.vue'
import { ref, onMounted, reactive } from 'vue'
import { mapResourceToDomain } from '@/utils/mapper'
import client from '@/utils/client'

interface Content {
    name: string
    file: string
}

interface Project {
    name: string
    content: Content[]
    description: string
}

const errorMessage = ref<string | null>(null)
const AllProjectsNames = ref<string[]>([])
const active = ref<string>('')
const activeProjectContent = ref<Content[]>([])
const activeDescription = ref<string | null>(null)
const allProjects = ref<Project[]>([])
const activePictureIndex = ref(1)

onMounted(async () => {
    errorMessage.value = null
    try {
        const response = await client.get('/projects')

        if (response.error) {
            errorMessage.value = response.error
            return
        }

        if (response.body == null) {
            errorMessage.value = 'No projects to show'
            return
        }

        initProjectView(response)
    } catch (error: any) {
        errorMessage.value = error.message
    }
})

const changeActive = (projectName: string) => {
    resetProjectView()
    const project: Project | undefined = allProjects.value.find(
        (project) => project.name === projectName
    )

    if (project) {
        active.value = projectName
        activeProjectContent.value = project.content
        activeDescription.value = project.description
    }
}


const initProjectView = (response : any) => {
    const convertedProjects: Project[] = mapResourceToDomain(
            response.body,
            (project: Project) => ({
                name: project.name,
                content: mapResourceToDomain(project.content, (content: Content) => ({
                    name: content.name,
                    file: content.file
                })),
                description: project.description
            })
        )

        allProjects.value = convertedProjects
        AllProjectsNames.value = convertedProjects.map((item) => item.name)
        active.value = AllProjectsNames.value[0]
        activeProjectContent.value = convertedProjects[0].content
        activeDescription.value = convertedProjects[0].description
}

const resetProjectView = () => {
    activeProjectContent.value = []
    activeDescription.value = null
    activePictureIndex.value = 1
}
</script>
<template>
    <main
        class="relative top-0 left-0 bg-project-bg sm:shadow-[inset_0_0_0px_16px_rgba(0,0,0,0.4)] inset-4 custom-section-bg-image flex"
    >
        <div
            v-if="errorMessage"
            class="absolute m-10 p-6 w-72 bg-slate-200 font-semibold text-red-500 rounded"
        >
            {{ errorMessage }}
        </div>
        <div class="my-[10vh] flex w-[100vw]">
            <div class="w-1/5 flex flex-col">
                <ProjectSideBar
                    :allProjects="AllProjectsNames"
                    :active="active"
                    :changeActive="changeActive"
                />
            </div>
            <div class="w-4/5 m-20">
                <ProjectShowcase
                    v-model:activePictureIndex="activePictureIndex"
                    :content="activeProjectContent"
                    :description="activeDescription"
                />
            </div>
        </div>
    </main>
</template>
