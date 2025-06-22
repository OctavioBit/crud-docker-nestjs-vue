import { ref } from 'vue'

const show = ref(false)
const message = ref('')
const color = ref('');
const icon = ref('');

export function useNotification() {

    function showSuccess(msg) {
        message.value = msg;
        show.value = true;
        color.value = 'green';
        icon.value = 'mdi-check-circle'
    }

    function showError(msg) {
        message.value = msg;
        show.value = true;
        color.value = 'red';
        icon.value = 'mdi-alert-circle'
    }

    function showWarning(msg) {
        message.value = msg;
        show.value = true;
        color.value = 'orange';
        icon.value = 'mdi-information'
    }

    return {
        show,
        message,
        showSuccess,
        showError,
        showWarning,
        color,
        icon
    }
}
