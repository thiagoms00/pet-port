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
            const message = 'Olá estou interessado nos serviços de Creche do Nosso Mundo Pet!'; // Replace with your desired message
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
                    src="../assets/imgs/creche1.jpg">
                </v-img>
            </div>
            <v-divider v-if="!mobile" class="cover-divider border-opacity-50" :thickness="2" vertical color="#40469e"></v-divider>
            <div v-if="!mobile" class="img-wraper2 ml-12 mt-12">
                <v-img :width="220" aspect-ratio="16/9" cover class="ml-10 mt-10" src="../assets/imgs/logo.png">
                </v-img>
            </div>

        </v-row>

        <v-row class="data-row mx-auto pa-10 mt-7 elevation-4">

            <v-col :cols="leftCol" class="data-left">
                <h1 class="data-title">Creche</h1>
                <h3 class="data-sub">Cães</h3>
                <p class="data-p"> Traga seu cão para passar o dia conosco e se divertir com outros cães. A programação
                    inclui atividades de enriquecimento ambienta, banho de piscina e outras atividades que proporcionam
                    bem estar e integração. Todas as atividades são acompanhadas por um recreador. A adaptação é
                    agendada e sem custo.</p>
            </v-col>

            <v-col :cols="rightCol" class="data-right">
                <div class="function-div call-div d-flex elevation-10">
                    <v-icon icon="mdi-whatsapp mt-7" color="#fff" size="x-large" class="contact-icon"></v-icon>
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

        <v-container fluid class="fotos-container">
            <v-row class="prices-title-row outras-row align-center justify-center mt-5">
                <h1 class="table-title outras-title">Outras Fotos</h1>
            </v-row>
            <v-row class="prices-title-row outras-row align-center justify-center mt-10">
                <h1 class="table-title outras-title location-title">Santa tereza</h1>
            </v-row>
            <v-row class="prices-title-row align-center justify-center outras-imgs-row mt-5">

                <div class="img-wrapper3">
                    <v-img :width="620" :height="400" aspect-ratio="16/9" cover class="other-img"
                        src="../assets/imgs/santa-tereza1.jfif">
                    </v-img>
                </div>

                <div class="img-wrapper3">
                    <v-img :width="620" :height="400" aspect-ratio="16/9" cover class="other-img"
                        src="../assets/imgs/santa-tereza2.jfif">
                    </v-img>
                </div>

            </v-row>
            <v-row class="prices-title-row outras-row align-center justify-center mt-5">
                <h1 class="table-title outras-title location-title">Sagrada Família</h1>
            </v-row>
            <v-row class="prices-title-row align-center justify-center outras-imgs-row">

                <div class="img-wrapper3">
                    <v-img :width="620" :height="400" aspect-ratio="16/9" cover class="other-img"
                        src="../assets/imgs/creche2.jpg">
                    </v-img>
                </div>

                <div class="img-wrapper3">
                    <v-img :width="620" :height="400" aspect-ratio="16/9" cover class="other-img"
                        src="../assets/imgs/creche1.jpg">
                    </v-img>
                </div>

            </v-row>

        </v-container>

        <v-row class="prices-title-row diaria-row mx-auto pt-12 mt-12">
            <h1 class="table-title mx-auto">Diária</h1>
        </v-row>

        <v-row class="prices-first-row mx-auto pt-5 align-center justify-center">
            <div class="title-and-price d-flex flex-column align-center justify-center first-row">
                <h3 class="table-sub">Diária avulsa</h3>
                <h1 class="table-price">R$59,00</h1>
            </div>
            <div class="custom-divider"></div>

            <div class="title-and-price d-flex flex-column align-center justify-center ml-8 first-row">
                <h3 class="table-sub">Pacote de 4 diárias avulsas <span class="table-details">(30 dias para utilização)</span></h3>
                <h1 class="table-price">R$223,00</h1>
            </div>

        </v-row>

        <v-row class="prices-title-row pacote-row mx-auto pt-12">
            <h1 class="table-title mx-auto ">Pacote Mensal</h1>
        </v-row>

        <v-row class="prices-first-row second-prices-row mx-auto pa-5 align-center justify-center">

            <div class="title-and-price d-flex flex-column align-center justify-center">
                <h3 class="table-sub">2 Vezes por semana</h3>
                <h1 class="table-price">R$394,00</h1>
            </div>
            <div v-if="!mobile"  class="custom-divider"></div>

            <div class="title-and-price d-flex flex-column align-center justify-center ml-8">
                <h3 class="table-sub">3 Vezes por semana</h3>
                <h1 class="table-price">R$545,00</h1>
            </div>
            <div v-if="!mobile" class="custom-divider"></div>

            <div class="title-and-price last-table d-flex flex-column align-center justify-center ml-8">
                <h3 class="table-sub last-sub">4 vezes por semana</h3>
                <h1 class="table-price">R$665,00</h1>
            </div>

        </v-row>

        <v-row class="mt-10 mx-auto flex-column align-center justify-center info-row">
            <p class="text-details mt-8">Sagrada Familia: Entrada de 7h30-10h; atividades até 16h; saída até 18h40,
                tolerância até 19h10.</p>
            <p class="text-details pr-6">Santa Tereza: Entrada de 7h50-10h; atividades até 16h; saída até 18h30,
                tolerância até 18h40.</p>
            <p class="text-details">Não inclui alimentação. Trazer alimentação, tigelas, manta ou cama e cartão de
                vacinas. SOMENTE
                ALUNOS mensalistas PODEM FAZER CHECK-IN ANTES DE 9H – conta 1 diária de creche+ hotel. .</p>

        </v-row>


        <v-container fluid class="other-container pa-5 ma-0">
            <v-row class="align-center justify-center mt-5">
                <h1 class="change-title">Outros Serviços</h1>
            </v-row>

            <v-row class=" services-row align-center justify-center mt-12">
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
                    @click="mudaPagina('festa')">
                    <div class="img-wrapper">
                        <v-img :width="260" :height="200" aspect-ratio="16/9" cover class="other-img"
                            src="../assets/imgs/festa-aniversario.jpg">
                        </v-img>
                    </div>
                    <h2 class="card-anchor mt-10 mb-5">Festa de aniversário</h2>

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
                    @click="mudaPagina('hotelGatos')">
                    <div class="img-wrapper">
                        <v-img :width="260" :height="200" aspect-ratio="16/9" cover class="other-img"
                            src="../assets/imgs/hotelzinho-gatos.jpg">
                        </v-img>
                    </div>
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
    font-size: 2.5rem;
    opacity: 1;
    letter-spacing: 1px;
}

