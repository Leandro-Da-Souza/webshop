<template>
    <div id="app">
        <router-view msg="Hello" Produ="data" ></router-view>


    </div>
</template>

<script>
export default {
    name: 'App',
    components: {
    },
    data() {
        return {
            data: [
                 {id:1 , name: 'Coffee',  img: 'https://placeimg.com/640/480/any',price: '108' }, 
                 {id:2 , name: 'Baby Yoda',  img: 'https://placeimg.com/640/480/any',price: '108' }, 
                 {id:3 , name: 'Bulbasaur',  img: 'https://placeimg.com/640/480/any',price: '108' }, 
            ]
        };
    }
};
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
