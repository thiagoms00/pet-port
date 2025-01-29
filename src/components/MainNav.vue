<script>



export default {
    data() {
        return {

            projectsName: [
                { title: 'Projeto 1' },
                { title: 'Projeto 2' },
            ],
        }
    },

    methods: {
        mudaPage(pageName) {
            switch (pageName) {
                case 'home':
                    this.$router.push('/home');
                    break;
                case 'contato':
                    this.$router.push('/contato');
                    break;
                case 'about':
                    this.$router.push('/fale-conosco');
                    break;
                default:
                    this.$router.push('/home');
                    break;
                case 'services':
                    this.$router.push('/services');
                    break;
                case 'grife':
                    this.$router.push('/grife');
                    break;

            }
        },
    }
}

</script>

<template>

    <v-container fluid class="toolbar-area pa-0 ma-0">
        <v-row class="pa-0 ma-0">
            <v-col cols="16 ma-0 pa-0">
                <v-toolbar density="comfortable" class="main-toolbar d-flex flex-row align-center justify-between">

                    <div class="buttons d-flex flex-row align-center">

                        <!-- <v-btn class="tool-btn about-btn" @click="mudaPage('home')">Home</v-btn> -->


                        <h1 class="nav-button" @click="mudaPage('home')"> Home</h1>
                        <h1 class="nav-button" @click="mudaPage('about')"> Quem somos</h1>
                        <h1 class="nav-button" @click="mudaPage('services')"> Serviços </h1>
                        <h1 class="nav-button" @click="mudaPage('grife')"> Grife</h1>
                        <h1 class="nav-button" @click="mudaPage('contato')"> Fale conosco</h1>

                    

                    </div>

                </v-toolbar>

            </v-col>

        </v-row>
    </v-container>

</template>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Urbanist-Regular'

}


/* Área da toolbar */
.toolbar-area {
    width: 100%;
    height: 8.1vh;
    padding: 0 !important;
    border-radius: 0.2vh;
}

.main-toolbar {
    width: 100%;
    height: 9.1vh;
    background-color: transparent;
}

.logo-nav {
    width: 4vw;
    height: auto;
    margin-left: 3vw;
}

.text-logo {
    color: #353b88;
    font-family: 'Raleway-Light-Ita';
    font-weight: 300;
    font-size: 2.2rem;
    margin-top: 1vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.nav-button {
    font-family: 'Raleway-Regular';
    font-size: 1.3rem;
    color: #353b88;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    cursor: pointer;
    transition: color 0.2s ease;
}

.nav-button:hover {
    color: #f2b15d;
}

.tool-btn {
    font-size: 1.2rem;
    font-family: 'Poppins-Regular';
    color: #353b88;
    font-weight: 600;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.buttons {
    margin-left: auto;
    margin-right: 5vw;
    gap: 2vw;
}

.projects-title {
    font-family: 'Raleway-SemiBold';
    font-size: 1.1rem;

}

@media (max-width: 1366px) {
    .nav-button{
        font-size: 0.85rem;
    }
}

@media (max-width: 1600) {
    .nav-button{
        font-size: 0.95rem;
    }
}


</style>