.table-sub {
    font-family: 'Roboto-Regular';
    font-size: 1.05rem;
    text-align: center;
}

.table-price {
    font-family: 'Roboto-Regular';
    color: #40469e;
    font-size: 2rem;
}

.custom-divider {
    border: 1px solid #40469ec0;
    height: 13vh;
    margin-left: 1vw;
}

.text-details {
    font-size: 1.1rem;
    color: rgb(58, 58, 58);
    font-family: 'Roboto-Regular';

}


.title-and-price {
    border-radius: 10px;
    width: 15vw;
    height: 18vh;
}

.fotos-container {
    background-color: rgba(240, 248, 255, 0.856);
    margin-top: 10vh;
    padding-bottom: 8vh;
    border-radius: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    border-bottom-right-radius: 0;
    border-bottom-right-radius: 0;


}

.outras-title {
    font-family: 'Poppins-Regular';
    color: #f3981f;
    font-size: 3.4rem;
}

.location-title {
    color: #40469e;
    font-size: 2.5rem;
}

.outras-imgs-row {
    height: auto;
    gap: 1vw;
}

.other-img {
    opacity: 0.85;
    scale: 0.97;
    transition: 0.5s all ease;

}

.other-img:hover {
    opacity: 1;
    scale: 1;
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
    font-family: 'Roboto-Regular';
    color: #40469e;
    font-size: 3rem;
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
        height: 10vh;
    }

    .card-anchor {
        margin-top: 3vh !important;
        margin-bottom: 1vh !important;
        font-size: 1rem;
    }

    .x-details {
        font-size: 0.8rem;
    }

    .second-text {
        margin-top: 1vh !important;
    }

    .outras-title {
        font-size:2.8rem;
    }

    .location-title{
        font-size: 2rem;
    }

    .img-wrapper3{
        width: 30vw;
        height: 20vw;
    }

    .diaria-row{
        margin-top: 0 !important;
    }

    .pacote-row{
        padding-top: 0vh !important;
    }

    .table-title{
        font-size: 1.8rem;
        margin-top: vh !important;
    }

    .table-sub{
        font-size: 0.8rem;
    }

    .table-price{
        font-size: 1.5rem;
    }

    .second-prices-row{
        padding-top: 0 !important;
    }

    .info-row{
        margin-top: 0 !important;
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

    .outras-row{
        margin-top: 0 !important;
    }

    .img-wrapper3{
        width: 50vw;
        height: 30vw;
    }

    .diaria-row{
        margin-top:  0 !important;
    }

    .title-and-price{
        width: 38vw;
        height: 14vh;
    }


    .custom-divider{
        margin-left: 6.5vw;
        height: 8vh;
    }

    .table-sub{
        font-size: 0.7rem;
        margin-top: 5vh !important;
        text-align: center;
    }

    .last-sub{
        margin-top: 0 !important;
    }

    .table-price{
        font-size: 1.3rem;
    }

    .last-table{
        margin-right: 5vw;
    }

    .prices-first-row{
        margin-top: 0 !;
    }

    .pacote-row{
        height: 4vh;
        margin-top: 5vh
    }

    .text-details{
        font-size: 0.9rem;
        text-align: center;
        padding: 0 0.5vw;
        margin-top: 1vh;
    }

    .contact-icon{
        margin-top: 2.5vh !important;
    }

}

</style>