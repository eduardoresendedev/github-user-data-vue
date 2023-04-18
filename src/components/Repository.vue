<script setup>
defineProps(['full_name', 'description', 'html_url'])
</script>

<template>
<div class="repos">
    <h3>{{ full_name }}</h3>
    <p>{{ description }}</p>
    <a :href="html_url" target="_blank">Ver no Github</a>
</div>
</template>

<style>

.repos {
    background-color:   rgba(1,1,1,0.3);
    margin: 0.5rem;
    border-radius: 15px;
    width:100%;
    height: 16vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.2)
}

</style>