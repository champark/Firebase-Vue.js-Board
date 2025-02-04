<template>
  <div class="board-list">
    <h2>📌 게시글 목록</h2>
    <ul>
      <li v-for="post in posts" :key="post.id" class="post-item">
        <strong>{{ post.title }}</strong>
        <p>{{ post.content }}</p>
        <button @click="deletePost(post.id)" class="delete-button">삭제</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { db } from "../firebase";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";

export default {
  setup() {
    const posts = ref([]);
    let unsubscribe = null;

    const fetchPosts = () => {
      const postsRef = collection(db, "posts");

      // Firestore 데이터 실시간 감지 (onSnapshot 사용)
      unsubscribe = onSnapshot(postsRef, (snapshot) => {
        posts.value = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    };

    onMounted(fetchPosts);

    // 컴포넌트가 언마운트될 때 실시간 감지 중지
    onUnmounted(() => {
      if (unsubscribe) unsubscribe();
    });

    const deletePost = async (id) => {
      await deleteDoc(doc(db, "posts", id));
    };

    return { posts, deletePost };
  },
};
</script>

<style>
/* 게시판 전체 */
.board-list {
  margin-top: 20px;
}

/* 게시글 목록 */
ul {
  list-style: none;
  padding: 0;
}

/* 게시글 아이템 */
.post-item {
  background: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

/* 삭제 버튼 */
.delete-button {
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.delete-button:hover {
  background: #d9534f;
}
</style>
