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
    }
}

export const mutations = {
    setPosts(state, posts) {
        state.items = posts 
    }
}