<script setup>
defineProps(['login', 'name', 'company', 'avatar_url', 'bio'])
</script>

<template>
<div>
    <img :src="avatar_url">
    <strong>@{{ login }}</strong>
    <h2>{{ name }}</h2>
    <h3>{{ company }}</h3>
    <span>{{ bio }}</span>
</div>
</template>