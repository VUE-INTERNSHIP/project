<template>
  <div>
    <i class="fas fa-user-secret"></i>
    <h1>Recommended</h1>
    <p></p>
    <div class="container">
      <div class="row">
        <div class="col-4 d-flex" v-for="movie in movies">
          <div class="movie">
            <img class="movie-img-top" :src="movie.thumbnail.regular.large" alt="Card image cap">
            <div class="movie-body">
              <div class="details">
                <div class="year">
                  <p>{{movie.year}} <i class="fa fa-circle" aria-hidden="true" id="circle" fa-33x></i></p>
                </div>
                <div class="category">
                  <p v-bind="movie">{{movie.category}} </p>
                  <h1 v-if="movie.value=='Movie'"><i class="fa-solid fa-film" ></i></h1>
                  <h1 v-else>Show!</h1>
                </div>
                <div class="rating">
                  {{movie.rating}}

                </div>

              </div>
              <h5 class="movie-title">{{movie.title}}</h5>

            </div>
          </div>

          <div id="images">
            <!-- <img :src="movie.thumbnail.regular.large" class="card-img-top" alt="product image"> -->
            {{film}}
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
//import json from "@/movies.json";

//import movies from '@/datas/movies';


export default {
  props: ['movies'],

  data() {
    return {
      film:this.movies.category
    }
  }
}
</script>

<style scoped>
#images {
  padding: auto;
}

img {
  margin-top: 12px;
  height: 200px;
  width: 400px;
  border-radius: 18px;

}

.details {
  display: flex;
  flex-direction: row;
  margin-top: 1%;
  color: lightgrey;
  text-align: left;
  margin-left: 0%;

}

.rating,
.category {
  margin-left: 12px;
}

.movie-title {
  margin-top: -5%;
  margin-left: 0;
  text-align: left;
  font-weight: 400;
  color: aliceblue;
}

#circle {
  font-size: 5px;
  margin-top:10px;
  margin-left: 6px;
  position: absolute;
  color: brown;
}
</style> 