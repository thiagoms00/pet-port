<script>

import marca1 from '../assets/imgs/marca-1.png';
import marca2 from '../assets/imgs/marca-2.png';
import marca3 from '../assets/imgs/marca-3.png';
import marca4 from '../assets/imgs/marca-4.png';
import marca5 from '../assets/imgs/marca-5.png';



export default {
    data() {
        return {
            imageModel: null,
            selectedSlide: 's1',
            slidePaths1: [marca1, marca2],
            slidePaths2: [marca3, marca4, marca5],

        }
    },
    methods: {
        mudaPage() {
            this.$router.push('/contato');
        }
    }
}
</script>
<template>
    <v-container fluid class="pa-10 ma-0 d-flex align-center contact-row">
        <v-col cols="6" class="cont-col left-col d-flex">
            <div class="test-img">
                <v-img :width="900" aspect-ratio="16/9" cover class="logo-pata" src="../assets/imgs/pata-logo.png">
                </v-img>
            </div>

            <div class="form-div d-flex flex-column align center ml-10">
                <h1 class="contact-text mt-4">Receba nossas novidades!</h1>
                <v-btn class="contact-btn mx-auto mt-5" @click="mudaPage()" density=confortable>Fale conosco</v-btn>
            </div>
        </v-col>

        <div class="custom-divider"></div>


        <v-col cols="6" class="main-col right-col d-flex align-center justify-center">

            <!-- Pro carrosel custom -->
            <v-icon icon="mdi-arrow-left-drop-circle-outline" class="arrow-icon" size="x-large"
                @click="selectedSlide = selectedSlide == 's1' ? 's2' : 's1'"> </v-icon>
            <div class="car-wraper d-flex align-center justify-center">

                <div v-for="(item, index) in slidePaths1" v-if="selectedSlide == 's1'"
                    class="d-fleximage-group first-group">
                    <div class="img-wrapper">
                        <v-img :width="200" :height="180" aspect-ratio="16/9" cover class="brand-img ml-10"
                            :src="slidePaths1[index]">
                        </v-img>
                    </div>

                </div>

                <div v-for="(item, index) in slidePaths2" v-if="selectedSlide == 's2'" class="image-group">
                    <div class="img-wrapper">
                        <v-img :width="200" :height="180" aspect-ratio="16/9" cover class="brand-img"
                            :src="slidePaths2[index]">
                        </v-img>
                    </div>
                </div>
            </div>

            <v-icon icon="mdi-arrow-right-drop-circle-outline" class="arrow-icon" size="x-large"
                @click="selectedSlide = selectedSlide == 's1' ? 's2' : 's1'"> </v-icon>




        </v-col>
    </v-container>

</template>
<style scoped>
.contact-row {
    background-color: #ffffff;
    padding: 0;
    height: 40vh;
}

.car-wraper {
    width: 35vw;
}

.first-group {
    gap: 4vw;
}

.test-img {
    width: 10vw !important;
    margin-top: 2.2vh;
}

.contact-text {
    font-family: 'Poppins-Regular';
    font-size: 2.8rem;
    font-weight: bolder;
    color: #40469e;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

}

.contact-field {
    font-size: 1.5rem !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.contact-btn {
    width: 13.5vw !important;
    height: 6vh;
    font-family: 'Poppins-Regular';
    font-weight: bold;
    background-color: #f3981f;
    color: #fff;
    font-size: 1.3rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}



.custom-divider {
    height: 30vh;
    border-left: 0.1rem solid rgb(193, 193, 193);
}

.right-col {
    gap: 1vw;
}

.image-group {
    transition: 0.5s ease-in;
}

.brand-img {
    opacity: 0.7;
    max-width: 100% !important;
    transition: 0.2s opacity ease-in;
}

.brand-img:hover {
    opacity: 1;
}

.arrow-icon {
    transition: 0.3s color ease-in;
    color: #f3981f;
    cursor: pointer;
}

.arrow-icon:hover {
    color: #40469e;
}


/* Transition Effect */
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.5s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateX(-50%);
}

.fade-slide-leave-from,
.fade-slide-enter-to {
    opacity: 1;
    transform: translateX(0);
}


@media (max-width : 1600px) {
    .contact-text {
        font-size: 1.9rem;
        margin-left: 0vw !important;
        margin-top: 3vh !important;
    }

    .contact-btn {
        font-size: 0.9rem;
        margin-top: 2vh !important;
    }

    .img-wrapper{
        width: 11vw;
        height: 8vw;
    }

    .form-div{
        margin-left: 1vw !important;
    }
}
</style>