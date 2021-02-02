import { createApp } from 'vue';
import App from './App.vue';

import PrimeVue from 'primevue/config';

//importação dos componentes
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

//importação dos css
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

//Registra o uso do primevue
app.use(PrimeVue);

//Registra os componentes
app.component('Button', Button);
app.component('InputText', InputText);

app.mount('#app');
