<script>
import car1 from '../assets/imgs/car1.jpg';

export default {
    data() {
        return {

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
    }
}
</script>
<template>

    <v-container fluid class="ma-0 pa-0">
        <v-row class="footer-btns align-center justify-center">
            <v-col cols="2" class="d-flex flex-column align-center">
                <v-icon icon="mdi-whatsapp" color="white" size="x-large" rounded="xl"></v-icon>
                <h1 class="contact-text">Telefone</h1>
                <v-btn class="contact-btn" variant="outlined" @click="openWhatsApp()">(31) 99930-5569 </v-btn>
            </v-col>
            <v-col cols="2" class="d-flex flex-column align-center">
                <v-icon icon="mdi-map-marker" color="white" size="x-large" rounded="xl"></v-icon>
                <h1 class="contact-text">Unidade 1 - Santa Tereza</h1>
                <v-btn class="contact-btn" variant="outlined" @click="openLocation('h1')">Rua Jaspe 8 | BH-MG </v-btn>
            </v-col>
            <v-col cols="2" class="d-flex flex-column align-center">
                <v-icon icon="mdi-map-marker" color="white" size="x-large" rounded="xl"></v-icon>
                <h1 class="contact-text">Unidade 2 - Sagrada Família</h1>
                <v-btn class="contact-btn" variant="outlined" @click="openLocation('h2')">Rua João guelberto filho 1258 </v-btn>
            </v-col>
            <v-col cols="2" class="d-flex flex-column align-center">
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
                    <v-icon icon="mdi-instagram" size="x-large" class="footer-icon"
                        @click="redirectToWebsite('instagram')"></v-icon>
                    <v-icon icon="mdi-whatsapp" size="x-large" class="footer-icon" @click="openWhatsApp()"></v-icon>
                </div>
            </v-col>
        </v-row>
    </v-container>

</template>
<style scoped>
.footer-btns {
    height: 20vh;
    background-color: #f3981f;
    gap: 3vw;
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
</style>