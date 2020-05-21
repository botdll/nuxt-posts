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
                :title="title"
                :subtitle="'new sub'"
                />
                <PostItem 
                :title="'New post title 2'"
                :subtitle="'new sub 2'"
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
        title: 'My title from page'
      }
    }
  }
</script>

<style scoped>
  .post-content {
    font-style: italic;
  }

  .post {
    margin-bottom: 20px;
    padding: 5px;
    border-bottom: 2px solid transparent;
  }

  .post:hover {
    border-bottom: 2px solid #e8e8e8;
  }
</style>