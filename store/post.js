import Vue from 'vue'
import INITIAL_DATA from '@/store/initial_data.json'

export function fetchPostsAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(INITIAL_DATA.posts)
        }, 200)
    })
}

export const state = () => {
    return {
        items: []
    }
}

export const getters = {
    hasEmptyItems(state) {
        return state.items.length === 0
    }
}

export const actions = {
    fetchPosts({ commit }) {
        return fetchPostsAPI().then(posts => commit('setPosts', posts))
    },
    createPost({ commit }, postData) {
        postData._id =  Math.random().toString(36).substr(2, 7)
        postData.createdAt = (new Date()).getTime()

        return this.$axios.$post('/api/posts', postData)
          .then((res) => {
            console.log(res)
            commit('addPost', postData)
          })
    },
    updatePost({commit, state}, postData) {
        const index = state.items.findIndex(post => post._id === postData._id)

        if (index !== -1) {
            commit('replacePost', {post: postData, index})
        }        
    }  
}

export const mutations = {
    setPosts(state, posts) {
        state.items = posts 
    },
    addPost(state, post) {
        state.items.push(post)
    },
    replacePost(state, {post, index}) {
        Vue.set(state.items, index, post)
    }
}