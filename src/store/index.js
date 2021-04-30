import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import post from "@/store/post"

const store = new Vuex.Store({
  modules: {post}
})

export const {dispatch, commit, getters} = store
export default store
