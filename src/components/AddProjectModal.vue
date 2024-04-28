<script setup>
import { ref, inject, reactive, defineProps} from 'vue'
import client from "@/utils/client"
import ProjectContentSection from './ProjectContentSection.vue'

const { getAllProjects } = defineProps(['getAllProjects'])
const state = inject('state')
const show = ref(false)
const errorMessage = ref(null)
const imageContents = reactive([
    {
        name: '',
        file: ''
    }
])

const projectModel = reactive({
    name: '',
    content: imageContents,
    description: ''
})

const showProjectModal = () => {
    show.value = true
}

const closeProjectModel = () => {
    show.value = false
    errorMessage.value = null
    clearProjectModel()
}

const submitProject = async () => {
    errorMessage.value = ""
    const response = await client.post("/projects", projectModel)

    if (response.error){
        // errorMessage.value = "Project name must be unique"
        errorMessage.value = response.error
        return
    }
    show.value = false
    getAllProjects()
    clearProjectModel()
}

const filterImages = () => {
    return imageContents.filter((content) => content.file).length
}

const clearProjectModel = () => {
    if(!errorMessage.value){
        projectModel.content = [{
            name: '',
            file: ''
        }]
        projectModel.name = ''
        projectModel.description = ''
    }
}
</script>

<template>
    <button
        v-if="!show && state.isAdmin"
        @click="showProjectModal"
        class="ml-16 p-1 mt-4 border-2 w-auto border-border-brown cursor-pointer bg-green-500 hover:bg-green-400 duration-300"
    >
        + ADD NEW PROJECT
    </button>

    <!-- Modal Header -->
    <div
        v-if="show"
        class="w-[70vw] h-[70vh] fixed m-auto left-0 right-0 top-0 bottom-0 bg-slate-300 z-50"
    >
        <section
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Add Project Page</h3>
            <button
                @click="closeProjectModel"
                type="button"
                class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
            >
                <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
        </section>

        <!-- Modal Body -->
        <section class="m-4 flex flex-col gap-8">
            <!-- <div class="text-red-600" v-if="errorMessage">{{ errorMessage }}</div> -->

            <!-- PROJECT NAME -->
            <div>
                <label
                    for="project_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Project Name *</label
                >
                <input
                    type="text"
                    name="project_name"
                    id="project_name"
                    placeholder="Kitchen"
                    v-model="projectModel.name"
                    class="project-modal-input"
                />
            </div>

            <div v-if="projectModel.name">
                <ProjectContentSection :imageContents="imageContents" />
            </div>

            <!-- DESCRIPTION -->

            <div v-if="projectModel.name">
                <label
                    for="description"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Description</label
                >
                <textarea
                    name="description"
                    id="description"
                    placeholder="This is my project remarks."
                    v-model="projectModel.description"
                    class="project-modal-input"
                >
                </textarea>
            </div>
            <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
            <button v-if="filterImages()" @click="submitProject" class="action-btn">Upload</button>
            <div v-else class="m-auto" >
                <div v-if="!projectModel.name"> Project name required</div>
                <div v-if="!filterImages()" > At least one image required</div>
                <button class="disabled-action-btn">Upload</button>
            </div>
        </section>
    </div>
</template>
