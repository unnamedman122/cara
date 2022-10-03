<template>
    <section id="header">
        <a href="#"><img :src="logo" class="logo" alt="logo"></a>
        <div class="navBlock">
            <ul id="navbar">
                <li><router-link to="/" class="activeLink"> Home</router-link></li>
                <li><router-link to="/Market"> Shop</router-link></li>
                <li><router-link to="/Blog"> Blog</router-link></li>
                <li><router-link to="/About"> About</router-link></li>
                <li><router-link to="/Contact"> Contact Us</router-link></li>
                <li><router-link to="/Basket"><font-awesome-icon icon="fa-shopping-basket" /></router-link></li>
            </ul>
        </div>
    </section>
</template>

<script>

export default {
    name:"my-nav",
    data() {
    return {
        logo:require("../assets/UI/logo.png")
    }
  },
}
</script>


<style scoped>

#header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 80px;
    background: #e3e6f3;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
    z-index: 999;
    position: sticky;
    top: 0;
}

#navbar{
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    text-decoration: none;
}

#navbar > li{
    padding: 0 20px;
    position: relative;
}

#navbar > li >a{
    text-decoration: none;
    color: #1a1a1a;
    font-size: 16px;
    transition: ease 0.5s;
}

#navbar > li >a:hover,
#navbar > li >a.activeLink{
    color: #088178;
}
 

#navbar > li >a.activeLink:after,
#navbar > li >a:hover::after{
    content: "";   
    width: 40%;
    height: 2px;
    background-color: #088178; 
    position: absolute;
    bottom: -4px;  
    left: 20px;
    
}
.logo{
}

</style>

