<template>
    <div class="text-center pa-4">
        <v-dialog v-model="confirmVisible" max-width="400" persistent>

            <v-card prepend-icon="mdi-help"
                :text="message"
                :title="title">
                <template v-slot:actions>
                    <v-spacer></v-spacer>

                    <v-btn @click="onClickOK">
                        OK
                    </v-btn>

                    <v-btn @click="confirmVisible = false">
                        Cancel
                    </v-btn>
                </template>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>

import { useConfirm } from '@/composables/useConfirm'

const { title, message, onClickOKHandler, confirmVisible } = useConfirm();

const onClickOK = function(){
    onClickOKHandler.value();
    confirmVisible.value = false;
}

</script>