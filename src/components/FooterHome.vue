<script>
import car1 from '../assets/imgs/car1.jpg';

export default {
    data() {
        return {
            screenWidth: window.innerWidth,
            iconSize: '',
            colsSize : 2,
        }
    },
    methods: {

        redirectToWebsite(siteName) {
            switch (siteName) {
                case 'instagram':
                    let url = 'https://www.instagram.com/nossomundopetbh/';
                    window.open(url, '_blank');
                    break;
                case 'whatsapp':
                    break;
            }

        },
        openWhatsApp() {
            const phoneNumber = '5531999305569'; // Replace with your phone number
            const message = ''; // Replace with your desired message
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        },
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
        },
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
    },
    created (){
        if(this.screenWidth >= 1000){
            this.iconSize = 'x-large'
            this.colsSize = 2;
        }
        else{
            this.iconSize = 'x-small'
            this.colsSize = 3;

        }
    }
}
</script>
<template>

    <v-container fluid class="ma-0 pa-0">
        <v-row class="footer-btns align-center justify-center">
            <v-col :cols="colsSize" class="d-flex flex-column align-center">
                <v-icon icon="mdi-whatsapp" color="white" size="x-large" rounded="xl"></v-icon>
                <h1 class="contact-text">Telefone</h1>
                <v-btn class="contact-btn" variant="outlined" @click="openWhatsApp()">(31) 99930-5569 </v-btn>
            </v-col>
            <v-col :cols="colsSize" class="d-flex flex-column align-center">
                <v-icon icon="mdi-map-marker" color="white" size="x-large" rounded="xl"></v-icon>
                <h1 class="contact-text">Unidade 1 - Santa Tereza</h1>
                <v-btn class="contact-btn" variant="outlined" @click="openLocation('h1')">Rua Jaspe 8 </v-btn>
            </v-col>
            <v-col :cols="colsSize+1" class="d-flex flex-column align-center">
                <v-icon icon="mdi-map-marker" color="white" size="x-large" rounded="xl"></v-icon>
                <h1 class="contact-text">Unidade 2 - Sagrada Família</h1>
                <v-btn class="contact-btn" variant="outlined" @click="openLocation('h2')">Rua João Guelberto filho 1258 </v-btn>
            </v-col>
            <v-col :cols="colsSize" class="d-flex flex-column align-center" v-if="screenWidth >= 1000">
                <v-icon icon="mdi-email" color="white" size="x-large" rounded="xl"></v-icon>
                <h1 class="contact-text">E-Mail</h1>
                <v-btn class="contact-btn" variant="outlined" @click="mudaPagina('form')">Entre em contato </v-btn>
            </v-col>

        </v-row>
        <v-row class="footer-row ma-0 pa-0">
            <v-col cols="16" class="d-flex flex-column align-center justify-center">
                <h1 class="info-text">Unidade 1 : Rua Jaspe 8 - Santa tereza , Unidade 2 : Rua João guelberto filho 1258 -
                    Sagrada Família | BH - MG </h1>
                <h2 class="sub-text">Nosso Mundo Pet 2025 | Todos os Direitos Reservados | Desenvolvido por tms.dev</h2>
                <div class="icons d-flex flex-row align-center justify-center g-10">
                    <v-icon icon="mdi-instagram" :size="iconSize" class="footer-icon"
                        @click="redirectToWebsite('instagram')"></v-icon>
                    <v-icon icon="mdi-whatsapp" :size="iconSize" class="footer-icon" @click="openWhatsApp()"></v-icon>
                </div>
            </v-col>
        </v-row>
    </v-container>

</template>
<style scoped>
.footer-btns {
    height: 21vh;
    background-color: #f3981f;
    gap: 1vw;
}

.contact-text {
    font-size: 1.45rem;
    font-family: 'Urbanist-Regular';
    font-weight: 600;
    margin-top: 0.3vh;
    color: #FFF;
}

.contact-btn {
    font-family: 'Urbanist-Regular';
    color: #FFF;
    font-weight: bold;
    margin-top: 0.6vh;
    font-size: 0.9rem;
}

.footer-row {
    height: 20vh;
    background-color: #f28900;
}

.info-text {
    font-size: 1.35rem;
    color: #FFF;
    font-family: 'Urbanist-Regular';

}

.sub-text {
    font-size: 1.2rem;
    margin-top: 1vh;
    color: #FFF;
    font-family: 'Urbanist-Regular';

}

.icons {
    margin-top: 1vh;
    gap: 1vh;
}

.footer-icon {
    cursor: pointer;
    transition: color 0.3s ease-in !important;
    color: #FFF;

}

.footer-icon:hover {
    color: #40469e;
}

@media (max-width: 1600px) {
  .contact-text{
    font-size: 0.9rem;
  }
  .contact-btn{
    font-size: 0.7rem;
    width: auto;
    height: 4vh;
  }

  .info-text{
    font-size: 1rem;
  }

  .sub-text{
    font-size: 0.8rem;
    margin-top: 1vh !important;
  }
  
}

@media (max-width: 800px) {
  .contact-text{
    font-size: 0.4rem;
  }
  .contact-btn{
    font-size: 0.4rem;
    width: auto;
    height: 4vh;
  }

  .footer-btns{
    height: 17vh;
  }

  .footer-row{
    height: 15vh !important;
  }

  .info-text{
    font-size: 0.7rem;
    text-align: center !important;

  }

  .sub-text{
    font-size: 0.5rem;
    margin-top: 1vh !important;
  }


  
}

</style>