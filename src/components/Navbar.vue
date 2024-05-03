<script setup>
import logoImage from '@/assets/images/navbar/logo.png'
import estoniaFlag from '@/assets/images/navbar/estonia.png'
import englishFlag from '@/assets/images/navbar/english.png'
import burgerSvg from '@/assets/icons/burger.svg'
import LoginButton from '@/components/LoginButton.vue'
import {onBeforeMount, ref} from 'vue'
import { inject } from 'vue'

const state = inject('state')
const menu = ref('menu')
let windowTop = ref(true)

const showMenu = () => {
    if (menu.value.classList.contains('hidden')) {
        menu.value.classList.remove('hidden')
        return
    } 
    menu.value.classList.add('hidden')
}

function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

onBeforeMount(() => {
    window.addEventListener( 'scroll', handleScroll)
})

const handleScroll = () => {
    if (window.scrollY > 0) {
        windowTop.value = false 
    } else {
        windowTop.value = true
    }
}
</script>

<template>
    <header class="fixed w-[100vw] top-0 border-b-4 border-border-brown text-primary-text z-10 shadow-[0_0_4px_6px_rgba(0,0,0,0.3)] ">
        <div :class="{'opacity-75': !windowTop} " class="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white hover:opacity-100 transition ">
            <div class="flex justify-between items-center m-3">
                <div @click="scrollTo('home')" class="flex items-center">
                    <img :src="logoImage" alt="logoImage" />
                    <h1 class="font-semibold text-3xl m-2 cursor-pointer">TNVisual</h1>
                    <div v-if="state.isAdmin">Admin</div>

                    <LoginButton v-else="state.isAdmin" />
                </div>

                <div class="flex">
                    <div class="relative cursor-pointer sm:absolute sm:hidden">
                        <img
                        class="h-6 w-10 border-2 mb-1 border-border-brown"
                        :src="estoniaFlag"
                        alt="Eesti"
                        />
                        <img
                        class="h-6 w-10 border-2 border-border-brown"
                        :src="englishFlag"
                        alt="Inglise"
                        />
                    </div>
                    <div class="px-4 sm:hidden cursor-pointer">
                        <img class="size-10" @click="showMenu" :src="burgerSvg" alt="burgerSvg" />
                    </div>
                </div>
            </div>

            <div class="routes text-xl sm:text-base hidden flex-col gap-2 sm:flex-row px-4 sm:flex" ref="menu">
                <h4 @click="scrollTo('projects')" class="cursor-pointer m-4">{{ $t('navbar.portfolio').toUpperCase()}}</h4>
                <h4 @click="scrollTo('collaborate')" class="cursor-pointer m-4">{{$t('navbar.services').toUpperCase()}}</h4>
                <h4 @click="scrollTo('about')" class="cursor-pointer m-4">{{$t('navbar.about').toUpperCase()}}</h4>
                <h4 @click="scrollTo('contacts')" class="cursor-pointer m-4">{{$t('navbar.contacts').toUpperCase()}}</h4>
            </div>
        </div>
        <div class="hidden mx-4 my-3  absolute bottom-00 right-0 sm:flex justify-center cursor-pointer">
            <img @click="$i18n.locale = 'est'" :class="{'flag-opacity': $i18n.locale != 'est'}" class="rotate w-[50px] transition mx-[-0.5em]" :src="estoniaFlag" alt="Eesti" />
            <img @click="$i18n.locale = 'en'" :class="{'flag-opacity': $i18n.locale != 'en'}"  class="rotate w-[50px] transition" :src="englishFlag" alt="Inglise" />
        </div>
    </header>
</template>


<style scoped>
.flag-opacity{
    scale: 0.60 100%;
    opacity: 0.6;
}

.rotate{
   transform: rotate(90deg);
   margin-left: -10px;
}
</style>