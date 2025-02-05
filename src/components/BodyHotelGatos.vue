<script>
export default {
    data() {
        return {
            screenWidth: window.innerWidth,
            mobile: false,
            leftCol: 6,
            right: 5,
        }
    },

    created() {
        if (this.screenWidth <= 1000) {
            this.mobile = true;
            this.leftCol = 12;
            this.rightCol = 12;
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
            const message = 'Olá estou interessado nos serviços de Hotelzinho para gatos do Nosso Mundo Pet!'; // Replace with your desired message
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
    <v-container fluid class="pa-0 ma-0">
        <v-row class="img-row mx-auto mt-12 elevation-4">
            <div class="img-wraper">
                <v-img :width="1050" :height="500" aspect-ratio="16/9" cover class="cover-img"
                    src="../assets/imgs/hotelGatoLarger.jpg">
                </v-img>
            </div>
            <v-divider v-if="!mobile"  class="cover-divider border-opacity-50" :thickness="2" vertical color="#40469e"></v-divider>
            <div v-if="!mobile" class="img-wraper2 ml-12 mt-12">
                <v-img :width="220" aspect-ratio="16/9" cover class="ml-10 mt-10" src="../assets/imgs/logo.png">
                </v-img>
            </div>

        </v-row>

        <v-row class="data-row mx-auto pa-10 mt-7 elevation-4">
            <v-col :cols="leftCol" class="data-left">
                <h1 class="data-title">Hotelzinho</h1>
                <h3 class="data-sub">Gatos</h3>
                <p class="data-p"> Espaços individuais e telados, mais verticais (2,55m de altura) para que ele possam
                    se divertir e exercitar durante a estadia. Recreação individual em sala telada 3 vezes ao dia,
                    acompanhada. Ambientes monitorados e totalmente seguros, valores a consultar.
                </p>
            </v-col>

            <v-col :cols="rightCol" class="data-right">
                <div class="function-div call-div d-flex elevation-10">
                    <v-icon icon="mdi-whatsapp mt-7" color="#fff" size="large" class="contact-icon"></v-icon>
                    <v-col class="text-contact ml-2" :style="{ 'cursor': 'pointer' }" @click="openWhatsApp()">
                        <h2 class="contact-title">Fale conosco!</h2>
                        <h4 class="contact-info">31 99930-5569</h4>

                    </v-col>
                </div>

                <div class="function-div email-div d-flex mt-3 elevation-10">
                    <v-icon icon="mdi-email-outline mt-7" color="#fff" size="x-large"></v-icon>
                    <v-col class="text-contact ml-2" :style="{ 'cursor': 'pointer' }" @click="mudaPagina('form')">
                        <h2 class="contact-title">Envie um e-mail</h2>
                        <h4 class="contact-info">contato@nossomundopet.com.br</h4>
                    </v-col>
                </div>
            </v-col>
        </v-row>



        <!--  <v-row class="prices-title-row mx-auto pt-4 mt-12">
            <h1 class="table-title mx-auto">Tabela de preços</h1>
        </v-row>

        <v-row class="prices-first-row mx-auto pa-10 align-center justify-center">
            <div class="title-and-price d-flex flex-column align-center justify-center">
                <h3 class="table-sub">Diária cabine simples individua</h3>
                <h1 class="table-price">R$49,00</h1>
            </div>
            <div class="custom-divider"></div>

            <div class="title-and-price d-flex flex-column align-center justify-center ml-8">
                <h3 class="table-sub">Diaria cabine simples dois gatos</h3>
                <h1 class="table-price">R$76,00</h1>
            </div>
            <div class="custom-divider"></div>

            <div class="title-and-price d-flex flex-column align-center justify-center ml-8">
                <h3 class="table-sub">Diária cabine simples individual(8 diárias ou mais)</h3>
                <h1 class="table-price">R$47,00</h1>
            </div>
            <div class="custom-divider"></div>
            <div class="title-and-price d-flex flex-column align-center justify-center ml-8">
                <h3 class="table-sub">Cabine Dupla (Acesso à duas cabines) </h3>
                <h1 class="table-price">R$86,00</h1>
            </div>

        </v-row> -->


        <v-row class="mt-12 mx-auto flex-column align-center justify-center">
            <p class="text-details mt-10">Checkin 13h-17h. Checkout de 9h até 12h.</p>
            <p class="text-details">*As vacinas tem que estar em dia, assim como a vermifugação e aplicação de
                antipulgas e carrapatos
                . </p>
            <p class="text-details">É necessário enviar a alimentação
                alimentação, comedouro e vasilha para água.
                Fêmeas no cio não poderão se hospedar. Machos acima de 10kg apenas castrados.</p>

        </v-row>

        <v-row class="mt-5 mx-auto flex-column align-center justify-center">
            <p class="text-details second-text mt-8" :style="{ 'text-align': 'justify' }">EARLY CHECK-IN (entrada mais cedo) – DE
                9H-11H.
            </p>
            <p class="text-details" :style="{ 'text-align': 'justify' }">LATE CHECK-OUT (saída mais tarde) – DE
                13h-17h30.
            </p>
        </v-row>

        <v-container fluid class="other-container pa-5 ma-0">
            <v-row class="align-center justify-center mt-12">
                <h1 class="change-title">Outros Serviços</h1>
            </v-row>
            <v-row class=" services-row align-center justify-center mt-12">
                <div class="img-card d-flex flex-column align-center justify-center elevation-2"
                    @click="mudaPagina('creche')">
                    <div class="img-wrapper">
                        <v-img :width="260" :height="200" aspect-ratio="16/9" cover class="other-img" src="../assets/imgs/creche1.jpg">
                        </v-img>
                    </div>

                    <h2 class="card-anchor mt-10 mb-5">Creche</h2>
                </div>

                <div class="img-card d-flex flex-column align-center justify-center elevation-2"
                    @click="mudaPagina('banho')">
                    <div class="img-wrapper">
                        <v-img :width="260" :height="200" aspect-ratio="16/9" cover class="other-img"
                            src="../assets/imgs/banho-e-tosa.jpg">
                        </v-img>
                    </div>
                    <h2 class="card-anchor mt-10 mb-5">Banho e Tosa</h2>

                </div>

                <div class="img-card d-flex flex-column align-center justify-center elevation-2"
                    @click="mudaPagina('hotelCaes')">
                    <div class="img-wrapper">
                        <v-img :width="260" :height="200" aspect-ratio="16/9" cover class="other-img"
                            src="../assets/imgs/hotelzinho.jpg">
                        </v-img>
                    </div>
                    <h2 class="card-anchor mt-10 mb-5">Hotel Cães</h2>

                </div>

                <div class="img-card d-flex flex-column align-center justify-center elevation-2"
                    @click="mudaPagina('festa')">
                    <div class="img-wrapper">
                        <v-img :width="260" :height="200" aspect-ratio="16/9" cover class="other-img"
                            src="../assets/imgs/festa-aniversario.jpg">
                        </v-img>
                    </div>
                    <h2 class="card-anchor mt-10 mb-5">Festa de Aniversário</h2>

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

@media (max-width: 1600px) {
    .img-wraper {
        width: 55vw;
        height: 25vw;
    }

    .img-wraper2 {
        width: 10vw;
        height: 10vw;
        margin-left: 0 !important;
    }

    .logo-img {
        width: 10vw;
        height: 10vw;
        margin-left: 0 !important;

    }


    .data-row {
        padding: 2vh !important;
    }

    .data-title {
        font-size: 2rem;
        margin-top: 0;
    }

    .data-sub {
        font-size: 1.3rem;

    }

    .data-p {
        font-size: 0.75rem;
        width: 100%;
    }

    .function-div {
        padding-top: 0.8vh;
        padding-bottom: 0.8vh;

    }

    .text-contact {
        margin-left: 0vw !important;
    }

    .contact-title {
        font-size: 1rem;
    }

    .contact-info {
        font-size: 0.7rem;

    }

    .contact-icon {
        margin-top: 3vh !important;
    }

    .change-title {
        font-size: 2rem;
    }

    .img-wrapper {
        width: 15vw;
        height: auto;
    }

    .card-anchor {
        margin-top: 3vh !important;
        margin-bottom: 1vh !important;
        font-size: 1rem;
    }

    .text-details{
        font-size: 0.8rem;
    }

    .second-text{
        margin-top: 1vh !important;
    }
}

@media (max-width: 800px) {
    .img-wraper {
        width: 100%;
        height: 20vh;
    }

    .contact-icon {
        margin-top: 2.5vh !important;
    }

    .other-container {
        margin-top: 0vh !important;

    }

    .change-title {
        margin-top: 0vh !important;
    }

    .card-anchor {
        margin-top: 1.5vh !important;
        font-size: 0.8rem !important;
    }

    .img-wrapper{
        width: 40vw;
        height: 20vh;
    }
    .contact-icon{
        margin-top: 2.5vh !important;
    }

    .text-details{
        font-size: 0.8rem;
        text-align: center;
    }


}
</style>