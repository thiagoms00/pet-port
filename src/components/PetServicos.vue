<script>

import banhoTosa from '../assets/imgs/banho-e-tosa.jpg';
import creche from '../assets/imgs/creche1.jpg';
import festa from '../assets/imgs/festa-aniversario.jpg';
import hotelCaes from '../assets/imgs/hotelzinho.jpg';
import hotelGatos from '../assets/imgs/hotelzinho-gatos.jpg';


export default {
    data() {
        return {
            services : [

                {
                    name : 'Banho e Tosa',
                    type: 'Cães e Gatos',
                    location : 'Rua Jaspe 8 | Santa tereza',
                    location2 : 'Rua João Guelberto Filho 1258 | Sagrada familia',
                    link: 'banho',
                    srcImg: banhoTosa,
                }

                ,
                {
                    name : 'Creche',
                    type: 'Cães',
                    location : 'Rua Jaspe 8 | Santa tereza',
                    location2 : 'Rua João Guelberto Filho 1258 | Sagrada familia',
                    link: 'creche',
                    srcImg: creche,
                },

                {
                    name : 'Festa de Anivesário',
                    type: 'Cães',
                    location : 'Rua João Guelberto Filho 1258 | Sagrada familia',
                    location2 : 'n/a',
                    link: 'festa',
                    srcImg: festa,
                },

                {
                    name : 'Hotelzinho',
                    type: 'Cães',
                    location : 'Rua Jaspe 8 | Santa tereza',
                    location2 : 'Rua João Guelberto Filho 1258 | Sagrada familia',
                    link: 'hotelCaes',
                    srcImg: hotelCaes,
                },

                {
                    name : 'Hotelzinho',
                    type: 'Gatos',
                    location : 'Rua Jaspe 8 | Santa tereza',
                    location2 : 'n/a',
                    link: 'hotelGatos',
                    srcImg: hotelGatos,
                },

                

            ],
        }
    },

    created (){

    },

    methods : {
        mudaPagina (location){
            switch(location){
                case 'banho' :
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

            }
        }
    },
}
</script>
<template>
      <v-row class="nav-row ma-0 pa-0">
            <MainNav></MainNav>
      </v-row>
    <v-container fluid class="pa-0 ma-0 mt-8">

        <v-row class="first-row mx-auto align-center">
            <div class="img-wrap">
                <v-img :width="120" aspect-ratio="16/9" cover class="img-logo"
                    src="../assets/imgs/pata-logo.png">
                </v-img>
            </div>
            <h1 class="text-services ml-5">Serviços</h1>
        </v-row>

        <v-row class="cards-row mx-auto">
            <div v-for="(item,index) in services"class="custom-card d-flex flex-column elevation-4" hover>
                <v-img :width="480" :height="330" aspect-ratio="16/9" cover class="img-card"
                    :src="item.srcImg">
                </v-img>
                <h1 class="title-service mt-5 ml-8">{{ item.name }}</h1>
                <h3 class="type-service ml-8">{{item.type}}</h3>

                <h3 class="location-service ml-8">{{item.location}}</h3>
                <h3 v-if="item.location2 == 'n/a' " :style="{visibility: 'hidden'}" class="location-service mt-1 ml-8">{{item.location2}}</h3>
                <h3 v-else class="location-service mt-1 ml-8">{{item.location2}}</h3>

                <v-btn class="card-btn mt-10 mb-8 mx-auto" @click="mudaPagina(item.link)">Agendar</v-btn>
            </div>
        </v-row>    

    </v-container>
</template>
<style scoped>

.first-row{
    width: 100%;
    border-radius: 1vh;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #40469e35;
    padding-top: 5vh;

}


.text-services {
    font-family: 'Poppins-Regular';
    color: #f3981f;
    font-size: 4rem;
    margin-right: 6vw;
}

.cards-row{
    margin-left: 10vw;
    display: flex;
    gap: 4vw;
    width: 100%;
    background-color: #faf9f9;
    align-items: center;
    justify-content: center;
    padding:5vh 0vh;

}

.custom-card{
    padding: 0vw;
    border-radius: 1vw;
}

.img-card{
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    overflow: hidden;

}

.title-service{
    font-family: 'Poppins-Regular';
    color: #40469e;
    font-size: 2.2rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.type-service{
    font-family: 'Poppins-Regular';
    color: #3c3c3c;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.location-service{
    font-family: 'Poppins-Light';
    color: #3c3c3c;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.1rem;
}

.card-btn{
    background-color: #f3981f;
    color: #faf9f9;
    font-size: 1.1rem;
    border-radius: 0.4vh;
    font-family: 'Roboto-Regular';
    height: 4.8vh;
    width: 15vw;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

</style>