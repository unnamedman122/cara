<template>
  <div class="card">
    <img :src="productSrc" alt="">
    <div class="des">
        <span>adidas</span>
        <h5>Cartoon Astounaut T-Shirts</h5>
        <div class="star">
            <font-awesome-icon icon="fa-star" />
            <font-awesome-icon icon="fa-star" />
            <font-awesome-icon icon="fa-star" />
            <font-awesome-icon icon="fa-star" />
        </div>
        <h4>78$</h4>
    </div>
    <a href="#"><font-awesome-icon icon="fa-shopping-cart"/></a>
  </div>
</template>

<script>
export default {
    name:"my-shop-card",
    data(){
      return{
        productSrc:require("../assets/UI/products/f1.jpg")
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
    margin: 15px 0px;
    transition: 300ms;
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
</style>