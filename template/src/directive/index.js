import Vue from 'vue'
import store from '@/store'

const mylazy = Vue.directive('mylazy',{
    inserted (el, binding) {
        el.setAttribute('id',`${binding.value.parentIndex}-${binding.value.cherenIndex}`);
        el.setAttribute('data-url',binding.value.url || '');
        store.commit("menu/UPDATE_IMGPOS", [
            `${binding.value.parentIndex}-${binding.value.cherenIndex}`,
            el.parentNode.offsetTop
        ]);
    }
})
export { mylazy }