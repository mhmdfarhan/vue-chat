<template>
  <div>
    <ul>
      <li v-for="msg in messages" :key="msg.id">{{ msg.username }}: {{ msg.message }}</li>
    </ul>
    <input v-model="newMessage" placeholder="Type a message" />
    <button @click="sendMessage">Send</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { db } from '@/firebase';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';

export default {
  setup() {
    const messages = ref([]);
    const newMessage = ref('');

    onMounted(() => {
      const q = query(collection(db, 'messages'), orderBy('timestamp'));
      onSnapshot(q, (snapshot) => {
        messages.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      });
    });

    const sendMessage = async () => {
      if (newMessage.value.trim()) {
        await addDoc(collection(db, 'messages'), {
          username: 'User1',
          message: newMessage.value,
          timestamp: serverTimestamp(),
        });
        newMessage.value = '';
      }
    };

    return {
      messages,
      newMessage,
      sendMessage,
    };
  },
};
</script>

<style>
/* Add your styles here */
</style>
