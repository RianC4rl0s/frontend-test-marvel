<template>
    <RouterLink :to="`/characters/${id}`">
        <div class="character-card d-grid gap-3">
            <img :src=picture class="picutre" />
            <div class="name">
                {{ name }}
            </div>
        </div>
    </RouterLink>   
</template>
<style scoped>
.picutre {
    height: 183px;
    width: 186.67px;
    border-radius: 4px;
    /* background-color: gray; */
}

.character-card {
    width: 186.37px;
}

.name {
    font-weight: 700;
    font-size: 16px;
    text-decoration: underline;
    color: black;
}
</style>
<script setup>
defineProps({
    id: Number,
    name: String,
    picture: String
})
</script>