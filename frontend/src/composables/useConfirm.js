import { ref } from 'vue'

const confirmVisible = ref(false);
const title = ref(false);
const message = ref('');
const onClickOKHandler = ref(null);

export function useConfirm() {

    const openConfirm = function (confirmTitle,confirmMessage, okHandler){
        onClickOKHandler.value = okHandler;
        message.value = confirmMessage;
        title.value = confirmTitle;
        confirmVisible.value = true;
    }
    
    return {
        confirmVisible,
        title,
        message,
        openConfirm, 
        onClickOKHandler
    }
}
