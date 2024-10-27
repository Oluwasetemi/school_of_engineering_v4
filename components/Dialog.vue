<script setup>
import { ref } from 'vue'
const showModal = ref(false)

const openModal = () => {
    showModal.value = true
}

const closeModal = () => {
    showModal.value = false
}
</script>

<template>
    <main class="bg-gray-100 flex items-center justify-center min-h-60">
        <button @click="openModal" class="bg-blue-500 text-white font-bold py-2 px-4 rounded">Open Modal</button>
        <div v-if="showModal" @click="closeModal"
            class="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div class="modal-content bg-white p-6 rounded shadow-lg w-4/5 md:w-1/3 relative" @click.stop>
                <span @click="closeModal"
                    class="close absolute top-2 right-2 text-gray-500 cursor-pointer text-2xl">&times;</span>
                <h2 class="text-xl font-bold mb-4">Modal Title</h2>
                <p class="text-gray-700">This is a simple modal dialog example.</p>
            </div>
        </div>
    </main>
</template>
