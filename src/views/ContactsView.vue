<script setup >
import { reactive, ref } from 'vue'
import { validateEmail } from '@/utils/email_validator'


const errorMessage = ref(null)
const emailContent = reactive({
    email: '',
    content: ''
})

const sendEmail = () => {
    errorMessage.value = null

    // let regex = '/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}'
    if (emailContent.email.trim() == '') {
        errorMessage.value = 'Please specify email.'
        return
    }

    if (!validateEmail(emailContent.email)) {
        errorMessage.value = "Provided email doesn't seem to be valid"
        return
    }

    if (emailContent.content.trim() == '') {
        errorMessage.value = 'Please add content for email.'
        return
    }

    if (emailContent.content.trim().length < 25) {
        errorMessage.value = 'Please tell more about your project.'
        return
    }

    console.log('WILL SEND')

    emailContent.email = ''
    emailContent.content = ''

    alert('Thanks for the email. We will talk soon enough!')
}
</script>
<template>
    <main class="relative !h-fit bg-contact-bg custom-section-bg-image flex justify-center">
        <div class="gap-10  flex flex-col items-center md:flex-row md:gap-20 md:m-20">

           <section>
                <h1 class="text-white m-auto text-center mb-10 max-w-[16rem]">
                   {{ $t('contacts.title' )}}
                </h1>
                <p class="w-[700px] text-white m-10 text-center p-10 flex flex-col gap-10"> 
                    {{ $t('contacts.description' )}}
                </p>

                <div class="m-auto  w-[500px] bg-slate-200/50 p-10 flex flex-col gap-10">
                    <div>
                        <label
                            for="client_email"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            > {{ $t('contacts.emailDescription' )}} *</label
                        >
                        <input
                            type="text"
                            name="client_email"
                            id="client_email"
                            v-model="emailContent.email"
                            placeholder="whoToContact@gmail.com"
                            class="project-modal-input"
                        />
                    </div>
                    <div>
                        <label
                            for="client_project_desc"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >{{ $t('contacts.projectDescription' )}}*</label
                        >
                        <textarea
                            rows="8"
                            name="client_project_desc"
                            id="client_project_desc"
                            v-model="emailContent.content"
                            placeholder="Hi, Please describe what type of project would you like to have. The more detailed you can write the better. 
     * Example what would be measurments
     * Provide links to about ideas
     * Expected timeframe
                            "
                            class="project-modal-input"
                        ></textarea>
                    </div>

                    <div class="flex-col">
                        <div v-if="errorMessage" class="my-2 p-1 text-red-600 bg-black/50 rounded">
                            {{ errorMessage }}
                        </div>
                        <button @click="sendEmail" class="action-btn !px-6 !py-1 !my-0">
                            {{ $t('contacts.button' )}}
                        </button>
                    </div>
                </div>
            </section> 
        </div>
    </main>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
