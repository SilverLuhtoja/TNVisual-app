<script setup>
import resource from '../locales/en.json'

const collabItems = mapKeysToDomain()

function mapKeysToDomain(){
    let collabItems= [];
    let singleItem = {title:"", description:""};
      for (let key in resource.services){
        if(key.match('title')){
            singleItem.title = key
        }
        if(key.match('description')){
            singleItem.description = key
            collabItems.push(singleItem)
            singleItem = {title:"", description:""};
        }
    }
    return collabItems
}

const goToContactView = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
    <div class="p-4 m-4 flex flex-col bg-slate-100 bg-opacity-85 rounded sm:max-w-[1000px]">
        <!-- {{ $t }} -->
        <div class="m-10" v-for="(item, index) in collabItems" :key="index">
            <h1 class="sm:text-center w-[20em] m-auto">{{ index + 1 }}. {{ $t(`services.${item.title}`) }}</h1>
            <p class="mt-4">{{ $t(`services.${item.description}`) }}</p>
            <div class="divider"></div>
        </div>
        <button @click="goToContactView" class="action-btn hover:action-btn-hover">
           {{$t(`services.button`)}}
        </button>
    </div>
</template>
