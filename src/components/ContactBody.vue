<script>
import emailjs from 'emailjs-com';


export default {
    data() {
        return {

            nameModel: '',
            emailModel: '',
            messageModel: '',

            dialogMessage: '',
            dialogModel: false,


            firstName: '',
            firstNameRules: [
                value => {
                    if (value?.length >= 3) return true

                    return ''
                },
            ],
            lastName: '123',
            lastNameRules: [
                value => {
                    if (/[^0-9]/.test(value)) return true

                    return ''
                },
            ],
            selectSubjectModel: null,
            items: [
                'Orçamento',
                'Dúvida',
                'Sugestão',
                'Reclamação',
                'Outro',
            ],

        }
    },
    methods: {
        sendEmail() {
            if (this.nameModel.length >= 3 && this.selectSubjectModel.length >= 3 && this.emailModel.length >= 3 && this.messageModel.length >= 3) {
                const templateParams = {

                    from_name: this.nameModel,
                    from_subject: this.selectSubjectModel,
                    from_email: this.emailModel,
                    message: this.messageModel,
                };

                emailjs.send('service_q6oltav', 'template_zsuyfjb', templateParams, 'Deg-E39Bn_lTz03fT')
                    .then((response) => {
                        console.log('Email sent!', response.status, response.text);
                        this.dialogMessage = 'Sua mensagem foi enviada com sucesso!'
                        this.dialogModel = true;
                    })
                    .catch((error) => {
                        console.error('Failed to send email:', error);
                        this.dialogMessage = 'Um erro ocorreu!'
                        this.dialogModel = true;
                    });


            }





        },
    }
}



</script>
<template>
    <v-container fluid class="px-15">
        <v-row cols="16" class="d-flex contact-row elevation-2 justify-center">
            <v-col cols="5" class="contact-col left-col">
                <h1 class="text-fale">Fale Conosco</h1>
                <div class="custom-divider"></div>
                <h3 class="text-desc">Caso esteja interessado nos nossos serviços, preencha o formulário ao lado que
                    vamos entrar em contato com você assim que possível !
                </h3>

                <v-row class="cards-row align-center justify-center">

                    <v-card class="unidade-card py-5" :width="300" hover>
                        <h4 class="custom-title"> Unidade 1</h4>
                        <h4 class="custom-sub"> Rua Jaspe 8</h4>
                        <h4 class="custom-text"> Santa tereza | BH-MG</h4>

                        <h4 class="ml-2 card-number">(31) 99930-5569</h4>
                    </v-card>

                    <v-card class="unidade-card py-5" :width="300" hover>
                        <h4 class="custom-title"> Unidade 2</h4>
                        <h4 class="custom-sub"> Rua João guelberto filho 1258</h4>
                        <h4 class="custom-text"> Sagrada Família | BH-MG</h4>
                        <h4 class="ml-2 card-number">(31) 9388-0850</h4>
                    </v-card>

                </v-row>

            </v-col>
            <v-col cols="6" class="contact-col right-col d-flex align-center justify-center">
                <v-sheet class="mx-auto" width="600">
                    <div class="custom-form">

                        <h3 class="label-form">Nome: </h3>
                        <div class="field-wrapper">
                            <v-text-field label="" variant="outlined" density="compact" v-model="nameModel" :height="100"
                                :rules="[v => !!v || 'Campo Obrigatório']" class="message-field"></v-text-field>
                        </div>
                        
                        <h3 class="label-form">E-mail: </h3>
                        <div class="field-wrapper"></div>
                        <v-text-field label="" variant="outlined" density="compact" v-model="emailModel"
                            :rules="[v => !!v || 'Campo Obrigatório']" class="message-field"></v-text-field>
                        <h3 class="label-form">Assunto: </h3>
                        <div class="field-wrapper"></div>
                        <v-select v-model="selectSubjectModel" :items="items" density="compact"
                            :rules="[v => !!v || 'Campo Obrigatório']" label="" variant="outlined" class="message-field"
                            required></v-select>
                        <h3 class="label-form">Sua mensagem:</h3>
                        <div class="field-area-wrapper"></div>
                        <v-textarea label="" class="message-field" variant="outlined" density="compact"
                            v-model="messageModel"></v-textarea>

                        <v-btn class="mt-5 submit-button mx-auto" type="submit" block
                            @click="sendEmail()">Enviar</v-btn>

                    </div>



                </v-sheet>
            </v-col>
        </v-row>

        <v-dialog v-model="dialogModel">
            <v-container fluid :width="550"
                class="dialog-container  d-flex flex-column align-center justify-center pa-0">
                <v-toolbar density="compact" color="#f3981f">
                    <v-icon icon="mdi-paw ml-3" color="#fff"></v-icon>
                    <v-toolbar-title class="toolbar-title ml-2">Nosso Mundo Pet</v-toolbar-title>

                </v-toolbar>
                <h1 class="dialog-message mt-5">{{ dialogMessage }}</h1>
                <v-btn class="dialog-button mt-6 mb-6" @click="dialogModel = false">Fechar</v-btn>
            </v-container>

        </v-dialog>



    </v-container>


