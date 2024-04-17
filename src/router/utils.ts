import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { onMounted } from 'vue'


// Initialize Firestore
let db: any;
onMounted (() => {
    db = getFirestore();  
})


// Function to check if a username exists
async function usernameExists(username: String) {
  const usersCollection = collection(db, 'profiles');
  const q = query(usersCollection, where('name', '==', username));
  const querySnapshot = await getDocs(q);
  
  return !querySnapshot.empty; // Returns true if the username exists, false otherwise
}

export default usernameExists;