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
</template>

<script>
export default {
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

<style scoped>
.hero {
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

.hero h4 {
    padding-bottom: 15px;
}

.hero h1 {
    color: #088178;
}

.hero button {
    background: none;
    background-size: cover;
    width: 227px;
    height: 49px;
    border: none;
    font-size: 18px;
    font-weight: 700;
    color: #088178;
    cursor: pointer;
}
.socket_main{
display: flex;
justify-content: space-between;

}

.socket{
    width: 180px;
    text-align: center;
    padding: 25px 15px;
    box-shadow:-4px 4px 8px 0px rgba(1, 1, 2, 0.06);
    margin: 8px 17px 9px 7px;
    border: 1px solid #cce7d0;
    border-radius: 4px;
    margin: 15px;

}

.socket h6{
    text-align: center;
    padding: 5px 6px;
    line-height: 1;
    border-radius:4px;
    color: #088178;
    background-color: #fddde4;
    margin:15px 0;
}

.socket img{
    width: 100%;
    margin-bottom: 10px;
}

.features
{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
} 

</style>

