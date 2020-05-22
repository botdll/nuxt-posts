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
                <PostItem
                v-for=" post in posts"
                :key="post._id" 
                :title="post.title"
                :subtitle="post.subtitle"
                :date="post.createdAt"
                :isRead="post.isRead"
                />
              </div>
              <!-- end of post -->
            </div>
            <!-- end of side bar -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import PostItem from '@/components/PostItem'

  export default {
    components: {
      Navbar,
      PostItem
    },
    data() {
      return {
        title: 'My title from page',
        posts: [
          {_id: '1', title: 'My first post', subtitle: 'My first subtitle', createdAt: new Date(), isRead: false},
          {_id: '2', title: 'My second post', subtitle: 'My second subtitle', createdAt : new Date(), isRead: true}
        ]
      }
    }
  }
</script>

<style scoped>

</style>