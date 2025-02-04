<template>
  <div class="add-post">
    <h2>📝 새 글 작성</h2>
    <input v-model="title" placeholder="제목" class="input" />
    <textarea v-model="content" placeholder="내용" class="textarea"></textarea>
    <button @click="addPost" class="button">등록</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default {
  setup() {
    const title = ref("");
    const content = ref("");

    const addPost = async () => {
      if (!title.value || !content.value) return;
      await addDoc(collection(db, "posts"), {
        title: title.value,
        content: content.value,
        createdAt: serverTimestamp(),
      });
      title.value = "";
      content.value = "";
    };

    return { title, content, addPost };
  },
};
</script>

<style>
/* 입력 폼 전체 컨테이너 */
.add-post {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

/* 제목 */
h2 {
  color: #35495e;
  text-align: center;
}

/* 입력 필드 */
.input,
.textarea {
  width: 91%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

/* 버튼 */
.button {
  background: #42b883;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.button:hover {
  background: #2c8c6d;
}
</style>
