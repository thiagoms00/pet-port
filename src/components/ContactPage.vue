<script>
import Contact from './Contact.vue';
import ContactBody from './ContactBody.vue';
import FooterAlt from './FooterAlt.vue';
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
                <MainNav/>
                <ContactBody class="contact-body"></ContactBody>
                <FooterHome class="footer-home"></FooterHome>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>




.contact-body{
    margin-top: 4vh;
}

h1{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

p{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

button{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h2{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.footer-home{
    margin-top: 3.1vh !important;
}

</style>