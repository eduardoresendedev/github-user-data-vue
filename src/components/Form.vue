<script setup>
import { reactive, ref } from 'vue';
import { useSearchHistoryStore } from '../stores/useSearchHistoryStore';
//import { searchHistory } from '../stores/searchHistory'

const emit = defineEmits (['formSubmit', 'update:modelValue'])
const searchInput = ref('')

const searchHistory = useSearchHistoryStore()

function handleSubmit(ev) {
    ev.preventDefault()
  //  searchHistory.users.unshift(searchInput.value)
    searchHistory.pushToHistory(searchInput.value)
    emit('formSubmit', searchInput.value)
}

function showSearchHistory() {
    alert(`Histórico de Pesquisa: \n${searchHistory.users.join('\n')}`)
}
</script>

<template>
    <form @submit="handleSubmit">
            <input type="text" v-model="searchInput" @input="$emit('update:modelValue', $event.target.value)" />
            <button>Carregar Usuário</button>
            <button type="button" @click="showSearchHistory">Ver histórico</button>
        </form>
</template>