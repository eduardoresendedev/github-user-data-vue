<script setup>
import { reactive, ref, computed, onMounted, onUnmounted, onUpdated } from 'vue';
import UserInfo from './UserInfo.vue'
import Repository from './Repository.vue'
import Form from './Form.vue'

const searchInput = ref('')

const state = reactive({
    login: '',
    name: '',
    bio: '',
    company: '',
    avatar_url: '',
    repos: []
})

async function fetchGithubUser(username) {
    const res = await fetch(`https://api.github.com/users/${username}`)
    const { login, name, bio, company, avatar_url } = await res.json()

    state.login = login
    state.name = name
    state.bio = bio
    state.company = company
    state.avatar_url = avatar_url

    fetchUserRepositories(login)
}

async function fetchUserRepositories(username) {
    const res = await fetch(`https://api.github.com/users/${username}/repos`)
    const repos = await res.json()

    state.repos = repos
}

const reposCountMessage = computed(() => {
    return state.repos.length > 0
        ? `${state.name} possui ${state.repos.length} repositórios públicos`
        : `${state.name} não possui nenhum repositório `
})

onMounted(() => {
    console.log("O componente foi montado.")
})

onUpdated(() => {
    console.log("O componente foi atualizado.")
})

onUnmounted(() => {
    console.log("O componente foi desmontado.")
})

</script>

<template>
    <h1>GitHub User Data</h1>
    <p>Pesquisando por: <strong>https://api.github.com/users/{{ searchInput }}</strong></p>
    <Form @form-submit="fetchGithubUser" />
    <div v-if="state.login !== ''">
        <UserInfo :login="state.login" :name="state.name" :company="state.company" :bio="state.bio" :avatar_url="state.avatar_url" />
    </div>
    <section v-if="state.repos.length > 0">
        <h2>{{ reposCountMessage }}</h2>
        <article v-for="repo of state.repos">
            <Repository :full_name="repo.full_name" :description="repo.description" :html_url="repo.html_url" />
        </article>
    </section>
</template>