<template>
  <div>
    <Navbar />
    <div class="blogs-page">
      <div class="main-content">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-8 is-offset-2">
              <div class="section">
                <div class="title">
                  <h1>Newest Posts</h1>
                  <hr>
                </div>
                <div v-if="posts && posts.length > 0">
                  <PostItem
                  v-for=" post in posts"
                  :key="post._id" 
                  :title="post.title"
                  :subtitle="post.subtitle"
                  :date="post.createdAt"
                  :isRead="post.isRead"
                  :id="post._id"
                  />
                </div>
                <div v-else>
                  no posts yet :(
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import PostItem from '@/components/PostItem'
import { fetchPostsAPI } from '@/store/post'

  export default {
    components: {
      Navbar,
      PostItem
    },
    data() {
      return {
        title: 'My title from page',
        form: {
          title: 'some title',
          subtitle: 'some subtitle'
        }
      }
    },
    fetch({ store }){
      if (store.getters['post/hasEmptyItems']) {
        return store.dispatch('post/fetchPosts')
      }
    },
    mounted() {
      this.$store.dispatch('post/getArchivedPosts')
    },
    computed: {
      posts() {
        return this.$store.state.post.items
      },
      archivedPosts() {
        return this.$store.state.post.archivedItems
      }
    },
    methods: {
      isFormValid() {
        if (this.form.title) {
          return true
        }

        return false
      }
    }
  }
</script>

<style scoped>

</style>