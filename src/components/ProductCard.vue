<template>
  <div class="card" v-for="value in products" :key="value">
    <img :src="value.imgSrc" alt="">
    <div class="des">
        <span>{{value.brend}}</span>
        <h5>{{value.title}}</h5>
        <div class="star">
            <font-awesome-icon class="star" icon="fa-star" />
            <font-awesome-icon class="star" icon="fa-star" />
            <font-awesome-icon class="star" icon="fa-star" />
            <font-awesome-icon class="star" icon="fa-star" />
        </div>
        <h4>{{value.price}}</h4>
    </div>
    <a href="#"><font-awesome-icon class="basketIcon" icon="fa-shopping-cart"/></a>
  </div>
</template>

<script>
export default {
    name:"my-shop-card",
    data(){
      return{
        products:[
                {
                    imgSrc:require("../assets/UI/products/f1.jpg"),
                    brend:"adidas",
                    title:"Cartoon Astounaut T-Shirts",
                    price:"78$"
                },
                                {
                    imgSrc:require("../assets/UI/products/f1.jpg"),
                    brend:"adidas",
                    title:"Cartoon Astounaut T-Shirts",
                    price:"78$"
                },
                                {
                    imgSrc:require("../assets/UI/products/f1.jpg"),
                    brend:"adidas",
                    title:"Cartoon Astounaut T-Shirts",
                    price:"78$"
                },
                                {
                    imgSrc:require("../assets/UI/products/f1.jpg"),
                    brend:"adidas",
                    title:"Cartoon Astounaut T-Shirts",
                    price:"78$"
                },
                                {
                    imgSrc:require("../assets/UI/products/f1.jpg"),
                    brend:"adidas",
                    title:"Cartoon Astounaut T-Shirts",
                    price:"78$"
                },
                                {
                    imgSrc:require("../assets/UI/products/f1.jpg"),
                    brend:"adidas",
                    title:"Cartoon Astounaut T-Shirts",
                    price:"78$"
                },
                                {
                    imgSrc:require("../assets/UI/products/f1.jpg"),
                    brend:"adidas",
                    title:"Cartoon Astounaut T-Shirts",
                    price:"78$"
                },
                                {
                    imgSrc:require("../assets/UI/products/f1.jpg"),
                    brend:"adidas",
                    title:"Cartoon Astounaut T-Shirts",
                    price:"78$"
                },
                                {
                    imgSrc:require("../assets/UI/products/f1.jpg"),
                    brend:"adidas",
                    title:"Cartoon Astounaut T-Shirts",
                    price:"78$"
                },
                                {
                    imgSrc:require("../assets/UI/products/f1.jpg"),
                    brend:"adidas",
                    title:"Cartoon Astounaut T-Shirts",
                    price:"78$"
                }
            ]
      }
    }

}
</script>

<style scoped>

h5{
  padding-top: 5px;
  color: #1a1a1a;
}
.card{
    width: 23%;
    min-width: 250px;
    padding: 10px 12px;
    border: 1px solid #cce7d0;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
    margin: 15px 12px;
    transition: 300ms;
    position: relative;
}

.card:hover{
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.08);
    color:#088178;
}
.card:hover h5{
  color:#088178;
}


img{
  width:100%;
  border-radius: 20px;
}

.des{
  text-align: start;
  padding: 10px 0px;
}

span{
  color: #606063;
  font-size: 12px;
}
.star{
  font-size: 12px;
  color: rgb(243, 181, 25);
}

h4{
  padding-top: 7px;
  font-size: 15px;
  font-weight: 700;
}
.basketIcon{
  padding: 5px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 50px;
  background-color: #e8f6ea;
  font-weight: 500;
  color: #088178;
  border: 1px solid #cce7d0;
  position: absolute;
  bottom: 20px;
  right: 10px;
}

</style>