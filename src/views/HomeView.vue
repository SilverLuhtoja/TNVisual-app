<script setup lang="ts">
import homeCenterLogo from '../assets/images/home/homeCenterLogo.png'
</script>

<template>
    <main class="relative bg-home-bg custom-section-bg-image overflow-hidden">
        <img
            class="w-[70%] absolute m-auto left-0 right-0 top-0 bottom-0 md:w-fit"
            :src="homeCenterLogo"
            alt="LogoImage"
        />
    </main>
</template>
