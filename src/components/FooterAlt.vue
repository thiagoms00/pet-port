<script>
import car1 from '../assets/imgs/car1.jpg';

export default {
    data (){
        return {

        }
    }
}
</script>
<template>

<v-container fluid class="ma-0 pa-0">
    <v-row class="footer-row ma-0 pa-0">
        <v-col cols="16" class="d-flex flex-column align-center justify-center">
            <h1 class="info-text">Avenida Lago norte, 9012 - Centro, São Paulo, SP | Tel: (11) 98765-4321 | Fax: (11) 98765-4322</h1>
            <h2 class="sub-text">Copyright 2024 Atlas Engenharia, Ltda. Site desenvolvido por tmsDev.com</h2>
            <div class="icons d-flex flex-row align-center justify-center g-10">
                <v-icon  icon="mdi-facebook" size="x-large" class="footer-icon"></v-icon>
                <v-icon icon="mdi-instagram" size="x-large" class="footer-icon"></v-icon>
                <v-icon icon="mdi-whatsapp" size="x-large" class="footer-icon"></v-icon> 
            </div>
        </v-col>
    </v-row>
        </v-container>

</template>
<style scoped>

.footer-row{
    height: 18vh;
    background-color: #1E1E24;
}

.info-text{
    font-size: 1.4rem;
    color: #e6e2e2;
}

.sub-text{
    font-size: 1.1rem;
    margin-top: 1vh;
    color: #e6e2e2;
}

.icons{
    margin-top: 1vh;
    gap: 1vh;
    color: #fff;

}

.footer-icon{
    cursor: pointer;
    transition: color 0.3s ease-in !important;
}

.footer-icon:hover{
    color: #40798C;
}


</style>