<template>
    <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
        <div class="container-fluid">

            <RouterLink class="navbar-brand" to="/">
                <img class="nav-logo" src="../assets/img/Logo - primary.svg" alt="MARVEL" height="56">
            </RouterLink>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 right-container">
                    <li class="nav-item">
                        <RouterLink to="/">
                            <div class="nav-btn">
                                Home
                                <div v-if="activate == 'Home'" class="active-s "></div>
                            </div>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/characters">
                            <div class="nav-btn">
                                Characters
                                <div v-if="activate == 'Characters'" class="active-s "></div>
                            </div>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/comics">
                            <div class="nav-btn ">
                                Comics
                                <div v-if="activate == 'Comics'" class="active-s "></div>
                            </div>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/events">
                            <div class="nav-btn ">
                                Events
                                <div v-if="activate == 'Events'" class="active-s "></div>
                            </div>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/contact">
                            <div class="nav-btn ">
                                Contact
                                <div v-if="activate == 'Contact'" class="active-s "></div>
                            </div>
                        </RouterLink>
                    </li>
                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li> -->
                    <!-- <li class="nav-item">
                        <a class="nav-link disabled">Disabled</a>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
</template>
<style scoped>
.nav-custom {
    height: 88px;
    padding: 16px 80px 16px 80px;
}

.nav-logo {
     margin: 16px 0px 16px 80px;
}

.right-container {
  
    
    padding: 0px 80px 0px 80px;
}

.nav-btn {
    font-size: 20px;
    font-weight: 700;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 56px;
    margin: 0px 16px 0px 16px;
    text-transform: uppercase;

}

/* .nav-btn:hover{
    background-color: #9F0013;
}  */
.active-s {
    position: relative;
    bottom: 0px;
    height: 8px;
    width: 100%;
    background-color: white;
}
</style>
<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    activate: String
})

</script>