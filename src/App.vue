<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

import {dispatch, getters} from "@/store"

export default {

  computed: {
      posts() {
          return getters['post/getPosts']
      }
  },

  created() {
    dispatch('post/create', {
      title: 'Title',
      body: 'Update Body'
    })
    dispatch('post/getAll')
    dispatch('post/delete', 1)
    dispatch('post/getById', 1)
   dispatch('post/update', {
      id: 1,
      title: 'Title',
      body: 'Update Body'
    })

    dispatch('post/getAll').then(() => {
        console.log(this.posts)
    })
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
