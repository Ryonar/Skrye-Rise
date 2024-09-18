<template>
  <div id="app">
    <h1> Fetch data with API</h1>
    <CardList />
  </div>

  <CardList :listItems="CardList"/>
</template>

<script>
import CardList from './components/CardList.vue'

const cardList = [{Id:1, value:"Card ID"},
                  {Id:2, value:"Card Name"},
                  {Id:3, value:"Card Set"},
                  {Id:4, value:"Card Rarity"}
]
console.Log(cardList);
export default {
  name: 'App',
  components: {
    CardList
  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
