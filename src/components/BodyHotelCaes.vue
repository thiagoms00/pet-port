<script>

import ChangeServices from '@/components/ChangeServices.vue';

export default {
    data() {
        return {

        }
    },
    methods: {
        mudaPagina(location) {
            switch (location) {
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
                case 'form':
                    this.$router.push('/contato');
                    break;

            }
        },
        openWhatsApp() {
            const phoneNumber = '5531999305569'; // Replace with your phone number
            const message = 'Olá estou interessado nos serviços de Hotelzinho para cães do Nosso Mundo Pet!'; // Replace with your desired message
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }
    },
}
</script>
<template>
    <v-row class="nav-row ma-0 pa-0">
        <MainNav></MainNav>
    </v-row>
    <v-container fluid class="main-container pa-0 ma-0">
        <v-row class="img-row mx-auto mt-4 elevation-4">
            <div class="img-wraper">
                <v-img :width="1050" :height="500" aspect-ratio="16/9" cover class="cover-img"
                    src="../assets/imgs/hotelCaesLarger.jpg">
                </v-img>
            </div>
            <v-divider class="cover-divider border-opacity-50" :thickness="2" vertical color="#40469e"></v-divider>
            <div class="img-wraper ml-12 mt-12">
                <v-img :width="220" aspect-ratio="16/9" cover class="ml-10 mt-10" src="../assets/imgs/logo.png">
                </v-img>
            </div>
        </v-row>

        <v-row class="data-row mx-auto pa-10 mt-7 elevation-4">
            <v-col cols="6" class="data-left">
                <h1 class="data-title">Hotelzinho</h1>
                <h3 class="data-sub">CÃES</h3>
                <p class="data-p"> Viaje tranquilo e deixe o seu cão passar férias com a gente. Durante o dia, os cães
                    ficam na área de lazer e, a noite, dormem em espaços individuais, valores a consultar.</p>
            </v-col>

            <v-col cols="5" class="data-right">
                <div class="function-div call-div d-flex elevation-10">
                    <v-icon icon="mdi-whatsapp mt-7" color="#fff" size="x-large"></v-icon>
                    <v-col class="text-contact ml-2" :style="{ 'cursor': 'pointer' }" @click="openWhatsApp()">
                        <h2 class="contact-title">Fale conosco!</h2>
                        <h4 class="contact-info">31 99930-5569</h4>

                    </v-col>
                </div>

                <div class="function-div email-div d-flex mt-3 elevation-10">
                    <v-icon icon="mdi-email-outline mt-7" color="#fff" size="x-large"></v-icon>
                    <v-col class="text-contact ml-2">
                        <h2 class="contact-title" :style="{ 'cursor': 'pointer' }" @click="mudaPagina('form')">Envie um
                            e-mail</h2>
                        <h4 class="contact-info">contato@nossomundopet.com.br</h4>
                    </v-col>
                </div>
            </v-col>
        </v-row>

        <!-- <v-row class="prices-title-row mx-auto pt-4 mt-12">
            <h1 class="table-title mx-auto">Tabela de preços</h1>
        </v-row>

        <v-row class="prices-first-row mx-auto pa-10 align-center justify-center">
            <div class="title-and-price d-flex flex-column align-center justify-center">
                <h3 class="table-sub">Diária porte P/M</h3>
                <h1 class="table-price">R$60,00</h1>
            </div>
            <div class="custom-divider"></div>

            <div class="title-and-price d-flex flex-column align-center justify-center ml-8">
                <h3 class="table-sub">Pacote: acima de 7 diárias</h3>
                <h1 class="table-price">R$58,00/diária</h1>
            </div>
            <div class="custom-divider"></div>

            <div class="title-and-price d-flex flex-column align-center justify-center ml-8">
                <h3 class="table-sub">Dois cães P na mesma cabine</h3>
                <h1 class="table-price">R$96,00/diária</h1>
            </div>
        </v-row>

        <v-row class="prices-first-row mx-auto pa-10 align-center justify-center">
            <div class="title-and-price d-flex flex-column align-center justify-center ml-5">
                <h3 class="table-sub">Diária porte G</h3>
                <h1 class="table-price">R$65,00</h1>
            </div>
            <div class="custom-divider"></div>

            <div class="title-and-price d-flex flex-column align-center justify-center ml-8">
                <h3 class="table-sub">Pacote: acima de 7 diárias</h3>
                <h1 class="table-price">R$63,00/diária</h1>
            </div>
            <div class="custom-divider"></div>

            <div class="title-and-price d-flex flex-column align-center justify-center ml-8">
                <h3 class="table-sub">Dois cães M ou G na mesma cabine</h3>
                <h1 class="table-price">R$104,00/diária</h1>
            </div>
        </v-row> -->

        <v-row class="mt-10 mx-auto flex-column align-center justify-center">
            <p class="text-details mt-8">Checkin 13h-17h. Checkout de 9h até 12h.</p>
            <p class="text-details">*As vacinas tem que estar em dia, assim como a vermifugação e aplicação de
                antipulgas e carrapatos
                . </p>
            <p class="text-details">Não inclui alimentação. Trazer alimentação, tigelas, manta ou cama e cartão de
                vacinas. SOMENTE
                ALUNOS mensalistas PODEM FAZER CHECK-IN ANTES DE 9H – conta 1 diária de creche+ hotel.</p>
        </v-row>

        <v-row class="mt-5 mx-auto flex-column align-center justify-center">
            <p class="text-details mt-8" :style="{'text-align' : 'justify'}">EARLY CHECK-IN (entrada mais cedo) – DE 9H-11H.
            </p>
            <p class="text-details" :style="{'text-align' : 'justify'}">LATE CHECK-OUT (saída mais tarde) – DE 13h-17h30 
                </p>
        </v-row>

        <v-container fluid class="other-container pa-5 ma-0">
            <v-row class="align-center justify-center mt-12">
                <h1 class="change-title">Outros Serviços</h1>
            </v-row>

            <v-row class=" services-row align-center justify-center mt-12">
                <div class="img-card d-flex flex-column align-center justify-center elevation-2"
                    @click="mudaPagina('creche')">
                    <v-img :width="250" aspect-ratio="16/9" cover class="other-img" src="../assets/imgs/creche.jpg">
                    </v-img>
                    <h2 class="card-anchor mt-10 mb-5">Creche</h2>
                </div>

                <div class="img-card d-flex flex-column align-center justify-center elevation-2"
                    @click="mudaPagina('festa')">
                    <v-img :width="250" aspect-ratio="16/9" cover class="other-img"
                        src="../assets/imgs/festa-aniversario.jpg">
                    </v-img>
                    <h2 class="card-anchor mt-10 mb-5">Festa de aniversário</h2>

                </div>

                <div class="img-card d-flex flex-column align-center justify-center elevation-2"
                    @click="mudaPagina('banho')">
                    <v-img :width="250" aspect-ratio="16/9" cover class="other-img"
                        src="../assets/imgs/banho-e-tosa.jpg">
                    </v-img>
                    <h2 class="card-anchor mt-10 mb-5">Banho e tosa</h2>

                </div>

                <div class="img-card d-flex flex-column align-center justify-center elevation-2"
                    @click="mudaPagina('hotelGatos')">
                    <v-img :width="250" aspect-ratio="16/9" cover class="other-img"
                        src="../assets/imgs/hotelzinho-gatos.jpg">
                    </v-img>
                    <h2 class="card-anchor mt-10 mb-5">Hotel Gatos</h2>

                </div>
            </v-row>


        </v-container>


    </v-container>
