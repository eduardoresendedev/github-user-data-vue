<script setup>
import Profile from '../components/profile.vue'

</script>

<template>
    <Profile>
        <h1>GitHub User Data</h1>
        <template v-slot:footer>
            <footer>
                Desenvolvido por <a href="https://github.com/eduardoresendedev" target="_blank"> Eduardo Resende Mota</a>
            </footer>
        </template>
    </Profile>
</template>