</template>

<style scoped>
.contact-row {
    flex-direction: row;
    gap: 1vw;
    border: 1px solid rgb(129, 129, 129);
    padding-top: 5vh;
    padding-bottom: 5vh;


}

.left-col {
    margin-left: 1vw;
}

.right-col {
    border-radius: 2px;
}

.text-fale {
    font-family: 'Poppins-Regular';
    font-weight: 600;
    font-size: 3.5rem;
    margin-top: 1vh;
    margin-left: 8vw;
    letter-spacing: 0.1vw;
}

.text-desc {
    font-size: 2.5rem;
    font-family: 'Roboto-Regular';

}

.cards-row {
    margin-top: 5vh;
    gap: 2vw;
}


.unidade-card {
    font-family: 'Urbanist-Regular';
    border: 2px solid #40469e;
}

.custom-title {
    font-size: 1.9rem !important;
    color: #40469e;

}

.custom-sub {
    font-size: 1.2rem !important;
    color: rgb(48, 48, 48);
    text-align: center;

}

.custom-text {
    font-size: 1.2rem !important;
    color: rgb(48, 48, 48);
    text-align: center;

}

.unidade-card h4 {
    text-align: center;
}

.card-number {
    font-size: 1.2rem;
}

.custom-divider {
    border-bottom: 1px solid rgba(82, 82, 82, 0.403);
    width: 20%;
    margin-left: 13vw;
    margin-top: 1.5vh;
}

.text-desc {
    font-family: 'Urbanist-Regular';
    font-weight: 300;
    font-size: 1.7rem;
    width: 95%;
    color: black;
    text-align: justify;
    margin-top: 6vh;
    margin-left: 1.2vw;

}



.label-form {
    font-family: 'Poppins-Regular';
    font-size: 1.35rem;
    margin-left: 0.05vw;
}

.message-field {
    margin-top: 1.3vh;
}

.submit-button {
    background-color: #f3981f;
    color: #FFF;
    height: 4.5vh !important;
    width: 14vw !important;
    min-width: 1vw !important;
    font-size: 0.8rem !important;
    font-weight: 600;
    font-family: 'Roboto-Regular';
}

.dialog-container {
    background-color: #fff;
}

.toolbar-title {
    color: #FFF;
    font-family: 'Poppins-Regular';
    font-size: 1.35rem;
}

.dialog-message {
    font-size: 1.6rem;
    font-family: 'Urbanist-Regular';

}

.dialog-button {
    width: 50%;
    font-size: 1rem;
    font-family: 'Poppins-Regular';
    background-color: #f3981f;
    color: #FFF;
}

@media (max-width: 1600px) {

    .text-fale {
        font-size: 2.2rem !important;
    }

    .text-desc {
        font-size: 1.1rem !important;

    }

    .unidade-card {
        padding: 2vh !important;
        width: 16vw !important;
    }

    .custom-title {
        font-size: 1.15rem !important;
    }

    .custom-sub {
        font-size: 0.7rem !important;

    }

    .custom-text {
        font-size: 0.7rem !important;

    }

    .card-number {
        font-size: 0.9rem;

    }

    .label-form {
        font-size: 1rem !important;
    }

    

    .message-field{
        max-height: 100% !important;
        max-width: 100% !important;

    }
}
</style>