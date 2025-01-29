<script>
import car1 from '../assets/imgs/car1.jpg';
import FooterHome from './FooterHome.vue';
import MainNav from './MainNav.vue';

export default {
    data() {
        return {

        }
    },
    methods: {
        openLocation(location) {
            /* Santa tereza */
            if (location === 'h1') {
                const address = "R. Jaspe, 8 - Santa Tereza";
                const url = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
                window.open(url, '_blank');
            }
            /* Sagrada Família */

            if (location === 'h2') {
                const address = "R. João Gualberto Filho, 1258 - Sagrada Família";
                const url = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
                window.open(url, '_blank');
            }
        }
    }
}
</script>
<template>

    <v-container fluid class="ma-0 pa-0">
        <v-row class="nav-row ma-0 pa-0">
            <MainNav></MainNav>
        </v-row>

        <v-row class="main-row mx-auto pa-10">

            <v-col cols=5 class="img-col d-flex">
                <v-spacer class="ml-12"></v-spacer>
                <div class="img-wrapper ml-10 mt-10">
                    <v-img :width="600" aspect-ratio="16/9" cover class="img-1" elevation-1
                        src="../assets/imgs/IMG_9240.jpg">
                    </v-img>
                </div>
            </v-col>

            <v-col cols="7" class="info-col d-flex flex-column align-center">
                <h1 class="about-text about-header">Quem somos</h1>
                <h3 class="about-text about-sub mt-4">Cuidar dos pets da sua família, como se fossem nossos, esse é o
                    nosso propósito!

                    Loja de itens para cães e gatos, com banho, tosa e creche para os cães. Tudo para o conforto do
                    animal em um único lugar. Além de uma pequena grife voltada para os amantes de pet.</h3>
                <v-col class="unidades-row d-flex flex-column align-center">
                    <h1 class="about-text about-header second-header mt-10 ml-3">Nossas unidades</h1>
                    <div class="cards-area mt-12">
                        <div class="card d-flex elevation-1">
                            <v-col cols="6" class="card-col card-left d-flex flex-column align-center">
                                <h1 class="card-title ml-12 mt-12">Unidade 1</h1>
                                <h4 class="card-sub ml-12">Rua Jaspe 8 </h4>
                                <h4 class="card-sub ml-12">Santa tereza | BH-MG</h4>

                                <v-btn prepend-icon="mdi-map-marker" class="card-btn mt-10 ml-12" variant="outlined"
                                    @click="openLocation('h1')">Ver
                                    Localização</v-btn>
                            </v-col>
                            <v-spacer class="main-spacer"></v-spacer>
                            <v-col cols="5" class="card-col card-right pa-0">
                                <div class="img-wrapper-2">
                                    <v-img :width="400" :height="300" aspect-ratio="16/9" cover
                                        class="card-img elevation-2" src="../assets/imgs/hotelSantaTereza.jpg">
                                    </v-img>
                                </div>
                            </v-col>
                        </div>

                        <div class="card d-flex elevation-1 mt-10">
                            <v-col cols="6" class="card-col card-left d-flex flex-column align-center">
                                <h1 class="card-title ml-12 mt-12">Unidade 2</h1>
                                <h4 class="card-sub ml-12">Rua João guelberto filho 1258
                                </h4>
                                <h4 class="card-sub ml-12">Sagrada Família | BH-MG</h4>

                                <v-btn prepend-icon="mdi-map-marker" class="card-btn mt-8 ml-12" variant="outlined"
                                    @click="openLocation('h2')">Ver
                                    Localização</v-btn>
                            </v-col>
                            <v-spacer class="main-spacer"></v-spacer>
                            <v-col cols="5" class="card-col card-right pa-0">
                                <div class="img-wrapper-2">
                                    <v-img :width="400" :height="300" aspect-ratio="16/9" cover
                                        class="card-img elevation-2" src="../assets/imgs/petSagradaFamilia.jpg">
                                    </v-img>
                                </div>
                            </v-col>
                        </div>
                    </div>
                </v-col>
            </v-col>


        </v-row>

        <v-row class="footer-row">
            <FooterHome></FooterHome>
        </v-row>
    </v-container>

</template>
<style scoped>
body,
html {
    height: 100%;
}

.main-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 2vh;
    border: 0.1rem solid rgb(236, 236, 236);
}

.info-col {
    max-width: 80% !important;
    margin-top: 5%;
}

.about-text {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.second-row {
    background-color: rgb(251, 250, 250);
    height: 35vh;
}

.left-col {
    display: flex;
    align-items: center;
}

.img-wrapper{
    margin-top: 12vh !important;
}

.img-1 {
    border-radius: 0.2vw;
}

.img-2 {
    border-radius: 50%;

}

.about-header {
    font-size: 3.1rem;
    font-family: 'Urbanist-Regular';

    color: #f3981f;
}

.custom-divider {
    border-bottom: 1px solid rgb(134, 134, 134);
    width: 6vw;
}

.about-sub {
    font-size: 1.35rem;
    width: 80%;
    text-align: justify;
    font-family: 'Roboto-Light';
    font-weight: 600;
}

.about-sub2 {
    padding: 2vh;
    font-weight: 600;
}

.card {

    gap: 10px;
}

.card-btn {
    background-color: #f3981f;
    color: #fff;
    width: 12vw !important;
    height: 6vh;
    font-size: 1rem;
}

.main-card {
    background-color: #fff;
}

.cards-row {
    width: 90%;
    margin-top: 4vh;
    align-items: center;
    justify-content: center;
}


.card-right {
    overflow: hidden;
}

.card-img {
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;

    overflow: hidden;
}

.card-title {
    font-family: 'Poppins-Regular';
    font-size: 2.5rem;
}

.card-sub {
    font-family: 'Poppins-Light';
    font-weight: 600;
    font-size: 1rem;
    color: rgb(57, 57, 57);

}




@media (max-width : 1600px) {

    .img-wrapper {
        width: 31vw;
        margin-top: 5vh !important;
    }

    .img-1 {
        max-width: 100%;
        margin-left: 0 !important;

    }

    .info-col{
        margin-top: 2.5%;
    }

    .about-header {
        font-size: 2.1rem;
    }

    .second-header{
        margin-top: 2vh !important;
    }

    .about-sub {
        font-size: 1.1rem;
    }

    .img-wrapper-2 {
        width: 16vw;
        height: 25vh;
    }

    .card{
        gap: 0px !important;
    }

    .card-title{
        font-size: 1.1rem;
        margin-top: 2vh !important;
        margin-left: 1vw !important;
    }

    .card-sub{
        font-size: 0.7rem;
        margin-left: 1vw !important;

    }

    .card-btn{
        font-size: 0.7rem;
        width: 13vw !important;
        height: 5vh;
        margin-left: 1vw !important;
        margin-top: 4vh !important;

    }

    .main-spacer{
        margin-right: 0 !important;
        margin-left: 0 !important;
        width: 0 !important;
    }
}
</style>