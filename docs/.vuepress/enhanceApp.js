// docs/.vuepress/enhanceApp.js
import RentalCalculator from './components/RentalCalculator.vue';

export default ({ Vue }) => {
  Vue.component('RentalCalculator', RentalCalculator);
};
