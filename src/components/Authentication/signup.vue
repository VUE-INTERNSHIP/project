<template>
  <div class="signup">
    <div class="main">
        <section class="reg-details">
            <h2 class="header">Sign Up</h2>
            <form action="">
                <input type="text" v-model="firstName" placeholder="First Name" class="Fname">
                <input type="text" v-model="lastName" placeholder="Last Name" class="Lname">
                <input type="text" v-model="userName" placeholder="Username" class="uname">
                <input type="email" placeholder="Email" v-model="Mail">
                <input type="password" placeholder="Password" v-model="passWord">
                <button type='submit' @click="userRegistration">Register</button>   
             </form>
             <p>Already have an account? <router-link :to="{name:'login'}">Login</router-link></p>
        </section>
        <section class="image-holder">
            <img src="@/assets/Signin.svg" alt="" srcset="">
        </section>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            firstName:'',
            lastName:'',
            userName:'',
            Mail:'',
            passWord:''
        }
    },
    methods:{
        userRegistration(e){
            e.preventDefault()
            console.log(this.firstName)
        }
    }
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
}
.signup{
    width: 100%;
    height: 100vh;
    /* background-image: url(@/assets/grid.svg);  */
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
.main{
    height:80vh;
    width:60%;
    background:#fff;
    display:flex;
    justify-content: flex-start;
    border-radius:10px;
}
.image-holder{
    width: 40%;
    /* height:100vh; */
    background:rgb(68, 76, 88);
     border-radius: 0px 10px 10px 0px; 
}
.image-holder > img{
    width:80%;
    margin:0px 20px;
    height:100%;
}
.reg-details{
    width:60%;
}
.header{
    font-size: 2.5em;
    margin:25px;
    text-align:center;
}
form{
    margin:50px 0;
}
.Fname, .Lname{
    width:40%;
    padding: 7px;
    margin: 10px 5%;
    border-radius:3px;
    background-color:rgb(233, 233, 245);
    border: none;
}
.uname,input[type="password"], input[type="email"]{
    width:90%;
    padding: 7px;
    margin:10px 5%;
    border-radius:3px;
    background-color:rgb(233, 233, 245);
    border: none;
    /* border-bottom:2px solid rgb(30, 32, 36);*/
}
.Fname:focus, .Lname:focus, .uname:focus,input[type="password"]:focus, input[type="email"]:focus{
    outline: none;
    border-bottom:5px solid royalblue;
    transition: all .1s;
}
button{
    width: 100px;
    padding:10px;
    background-color: royalblue;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    color: white;
    font-size: 18px;
    margin:30px 5% ;
}
p{
    margin:0 5%;
}
@media screen and (max-width:1000px) {
.main{
    min-height:600px;
    width:80%;
    background:#fff;
    display:flex;
    justify-content: flex-start;
    border-radius:10px;
}
.image-holder{
    display:none;
    /* visibility: none; */
}
.image-holder > img{
    width:80%;
    margin:0px 20px;
    height:100%;
}
.reg-details{
    width:100%;
}
.header{
    font-size: 2.5em;
    margin:25px;
    text-align:center;
}
form{
    margin:50px 0;
}
.Fname, .Lname{
    width:40%;
    padding: 7px;
    margin: 10px 5%;
    border-radius:3px;
    background-color:rgb(233, 233, 245);
    border: none;
}
.uname,input[type="password"], input[type="email"]{
    width:90%;
    padding: 7px;
    margin:10px 5%;
    border-radius:3px;
    background-color:rgb(233, 233, 245);
    border: none;
    /* border-bottom:2px solid rgb(30, 32, 36);*/
}
.Fname:focus, .Lname:focus, .uname:focus,input[type="password"]:focus, input[type="email"]:focus{
    outline: none;
    border-bottom:3px solid royalblue;
    transition: all .1s;
}
button{
    width: 100px;
    padding:10px;
    background-color: royalblue;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    color: white;
    font-size: 18px;
    margin:30px 5% ;
}
p{
    margin:0 5%;
}
}
</style>