<template>
    <div>
        <table border="1px">
        <tr>
            <td>Name</td>
            <td>Set</td>
            <td>Rarity</td>
        </tr>
        <tr v-for="item in list" v-bind:key="item.id">
            <td>{{ item.card_name }}</td>
            <td>{{ item.set_name }}</td>
            <td>{{ item.rarity }}</td>
        </tr>
        </table>
    </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios) 

export default {
    name: "CardList",
    data(){
        return {Name:'Card'}
    },
    mounted(){
        Vue.axios.get('https://api.scryfall.com')
        .then((resp)=>{
            this.list=resp.data.data
            console.warn(resp.data.data)
        })
    }
};


</script>