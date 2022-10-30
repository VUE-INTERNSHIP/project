<template>
  <div>
    <h3>Recommended for you</h3>
    <div class="recommended">

      <div v-for="movie in movies" class="#">
        <div class="movie">
          <img class="movie-img-top" :src="movie.thumbnail.regular.large" alt="Card image cap" />
          <div class="booked">
            <span v-if="movie.isBookmarked" class="book"><img src="../assets/bookMarkFull.svg"
                :alt="movie.title" /></span>
            <span v-if="!movie.isBookmarked" class="book"><img src="../assets/icon-bookmark-empty.svg"
                :alt="movie.title" /></span>
          </div>
          <div class="play-container"> kkk
            <div class="play">
              <img src="@/assets/icon-play.svg" alt="" srcset="" /><span>Play</span>
            </div>
          </div>
          <div class="movie-body">
            <div class="details">
              <div class="year">
                <p>{{ movie.year }}</p>
              </div>
              <div class="list">
                <ul>
                  <li>
                  </li>
                </ul>
              </div>
              <div class="catImg">
                <span v-if="movie.category === 'TV Series'" class="span"><img class="svg"
                    src="../assets/icon-category-tv.svg" alt="" /></span> <span v-else class="span"><img class="svg"
                    src="../assets/icon-category-movie.svg" alt="" /></span>
              </div>
              <div class="catName">
                <p>
                  {{ movie.category }}
                </p>
              </div>
              <div class="rating">
                <ul>
                  <li>
                    {{ movie.rating }}
                  </li>
                </ul>
              </div>
            </div>
            <h4 class="movie-title">{{ movie.title }}</h4>
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
  props: ["movies"],

  data() {
    return {};
  },
};
</script>

<style scoped>
h3 {
  padding: 1%;
  color: whitesmoke;
  margin-left: 4%;
}

h2 {
  text-align: left;


  color: whitesmoke;
}

.recommended {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  grid-auto-rows: auto;
  width: 95%;
  margin: auto;
  grid-gap: 1rem;


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
  gap: 8%;
  color: #d3d3d398;
  text-align: left;
  margin-left: 1%;
}



.catImg {
  position: absolute;
  margin-left: 5%;
}

.catImg img {
  height: 20px;
  width: 20px;
  border-radius: 2px;
  margin-top: 2px;

}




li {
  font-size: 14px;
  font-weight: 100;


}


.movie-title {
  position: absolute;
  margin-left: 0%;
  text-align: left;
  font-weight: 500;
  color: whitesmoke;
  padding-bottom: 15px;
  margin-top: px;
}

.span {
  display: flex;
  align-items: center;
}

.booked {
  position: absolute;
  margin-left: 25%;
  margin-top: -15%;
  background: rgba(0, 0, 0, 0.4);
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
}

.booked img {
  width: 20px;
  height: 20px;
  border-radius: 5px;
  margin-top: 1%;
}


.play {
  display: flex;
  flex-direction: row;
  position: absolute;
  align-items: center;
  transform: translate(-50%, -50%);
  z-index: 1;
  padding: 6px 10px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  margin-left: 12%;
  margin-top: -7%;
  align-items: center;
  display: none;


}

.play-container:hover+.play {
  display: block;
}

.play img {
  width: 35px;
  height: 35px;
  margin-left: 0%;
  margin-top: 1%;
}


.play span {
  color: whitesmoke;
  margin-left: 5%;
  margin-top: 5%;
}

/* Media Query for Tablets Ipads portrait mode */
@media (min-width: 768px) and (max-width: 1024px) {
  .recommended {
    grid-template-columns: repeat(2, 1fr);

  }

  .booked {
    margin-left: 38%;
    margin-top: -190px;

  }

  .catImg {
    margin-left: 63px;
  }
}

/* Media Query for Mobile Devices */
@media (max-width: 480px) {
  .recommended {
    grid-template-columns: repeat(1, 1fr);

  }

  .booked {
    margin-left: 75%;
    margin-top: -190px;

  }

  .catImg {
    margin-left: 60px;
  }
}

/* Media Query for low resolution  Tablets, Ipads */
@media (min-width: 481px) and (max-width: 767px) {
  .recommended {
    grid-template-columns: repeat(2, 1fr);
    width: 90%;

  }

  .booked {
    margin-left: 75%;
    margin-top: -190px;

  }

  .catImg {
    margin-left: 60px;
  }
}
</style>