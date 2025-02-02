<script>

import cat2 from '../assets/imgs/hotel-gatos.jpg';
import dog1 from '../assets/imgs/hotel-cachorro-caes.jpg';
import dog3 from '../assets/imgs/banho-tosa.jpg';
import dog2 from '../assets/imgs/creche-caes.jpg';


import MainNav from './MainNav.vue';


export default {
    data() {
        return {
            img1Path: dog1,
            img2Path: dog2,
            img3Path: cat2,
            img4Path: dog3,


            toogle1: false, //For a transition
            toogle2: false, //For a transition
            toogle3: false, //For a transition
            screenWidth: window.innerWidth,

            carImgHeight: '100vh',
            carImgWidth: 'auto',
            mobile: false,

        }
    },
    created() {
        if (this.screenWidth < 1000) {
            this.mobile = true;
        }
    },
    mounted() {
        setTimeout(() => {
            this.toogle1 = true;
        }, 200);

        setTimeout(() => {
            this.toogle2 = true;
        }, 500);

        setTimeout(() => {
            this.toogle3 = true;
        }, 800);
        console.log(this.screenWidth);
    },
    methods: {
        mudaPage(pageName) {
            switch (pageName) {
                case 'servicos':
                    this.$router.push('/services');
                    break;
                case 'banho':
                    this.$router.push('/services/banho-e-tosa');
                    break;
                case 'creche':
                    this.$router.push('/services/creche-caes');
                    break;
                case 'festa':
                    this.$router.push('/services/festa-de-aniversario');
                    break;
                case 'hotelCaes':
                    this.$router.push('/services/hotelzinho-caes');
                    break;
                case 'hotelGatos':
                    this.$router.push('/services/hotelzinho-gatos');
                    break;
            }
        },
    },

}
</script>
<template>


    <v-app class="main-app pa-0 ma-0">
        <!-- Para desktop -->

        <v-container v-if="!mobile" fluid class="ma-0 pa-0 cont1">
            <v-carousel show-arrows="hover" class="main-car">
                <v-carousel-item class="car-item" :src="img3Path" cover>
                    <v-col cols="16 pa-0">
                        <MainNav></MainNav>
                    </v-col>
                    <v-col cols="16" class="">
                        <div class="text-area d-flex flex-column">

                            <div class="img-wrapper">
                                <v-img :width="200" :height="200" class="logo-img" src="../assets/imgs/logo.png">
                                </v-img>
                            </div>
                            <Transition name="firstText">
                                <h1 v-if="toogle1" class="text-h1 first-h1 mt-12">Hotel para gatos </h1>
                            </Transition>
                            <Transition name="firstText">
                                <h1 v-if="toogle2" class="text-h1 second-h1 mt-4 ml-1"> Ele vai se sentir em casa !
                                </h1>
                            </Transition>
                            <Transition name="firstText">
                                <v-btn v-if="toogle3" class="mt-12 meet-btn"
                                    @click="mudaPage('hotelGatos')">Conheça!</v-btn>
                            </Transition>
                        </div>
                    </v-col>
                </v-carousel-item>

                <v-carousel-item class="car-item" :src="img1Path" cover>
                    <v-col cols="16 pa-0">
                        <MainNav></MainNav>
                    </v-col>
                    <v-col cols="16" class="">
                        <div class="text-area d-flex flex-column">

                            <div class="img-wrapper">
                                <v-img :width="200" :height="200" class="logo-img" src="../assets/imgs/logo.png">
                                </v-img>
                            </div>


                            <Transition name="firstText">
                                <h1 v-if="toogle1" class="text-h1 first-h1 mt-12">Hotel para cachorros </h1>
                            </Transition>
                            <Transition name="firstText">
                                <h1 v-if="toogle2" class="text-h1 second-h1 mt-4 ml-1"> Eles também merecem conforto<br>
                                    e diversão!
                                </h1>
                            </Transition>
                            <Transition name="firstText">
                                <v-btn v-if="toogle3" class="mt-12 meet-btn"
                                    @click="mudaPage('hotelCaes')">Conheça!</v-btn>
                            </Transition>
                        </div>
                    </v-col>
                </v-carousel-item>

                <v-carousel-item class="car-item" :src="img2Path" cover>
                    <v-col cols="16 pa-0">
                        <MainNav></MainNav>
                    </v-col>
                    <v-col cols="16" class="">
                        <div class="text-area d-flex flex-column">

                            <div class="img-wrapper">
                                <v-img :width="200" :height="200" class="logo-img" src="../assets/imgs/logo.png">
                                </v-img>
                            </div>
                            <Transition name="firstText">
                                <h1 v-if="toogle1" class="text-h1 first-h1 mt-12">Creche para cães</h1>
                            </Transition>
                            <Transition name="firstText">
                                <h1 v-if="toogle2" class="text-h1 second-h1 mt-4 ml-1"> Ele também gosta
                                    de sair da rotina!
                                </h1>
                            </Transition>
                            <Transition name="firstText">
                                <v-btn v-if="toogle3" class="mt-12 meet-btn"
                                    @click="mudaPage('creche')">Conheça!</v-btn>
                            </Transition>
                        </div>
                    </v-col>
                </v-carousel-item>
                <div class="car-wrapper">
                    <v-carousel-item class="car-item" :src="img4Path" cover height="100vh">
                        <v-col cols="16 pa-0">
                            <MainNav></MainNav>
                        </v-col>
                        <v-col cols="16" class="">
                            <div class="text-area d-flex flex-column">

                                <div class="img-wrapper">
                                    <v-img :width="200" :height="200" class="logo-img" src="../assets/imgs/logo.png">
                                    </v-img>
                                </div>

                                <Transition name="firstText">
                                    <h1 v-if="toogle1" class="text-h1 first-h1 mt-12">Banho e tosa </h1>
                                </Transition>
                                <Transition name="firstText">
                                    <h1 v-if="toogle2" class="text-h1 second-h1 mt-4 ml-1"> Mais gostoso que um bichinho
                                        <br>
                                        só um bichinho cheiroso!
                                    </h1>
                                </Transition>
                                <Transition name="firstText">
                                    <v-btn v-if="toogle3" class="mt-12 meet-btn"
                                        @click="mudaPage('banho')">Conheça!</v-btn>
                                </Transition>
                            </div>
                        </v-col>
                    </v-carousel-item>
                </div>

            </v-carousel>
        </v-container>

        <!-- Para versões mobile -->
        <v-container v-if="mobile" fluid class="ma-0 pa-0 cont1 mobile-container">
            <v-col cols="16 pa-0">
                <MainNav></MainNav>
                <v-col cols="16" class="">
                    <div class="text-area d-flex flex-column">

                        <Transition name="firstText">
                            <div class="img-wrapper">
                                <v-img :width="200" :height="200" class="logo-img" src="../assets/imgs/logo.png">
                                </v-img>
                            </div>

                        </Transition>
                        <Transition name="firstText">
                            <h1 v-if="toogle2" class="text-h1 second-h1 mt-4 ml-1"> Eles também merecem conforto<br>
                                e diversão!
                            </h1>
                        </Transition>
                        <Transition name="firstText">
                            <v-btn v-if="toogle3" class="mt-12 meet-btn" @click="mudaPage('servicos')">Conheça!</v-btn>
                        </Transition>
                    </div>
                </v-col>
            </v-col>


        </v-container>


    </v-app>
