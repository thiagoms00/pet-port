<script>
export default {
    data() {
        return {    
            
        }
    }
}
</script>
<template>
    <v-container fluid class="other-container pa-0 ma-0 mt-12">
        <v-row class="align-center justify-center">
            <h1 class="change-title">Outros Serviços</h1>
        </v-row>

        <v-row class=" services-row align-center justify-center mt-10">
            <div class="img-card d-flex flex-column align-center justify-center elevation-2">
                <v-img :width="220" aspect-ratio="16/9" cover
                    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
                </v-img>
                <h2 class="card-anchor mt-10">Banho e Tosa</h2>
            </div>

            <div class="img-card d-flex flex-column align-center justify-center elevation-2">
                <v-img :width="220" aspect-ratio="16/9" cover
                    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
                </v-img>
                <h2 class="card-anchor mt-10">Banho e Tosa</h2>

            </div>

            <div class="img-card d-flex flex-column align-center justify-center elevation-2">
                <v-img :width="220" aspect-ratio="16/9" cover
                    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
                </v-img>
                <h2 class="card-anchor mt-10">Banho e Tosa</h2>

            </div>

            <div class="img-card d-flex flex-column align-center justify-center elevation-2">
                <v-img :width="220" aspect-ratio="16/9" cover
                    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
                </v-img>
                <h2 class="card-anchor mt-10">Banho e Tosa</h2>

            </div>
        </v-row>
        
        
    </v-container>
</template>
<style scoped>

.other-container{
    border-radius: 5px;
}

.change-title{
    font-family: 'Poppins-Regular';
    color: #40469e;
    font-size: 2.7rem;
}

.services-row{
    gap: 5vw;
}

.img-card{
    border-radius: 10px;
}

.card-anchor{
    font-family: 'Poppins-Regular';
    color: #40469e;

}

</style>