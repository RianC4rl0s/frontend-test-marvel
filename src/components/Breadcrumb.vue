<template>
    <nav aria-label="breadcrumb m-bread">
        <ol class="breadcrumb m-bread">

            <li class="breadcrumb-item" aria-current="page">
                <ion-icon name="home"></ion-icon>
                {{ start }}
            </li>
            <li v-for="page in pages" :key="page" class="breadcrumb-item" aria-current="page">
                {{ page }}
            </li>
        </ol>
    </nav>
</template>
<script setup>
defineProps({
    start:String,
    pages: Array < String > []
})
</script>
<style>
.m-bread{
    color: #767676;
    margin: 32px 0px 32px 0px;
}
</style>