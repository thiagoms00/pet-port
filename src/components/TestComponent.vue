<template class="teste">
    <v-container class="main-container ma-0" fluid>
        <v-row no-gutters class="pa-0 main-row">
            <v-col v-for="n in 3" :key="n" cols="16" sm="4" class="main-col">
                <v-sheet class="ma-2 pa-2"> One of three columns </v-sheet>
            </v-col>
        </v-row>
    </v-container>

</template>
<script>
export default {
    data() {

    }
}
</script>
<style scoped>



 .main-row{
    padding: 0 !important;
    margin: 0 !important;
 }

 .main-container{
    border: 1px solid blue;
    width: 100% !important;
    background-color: rgb(72, 72, 72);
 }

.main-col{
    border: 1px solid yellow;
}

</style>