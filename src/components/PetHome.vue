<script>
import Contact from './Contact.vue';
import FooterHome from './FooterHome.vue';
import HomeCenter from './HomeCenter.vue';
import MainNav from './MainNav.vue';
import ScrollTitle from './ScrollTitle.vue';


export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <v-container fluid class="main-container pa-0">
        <v-row class="pa-0 ma-0">
            <v-col cols="16 pa-0 ma-0">
               
                <HomeCenter class="home-center" />
                <ScrollTitle class="scroll-title"></ScrollTitle>
              
                <Contact></Contact>
                <FooterHome></FooterHome>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
@font-face {
    font-family: 'PT-Sans-Regular';
    src: url(../assets/fonts/PT-sans/PTSans-Regular.ttf);
}

@font-face {
    font-family: 'Quicksand';
    src: url(../assets/fonts/QuickSand/Quicksand-VariableFont_wght.ttf)
}


@font-face {
    font-family: 'Poppins-Regular';
    src: url(../assets/fonts/Poppins/Poppins-Regular.ttf)
}

@font-face {
    font-family: 'Poppins-Light';
    src: url(../assets/fonts/Poppins/Poppins-Light.ttf)
}

@font-face {
    font-family: 'Poppins-Black';
    src: url(../assets/fonts/Poppins/Poppins-Black.ttf)
}

@font-face {
    font-family: 'Poppins-Bold';
    src: url(../assets/fonts/Poppins/Poppins-Bold.ttf)
}

@font-face {
    font-family: 'Poppins-Medium';
    src: url(../assets/fonts/Poppins/Poppins-Medium.ttf)
}

@font-face {
    font-family: 'Urbanist-Regular';
    src: url(../assets/fonts/Urbanist/static/Urbanist-Regular.ttf);
}

@font-face {
    font-family: 'Urbanist-SemiBold';
    src: url(../assets/fonts/Urbanist/static/Urbanist-SemiBold.ttf);
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

@font-face {
    font-family: 'Raleway-Medium';
    src: url(../assets/fonts/Raleway/static/Raleway-Medium.ttf);
}

@font-face {
    font-family: 'Raleway-Light-Ita';
    src: url(../assets/fonts/Raleway/static/Raleway-LightItalic.ttf);
}


@font-face {
    font-family: 'Open-Sans-Regular';
    src: url(../assets/fonts/OpenSans/OpenSans-Regular.ttf);
}

@font-face {
    font-family: 'Roboto-Regular';
    src: url(../assets/fonts/Roboto/Roboto-Regular.ttf);
}

@font-face {
    font-family: 'Roboto-Light';
    src: url(../assets/fonts/Roboto/Roboto-Light.ttf);
}

.scroll-title {
    height: 11vh !important;
}

.services {
    margin-top: 0vh;
}

h1 {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

p {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

button {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h2 {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* Transition Effect */
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.5s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateX(-50%);
}

.fade-slide-leave-from,
.fade-slide-enter-to {
    opacity: 1;
    transform: translateX(0);
}

</style>