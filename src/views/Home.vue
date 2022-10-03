<template>
  <section class="hero" :style="{ backgroundImage: 'url(' + hero + ')' }">
    <h4>
        trade-in-offer
    </h4>
    <h2>Super value deals</h2>
    <h1>On all products</h1>
    <p>Save more with coupons & up to 70% off!</p>
    <button :style="{ backgroundImage: 'url(' + button + ')' }">Shop now!</button>

  </section>
</template>

<script>
export default {
    data(){
        return{
            hero:require("../assets/UI/hero4.png"),
            button:require("../assets/UI/button.png")
        }
    }
}
</script> 

<style scoped>

.hero{
    height: 90vh;
    width: 100%;
    background-size: cover;
    background-position: top 25% right 0;
    padding: 0 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    z-index: -1;
}

.hero h4{
    padding-bottom: 15px;
}

.hero h1{
    color: #088178;
}

.hero button{
    background: none;
    background-size:cover ;
    width: 227px;
    height: 49px;
    border: none;
    font-size: 18px;
    font-weight: 700;
    color: #088178;
    cursor: pointer;
}

</style>

