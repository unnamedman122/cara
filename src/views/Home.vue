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
    <section class="features section-p1">
        <div class="socket_main" v-for="(Arra) in titles" :key="Arra">
            <div class="socket" v-for="(title,index) in Arra" :key="index">
                <img :src="images[index]" alt="">
                <h6>{{title}}</h6>
            </div>
        </div>
    </section>
    <section class="products section-p1">
        <h2>Features Products</h2>
        <p>Summer collection New Model Design </p>
        <div class="pros-container">
            <product-card/>
        </div>
    </section>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

export default {
    name:"home",
    components: { ProductCard },
    data() {
        return {
            hero: require("../assets/UI/hero4.png"),
            button: require("../assets/UI/button.png"),
            images: this.importAll(require.context('../assets/UI/features', false, /\.(png|jpe?g|svg)$/)),
            titles: { 1:{
                "f1.png":"Vadym",
                "f2.png":"Gay",
                "f3.png":"daun"
            },
            2:{
                "f4.png":"geni",
                "f5.png":"lemur",
                "f6.png":"fietko"
            }
            }
        }
    },
    methods: {
        importAll(r) {
            let images = {};
            r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
            return images;
        }
    }
    // provide:{
    //     arraySeparated(){
    //         const separated={

    //         }
    //     }
    // }
}
</script> 

<style src="../assets/styles/style.css">
</style>

