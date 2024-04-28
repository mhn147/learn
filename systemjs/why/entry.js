// import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { createApp, ref } from 'vue';

createApp({
    setup() {
        const age = ref("4.503 billion years");
        return {
            age
        }
    }
}).mount("#app");