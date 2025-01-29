<script>
import FooterHome from './FooterHome.vue';
import MainNav from './MainNav.vue';
import camisa1 from '../assets/imgs/camisa1.png'
import camisa2 from '../assets/imgs/camisa2.png'
import camisa3 from '../assets/imgs/camisa3.png'
import camisa4 from '../assets/imgs/camisa4.png'
import camisa5 from '../assets/imgs/camisa5.png'
import camisa6 from '../assets/imgs/camisa6.png'
import tabelaMedidas from '../assets/imgs/tabelaMedidas.jpeg'

export default {
    data() {
        return {
            srcTabela: '',
            selectedShirt: {},
            isHovered: false, // Add this line to track hover state
            shirts1: [
                {
                    name: 'Camisa 1 - Nosso mundo pet',
                    imageSrc: camisa1,
                    price: '',
                    details: ' Algodão Egípcio, que tem durabilidade, conforto e toque macio ',
                    info1: '',
                    info2: '',
                    info3: '',
                },
                {
                    name: 'Camisa 2 - Nosso mundo pet',
                    imageSrc: camisa2,
                    price: '',
                    details: ' Dry fit, super leve e com proteção UV ',
                    info1: '',
                    info2: '',
                    info3: '',
                },
                {
                    name: 'Camisa 3 - Nosso mundo pet',
                    imageSrc: camisa3,
                    price: '',
                    details: '',
                    info1: '',
                    info2: '',
                    info3: '',
                },
            ],

            shirts2: [
                {
                    name: 'Camisa 4 - Nosso mundo pet',
                    imageSrc: camisa4,
                    price: '',
                    details: '',
                    info1: '',
                    info2: '',
                    info3: '',
                },
                {
                    name: 'Camisa 5 - Nosso mundo pet',
                    imageSrc: camisa5,
                    price: '',
                    details: ' Algodão Egípcio, que tem durabilidade, conforto e toque macio ',
                    info1: '',
                    info2: '',
                    info3: '',
                },
                {
                    name: 'Camisa 6 - Nosso mundo pet',
                    imageSrc: camisa6,
                    price: '',
                    details: '',
                    info1: '',
                    info2: '',
                    info3: '',
                },
            ]
        }
    },

    created () {
        this.srcTabela = tabelaMedidas;
    },

    methods: {
        openWhatsApp() {
            const phoneNumber = '553193880850'; // Replace with your phone number
            const message = 'Olá estou interessado em uma camisa Novo Mundo Pet!'; // Replace with your desired message
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }
    },

    created() {
        this.selectedShirt = this.shirts1[0];
    }
}
</script>

