<template>
    <header class="container-fluid py-4 fixed-top">
        <div class="d-flex justify-content-between align-items-center" style="margin: 0 100px;"> 
            <router-link to="/"><img src="@/assets/img/logo.svg" alt="Logo"></router-link>
            <navigation-bar></navigation-bar>
        <div class="d-flex">
            <login-menu></login-menu>
            <signup-menu></signup-menu>
        </div>
    </div>
    </header>
</template>

<script setup>
    import NavigationBar from './NavigationBar.vue';
    import SignupMenu from './SignupMenu.vue';
    import LoginMenu from './LoginMenu.vue';
</script>