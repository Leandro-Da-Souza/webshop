<template>
    <div>
        <p>{{ msg }}</p>


        <p>  </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            testData: [
                 {id:1 , name: 'Coffee',  img: 'https://placeimg.com/640/480/any',price: '108' }, 
                 {id:2 , name: 'Baby Yoda',  img: 'https://placeimg.com/640/480/any',price: '108' }, 
                 {id:3 , name: 'Bulbasaur',  img: 'https://placeimg.com/640/480/any',price: '108' }, 
            ]
        };
    },
    props: ['msg', 'data']
};
</script>

<style></style>
