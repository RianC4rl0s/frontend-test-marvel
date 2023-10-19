<template>
    <div class="comic-card d-grid gap-3">
        <img :src=picture class="picutre"/>
        <div class="name">{{ name }}</div>
        PAGES: {{ pages }}
    </div>
</template>
<style scoped>
.picutre {
    height: 283px;
    width: 186.67px;
    border-radius: 4px;
    /* background-color: gray; */
}
.comic-card{
    width: 186.37px;
}
.name {
    font-weight: 700;
    font-size: 16px;
    text-decoration: underline;
}
</style>
<script setup>
defineProps({
    id:Number,
    name: String,
    picture:String,
    pages:Number
})
</script>