</template>
<style scoped>
.v-row {
    border-radius: 10px;
}

.img-row {
    width: 84%;
}

.cover-img {
    border-radius: 10px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.data-row {
    width: 84%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.data-left {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.data-right {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.data-title {
    font-family: 'Poppins-Regular';
    font-size: 3rem;
    color: #40469e;
}

.data-sub {
    font-family: 'Poppins-light';
    font-size: 1.8rem;
    color: rgb(54, 54, 54);
}

.data-p {
    font-family: 'Poppins-Regular';
    font-size: 1.1rem;
    text-align: justify;
    width: 90%;
    color: rgb(54, 54, 54);

}

.function-div {
    padding: 2vh;
    border-radius: 10px;
    font-family: 'Poppins-Regular';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.call-div {
    background-color: #f3981f;
}

.email-div {
    background-color: #40469e;
}

.contact-title {
    color: #fff;
}

.contact-info {
    color: #fff;
}

.prices-title-row {
    height: 10vh;
}

.table-title {
    font-family: 'Roboto-Regular';
    color: #40469e;
    font-size: 3rem;
    letter-spacing: 1px;
}

.table-sub {
    font-family: 'Roboto-Regular';
}

.table-price {
    font-family: 'Roboto-Regular';
    color: #40469e;
}

.custom-divider {
    border: 1px solid #40469e;
    height: 15vh;
    margin-left: 2vw;
}

.text-details {
    font-size: 1.2rem;
    color: rgb(58, 58, 58);
    font-family: 'Roboto-Regular';
}

/* Outros serviços */

.other-container {
    border-radius: 5px;
    border-radius: 20px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

}

.other-img {
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    overflow: hidden;

}

.change-title {
    font-family: 'Poppins-Regular';
    color: #40469e;
    font-size: 3.2rem;
}

.services-row {
    gap: 5vw;
}

.img-card {
    border-radius: 10px;
    opacity: 0.85;
    transition: 0.5s opacity ease;
    cursor: pointer;
}

.img-card:hover {
    opacity: 1;
}


.card-anchor {
    font-family: 'Poppins-Regular';
    color: #40469e;
    font-size: 1.35rem;

}
</style>