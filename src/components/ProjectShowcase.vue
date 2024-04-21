<script setup lang="ts">
import {defineProps} from 'vue'

const { content, description} = defineProps(['content', 'description'])
const activePictureIndex = defineModel<number>("activePictureIndex", { default: 1 });

const changeActive = (x :number): void=> {
    activePictureIndex.value = x
}

</script>
<template>
    <div class="m-20 w-[800px] grid grid-cols-2 grid-flow-row gap-4">
        <div  v-for="item, index in content" :key="index" class="grid-rows-subgrid col-span-2">
            <div v-if="activePictureIndex -  1 == index" >
                <h1 class="mx-4 tracking-widest">{{item.name}}</h1>
                <img
                class="p-2 bg-border-brown max-h-[400px] w-[800px]"
                :src="item.file"
                />
            </div>
        </div>
        <div class="w-[800px] flex">
            <div class="flex grow gap-4">
                <div v-for="x in content.length">
                    <div v-if="activePictureIndex == x  " class="size-6 bg-border-brown rounded-full shadow-[0_0_10px_2px__rgba(245,238,53,0.2)] cursor-pointer"></div>
                    <div v-else @click="changeActive(x)" class="size-6 bg-black opacity-30 rounded-full cursor-pointer hover:opacity-60" ></div>
                </div>
            </div>
            <div v-if="description" class="max-w-[400px]">
                <h1>Project Remarks:</h1>
                <p>
                    {{ description }}
                </p>
            </div>
        </div>
    </div>
</template>
