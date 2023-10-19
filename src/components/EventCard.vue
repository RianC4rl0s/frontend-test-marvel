<template>
    <div class="event-card d-grid gap-3">
        <div class="row">
            <div class="col-md-12 col-lg-4">
                <img :src=picture class="picutre" />

            </div>
            <div class="col-md-12 col-lg-8">

                <div class="card-content">
                    <div class="name">{{ title }}</div>
                    <div class="description">
                        {{ description }}
                    </div>
                    <div>{{ date }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.picutre {
    height: 223px;
    width: 223px;
    border-radius: 4px;
    /* background-color: gray; */
}

.event-card {
    width: 624px;
    /* display: flex; */
    /* flex-direction: row; */
    /* width: 186.37px; */
}

.name {
    font-weight: 700;
    font-size: 16px;
    text-decoration: underline;
    margin-bottom: 16px;
}

.card-content {
    padding: 0px 16px 0px;
    width: 377px;
}
</style>
<script setup>
defineProps({
    id: Number,
    title: String,
    description: String,
    date: String,
    picture: String
})
</script>