</template>
<style scoped>
.main-app {
    height: 88.99vh !important;
}

.main-car {
    height: 88.99vh !important;
}

.car-item {
    opacity: 1;
}


.text-area {
    width: 100%;
    margin-top: 5vh;
    margin-left: 6.5vw;
}

.logo-img {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 100% !important;
}

.text-h1 {
    color: #ffffff;
    font-family: 'Urbanist-Regular';
    font-weight: bolder;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

}

.first-h1 {
    color: #f7981b;
    font-size: 4rem !important;

    margin-top: 8vh !important;

}

.second-h1 {
    font-size: 1.8rem !important;
    color: #2f368c;
}

.meet-btn {
    background-color: #f7981b;
    color: #ffffff;
    font-size: 1.5rem;
    font-family: 'Roboto-Regular';
    margin-left: 6vw;
    width: 13vw;
    height: 5.7vh;
    border-radius: 3vw;
}

/* Transitions */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.firstText-enter-active,
.firstText-leave-active {
    transition: opacity 1.3s ease;
}

.firstText-enter-from,
.firstText-leave-to {
    opacity: 0;
}


.mobile-container {
    background-image: url(../assets/imgs/mobileCover.jpg);
    background-size: cover;
    height: auto;
    width: 100%;
    height: 88.99vh;
    background-position: center;
}


@media (max-width: 1600px) {
    .img-wrapper {
        width: 10vw;
        height: 10vw;
    }

    .first-h1 {
        font-size: 3.1rem !important;
    }

    .second-h1 {
        font-size: 1.3rem !important;
        margin-top: 1.3vh !important;
    }

    .meet-btn {
        width: 11.5vw;
        margin-top: 5.5vh !important;
        font-size: 1.1rem;
    }
}

@media (max-width: 800px) {

    .main-car {
        width: 100% !important;
    }

    .car-wrapper {
        width: 10vw !important;
    }

    .car-item {
        height: 100% !important;

    }

    .img-wrapper {
        width: 40vw;
        height: 40vw;
        margin-top: 28.3vh !important;

    }

    .first-h1 {
        font-size: 2.1rem !important;
        margin-top: 5.3vh !important;
        margin-left: 5vw;
        filter: brightness(1.05);
        /* 1 is normal, increase for more brightness */


    }

    .second-h1 {
        font-size: 1.3rem !important;
        margin-top: 2.3vh !important;
        margin-left: 1vw !important;

    }

    .meet-btn {
        width: 45vw !important;
        height: 5.5vh;
        margin-top: 2.5vh !important;
        font-size: 0.95rem;
        border-radius: 50px;
        margin-left: 1vw !important;
    }
}
</style>