<template>
  <div class="container">
    <h1>🔥 Vue + Firestore 게시판</h1>
    <AddPost />
    <BoardList />
  </div>
</template>

<script>
import AddPost from "./components/AddPost.vue";
import BoardList from "./components/BoardList.vue";

export default {
  components: {
    AddPost,
    BoardList
  }
};
</script>

<style>
/* 전체 레이아웃 */
.container {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

/* 제목 스타일 */
h1 {
  text-align: center;
  color: #42b883;
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