<template>
    <MainNav></MainNav>
    <v-container fluid class="main-container px-0">
        <v-row class="title-row align-center justify-center pa-0">
            <h1 class="title mt-12">Grife Nosso Mundo Pet</h1>
        </v-row>

        <v-row class="title-row info-row align-center justify-center mt-10">
            <div class="icon-text d-flex flex-column align-center justify-center ml-12">
                <v-icon icon="mdi-whatsapp" size="x-large" color="gray"></v-icon>
                <h3 class="info-icon mt-2 ">
                    Solicite agora
                </h3>
            </div>

            <div class="icon-text d-flex flex-column align-center justify-center">
                <v-icon icon="mdi-heart-outline" size="x-large" color="gray"></v-icon>
                <h3 class="info-icon mt-2">
                    Amado pelos donos de pet
                </h3>
            </div>

            <div class="icon-text d-flex flex-column align-center justify-center">
                <v-icon icon="mdi-paw" size="x-large" color="gray"></v-icon>
                <h3 class="info-icon mt-2">
                    Combine com seu bichinho
                </h3>
            </div>
        </v-row>

        <v-row class="align-center justify-center pa-0 mt-10">
            <p class="data-text">
                Você sabia que agora nós lançamos uma grife pra você desfilar seu amor de 4 patas por aí?
                Não tava sabendo? Pois agora, você tá!
            </p>
            <p class="data-text">
                A estampa mãe, pai e 80%/20% - são no algodão Egípcio,
                que tem durabilidade, conforto e toque macio. A estampa "
                essa é a minha camiseta pra passear com meu cachorro " é no dry fit,
                super leve e com proteção UV.
            </p>
        </v-row>

        <v-row class="content-row mt-10 px-5">
            <v-col cols="8" class="left-col pa-10 ml-5">
                <v-row class="img-row align-center justify-center">
                    <div v-for="(item, index) in shirts1" class="img-row elevation-1">
                        <v-img :width="350" :height="450" aspect-ratio="16/9" cover class="other-img"
                            :src="item.imageSrc">
                        </v-img>
                    </div>
                </v-row>

                <v-row class="img-row align-center justify-center mt-10">
                    <div v-for="(item, index) in shirts2" class="img-row elevation-1">
                        <v-img :width="350" :height="450" aspect-ratio="16/9" cover class="other-img"
                            :src="item.imageSrc">
                        </v-img>
                    </div>
                </v-row>
            </v-col>
            <v-col cols="3" class="right-col ml-12 d-flex flex-column mt-7 pt-10 elevation-2">
                <div class="img-wrapper mx-auto mt-5">
                    <v-img :width="210" aspect-ratio="16/9" contain class="logo-img"
                        src="../assets/imgs/logo.png">
                    </v-img>
                </div>
                <div class="icon-text d-flex flex-row mt-12 ml-5">
                    <v-icon icon="mdi-whatsapp" size="large" color="gray" class="mt-2"></v-icon>
                    <h3 class="info-card mt-2 ml-1">
                        Consulte disponibilidade
                    </h3>
                </div>

                <div class="icon-text d-flex flex-row mt-1 ml-5">
                    <v-icon icon="mdi-truck-delivery" size="large" color="gray" class="mt-2"></v-icon>
                    <h3 class="info-card mt-2 ml-1">
                        Enviamos para todo o Brasil
                    </h3>
                </div>

                <div class="icon-text d-flex flex-row mt-1 ml-5">
                    <v-icon icon="mdi-cat" size="large" color="gray" class="mt-2"></v-icon>
                    <h3 class="info-card mt-2 ml-1">
                        Estilos que combinam com seu pet
                    </h3>
                </div>

                <div class="aux-row mt-5">
                    <h4 class="text-size ml-8 mt-2">Tamanhos</h4>
                    <v-spacer></v-spacer>
                    <h4 class="text-size mt-2 mr-10" :style="{ 'text-decoration': 'underline', 'cursor': 'pointer' }"
                        @mouseover="isHovered = true" @mouseleave="isHovered = false">
                        Tabela de medidas
                    </h4>
                </div>

                <div v-if="isHovered" class="image-hover">
                    <v-img src="../assets/imgs/tabelaMedidas.jpeg" width="300"></v-img>
                </div>

                <div class="sizes-row ml-5 align-center d-flex">
                    <h4 class="size-letter elevation-1">Baby look M</h4>
                    <h4 class="size-letter elevation-1">P</h4>
                    <h4 class="size-letter elevation-1">M</h4>
                    <h4 class="size-letter elevation-1">G</h4>
                    <h4 class="size-letter elevation-1">GG</h4>
                </div>

                <v-btn class="confira-btn mx-auto" prepend-icon="mdi-whatsapp" @click="openWhatsApp()">Fale
                    conosco</v-btn>
            </v-col>
        </v-row>
    </v-container>
    <FooterHome class=""></FooterHome>
</template>

<style scoped>
.title {
    font-family: 'Urbanist-Regular';
    font-size: 3.3rem;
}

.data-text {
    font-family: 'Roboto-Light';
    font-size: 1.65rem;
    width: 80%;
    color: black;
    text-align: justify;
}

.main-container {
    border-top: 1px solid #40469e35;
    padding-top: 4vh;
    padding-bottom: 10vh;
}

.info-row {
    height: 10vh;
    gap: 5vw;
}

.icon-text {
    opacity: 0.8;
}

.info-icon {
    font-family: 'Raleway-Light';
}

.img-row {
    gap: 1vw;
}

.right-col {
    border: 1px solid rgba(0, 0, 0, 0.184);
    font-family: 'Raleway-Regular';
    height: 70vh;
}

.title-card {
    font-family: 'Raleway-Light';
    font-size: 1.9rem;
    color: black;
}

.subTitle-card {
    padding: 1vh 0;
    width: 90%;
    font-style: italic;
    font-size: 1.3rem;
    opacity: 0.8;
    line-height: 2.5vh;
}

.other-img {
    opacity: 0.8;
    transition: 0.5s opacity ease;
    cursor: pointer;
}

.other-img:hover {
    opacity: 1;
}

.custom-divider {
    border-bottom: 1px solid rgba(0, 0, 0, 0.258);
    width: 50%;
}

.custom-spacer {
    margin-top: 8vh;
}

.info-card {
    font-family: 'Raleway-Light';
    font-size: 1.1rem;
}

.aux-row {
    display: flex;
    height: 5.2vh;
    padding: 0;
}

.text-size {
    height: 4vh;
}

.sizes-row {
    height: 6vh !important;
    gap: 0.5vw;
}

.size-letter {
    height: 2vw;
    padding: 0 1.2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #40469e;
    color: #fff;
    border-radius: 2px;
}

.confira-btn {
    font-family: 'Poppins-Regular';
    font-size: 1.3rem;
    background-color: #40469e;
    color: #fff;
    width: 15vw;
    height: 5vh;
    margin-top: 3.2vh;
}

.image-hover {
    position: absolute;
    z-index: 1000;
    margin-top: 7vh;
    margin-left: 9.5vw;
    /* Adjust as needed */
}
</style>