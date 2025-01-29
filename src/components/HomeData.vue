<script>
import MainNav from './MainNav.vue';

export default {
    data() {
        return {
            helloText: 'Atlas',

        }
    }
}

</script>

<template>
    <div class="main-area">
        <!-- Área da toolbar -->
        <MainNav />
        <!-- Área do texto de apreesntação -->

        <div class="text-area d-flex flex-column">
            <h1 class="text-h1">Atlas </h1>
            <h1 class="text-h1 second-h1"> Engenharia </h1>

        </div>
        
        <!-- Área das informações sobre tecnologias e projetos -->

        <v-row>
            <v-col class="servicos-column">
                <div class="buildText-div d-flex flex-row align-center justify-center">
                    <h1 class="divider-text">Construimos o seu sonho</h1>
                </div>
                <div class="servicos-div">
                    <h1 class="text-h2 text-serv">Serviços Prestados</h1>

                </div>
                
            </v-col>
        </v-row>


    </div>
    

</template>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Urbanist-Regular'

}

@font-face {
    font-family: 'Urbanist-Regular';
    src: url(../assets/fonts/Urbanist/static/Urbanist-Regular.ttf);
}

@font-face {
    font-family: 'Urbanist-Light-Ita';
    src: url(../assets/fonts/Urbanist/static/Urbanist-LightItalic.ttf);
}

@font-face {
    font-family: 'Raleway-Regular';
    src: url(../assets/fonts/Raleway/static/Raleway-Regular.ttf);
}

@font-face {
    font-family: 'Raleway-Light';
    src: url(../assets/fonts/Raleway/static/Raleway-Light.ttf);
}

@font-face {
    font-family: 'Raleway-SemiBold';
    src: url(../assets/fonts/Raleway/static/Raleway-SemiBold.ttf);
}

.main-area {
    width: 100%;
    height: 100%;

}



/* Área do texto de apresentação */

.text-area {
    width: 100%;
    margin-top: 18vh;
    margin-left: 5vw;
}

.text-h1 {
    font-weight: 300;
    font-size: 9rem !important;
    color: #1B1212;
    font-family: 'Urbanist-Light-Ita';
}

.second-h1 {
    margin-left: 5vw;
}

.name-spam {
    color: #1B1212;
    font-style: italic;

}

.full-spam {
    color: #1B1212;
    font-style: italic;
}


/* Área das informações sobre tecnologias e projetos */

.buildText-div {
    width: 100%;
    height: 8vh;
    background-color: #1B1212;
    margin-top: 32.65vh;
}

.divider-text {
    color: aliceblue;
    font-family: 'Raleway-Light';
    font-size: 1.8rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.servicos-column{
    padding: 0 !important;
}

.servicos-div{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(255, 255, 255);
    margin-top: 4vh;
}

</style>