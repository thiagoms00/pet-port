<script>
export default {
    data() {
        return {
            sizeWidth : window.innerWidth,
        }
    },
    methods: {
        redirectToWebsite() {
            // Replace 'https://example.com' with the desired URL
            let url = 'https://www.instagram.com/nossomundopetbh/';
            window.open(url, '_blank');
        }
    }
}
</script>
<template>
    <v-container fluid class="pa-0 ma-0 main-container">
        <v-row class="pa-0 ma-0 main-row"></v-row>
        <v-col cols=16 class="pa-0 ma-0">
            <div class="text-area d-flex align-center justify-center">
                <h1 class="scroll-text">Instagram</h1>
                <div class="button-div" >
                    <v-btn v-if="sizeWidth <= 1000" rounded="xl" size="x-large" block variant="outlined" class="follow-btn pa-4"
                         @click="redirectToWebsite">Nos siga no instagram</v-btn>

                      <v-btn v-else rounded="xl" size="x-large" block variant="outlined" class="follow-btn pa-4"
                      append-icon="mdi-instagram"   @click="redirectToWebsite">Nos siga no instagram</v-btn>
                </div>


            </div>
        </v-col>
    </v-container>
</template>
<style scoped>
.arrow-btn {
    border: 0.18rem solid black;
}

.text-area {
    background-color: #f3981f;
    height: 11vh !important;
}

.scroll-text {
    font-family: 'Poppins-Regular';
    font-weight: bolder;
    font-size: 2.2rem;
    color: #F7EBE8;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.follow-btn {
    width: auto;
    padding-left: 1.2vw !important;
    padding-right: 1.2vw !important;

    font-family: 'Poppins-Regular';
    font-size: 1.1rem;
    font-weight: 600;
    color: #F7EBE8;
    border: 0.15rem solid rgb(207, 207, 207);
}

.button-div {
    margin-left: 45vw;
    width: auto;
}

@media (max-width: 1600px) {
    .scroll-text {
        font-size: 1.7rem;
    }

    .follow-btn{
        height: 5vh  !important;
        font-size: 0.7rem;
    }

}


@media (max-width: 800px) {
    .scroll-text {
        font-size: 1rem;
    }


    .text-area{
        width: 100% !important;
    }

    .main-row{
        width: 100% !important;
    }

    .button-div{
        margin-left: 20vw !important;
    }

    .follow-btn{
        width: auto;
        padding: 0 4vw !important;
        height: 5vh  !important;
        font-size: 0.55rem;
    }

}
</style>