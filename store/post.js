import { INITIAL_DATA } from '@/store/index'

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
        postData.createdAt = new Date()
        commit('addPost', postData) 
    }  
}

export const mutations = {
    setPosts(state, posts) {
        state.items = posts 
    },
    addPost(state, post) {
        state.items.push(post)
    }
}