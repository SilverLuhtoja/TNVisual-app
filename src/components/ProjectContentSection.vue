<script setup lang="ts">
import { defineProps } from 'vue'

const { imageContents } = defineProps(['imageContents'])

const onImageSelect = async (event, content) => {
    const file = event.target.files[0]

    if (file) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function (e) {
            content.file = e.target.result
        }
    }
}

const addNewContentSection = () => {
    imageContents.push({
        name: '',
        file: ''
    })
}

const clearImageSelection = (content: any) => {
    content.file = null
}
</script>
<template>
    <div class="flex flex-wrap gap-4">
        <div v-for="(content, index) of imageContents" :key="index" class="flex">
            <!-- IMAGE PREVIEW -->
            <div class="project-modal-preview">
                <img
                    v-if="content.file"
                    class="object-cover"
                    :src="content.file"
                    alt="preview_image"
                />
                <div v-else class="font-semibold">No Image To Preview</div>
            </div>

            <!-- IMAGE NAME-->
            <div>
                <div class="m-4">
                    <label
                        for="image_name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Image Name *</label
                    >
                    <!-- v-model="loginModel.username" -->
                    <input
                        type="text"
                        name="image_name"
                        v-model="content.name"
                        class="project-modal-input"
                        placeholder="Kitchen [ model ]"
                        required
                    />
                </div>

                <!-- ADDING IMAGE-->
                <div class="m-4">
                    <label
                        for="image_selection"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Select Image * {{ !content.name ? '(FILENAME REQUIRED)' : '' }}</label
                    >
                    <input
                        :disabled="!content.name"
                        type="file"
                        name="image_selection"
                        @click="clearImageSelection(content)"
                        @change="onImageSelect($event, content)"
                        class="project-modal-input"
                        required
                    />
                </div>
            </div>
        </div>
    </div>
    <div
        @click="addNewContentSection"
        v-if="
            imageContents[imageContents.length - 1].name &&
            imageContents[imageContents.length - 1].file
        "
        class="w-[10rem] mt-4 p-1 border-2 border-border-brown cursor-pointer bg-green-500 hover:bg-green-400 duration-300"
    >
        + ADD ANOTHER
    </div>
</template>
