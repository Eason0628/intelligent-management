<template>
    <p>
        {{ $t("login.userLogin") }}
    </p>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
    name: 'Login',
    setup() {
        const state = reactive({

        })
        return {
            ...toRefs(state),
        }
    }
})
</script>
