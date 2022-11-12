<template>
    <div class="container">
      <section class="login">
        <img src="@/assets/maleavatar.svg" alt="" srcset="" />
        <form action="">
          <input
            type="text"
            placeholder="Username or Email"
            v-model="userName"
            class="user"
          />
          <input
            type="password"
            placeholder="Enter your password"
            v-model="passWord"
            class="pass"
          />
          <div class="button-group">
            <button type="submit" @click="handleSubmit">Login</button>
            <router-link :to="{name:'signup'}" class="Signup">Sign Up</router-link> 
          </div>
        </form>
        <div class="error" v-if="error">
           Invalid username or password
        </div>
      </section>
    </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return{
      userName:'',
      passWord:'',
      error: false
    }
  },
  methods:{
    handleSubmit(e){
      if(this.userName=="Admin" && this.passWord=="pass"){
        e.preventDefault()
        this.$router.push({name:'homeview'})
      }else{
      e.preventDefault()
      this.error= true
      console.log('error')
      
      }
    }
  }
};
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}
.container{
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
.login{
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 2px 3px 3px rgb(8, 30, 41); 
    background-color: #E4F0FF;
    border-radius:10px ;
    width: 400px;
    height: 60vh;  
}
.login > img{
    width:100px;
    margin: 20px;
}
form{
    margin: 20px 0;
}
.user, .pass{
    width: 300px;
    padding: 15px 10px;
    margin: 10px 10%;
    border-radius:7px;
    background-color:rgb(205, 205, 206);
    border: none;
}
.user:focus, .pass:focus{
    outline: none;
    border-bottom: 3px solid rgb(3, 61, 90);
    border-radius: 0;
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
    margin:30px 10% ;
}
.login-image > img{
    width: 400px;
    height: 50vh;
}
.go{
  color:white;
  text-decoration :none;
}
.Signup{
    display: inline-block;
    width: 100px;
    padding:7px;
    text-align: center;
    text-decoration: none;
    border:2px solid #000;
    border-radius: 6px;
    cursor: pointer;
    color: black;
    font-size: 18px;
    margin:30px 10%;

}
.Signup:hover{
    background-color: #000;
    color: #fff;
    transition: all .4s;
}
.error{
  color:red;
  width:70%;
  font-size:20px;
}
@media screen and (max-width:1000px) {
  .login{
    width:350px;
  }
  .user, .pass{
    width: 300px;
    padding:10px;
    margin: 10px 5%;
    border-radius:3px;
    background-color:rgb(205, 205, 206);
    border: none;
}
}
@media screen and (max-width:768px) {
  .login{
    width:300px;
    height:400px;
  }
  .user, .pass{
    width: 200px;
    padding:5px;
    margin: 10px 15%;
   
}
button{
    width: 70px;
    padding:7px;
    font-size: 14px;
    margin:30px 15% ;
}
.login-image > img{
    width: 400px;
    height: 50vh;
}

.Signup{
    display: inline-block;
    width: 70px;
    padding:5px;
    text-align: center;
    text-decoration: none;
    border:2px solid #000;
    border-radius: 6px;
    cursor: pointer;
    color: black;
    font-size: 14px;
    margin:30px 5%;

}
}
</style>
