<script>
    import { storage } from '$lib/firebase.js';
    import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
  
    let file;
  
    async function uploadImage() {
        if (!file) {
            alert('No file selected');
            return;
        }
  
        const storageRef = ref(storage, `images/${file.name}`);
        try {
            const snapshot = await uploadBytes(storageRef, file);
            console.log('Uploaded a blob or file!', snapshot);
            console.log('File available at', getDownloadURL(snapshot.ref));
            alert('Upload successful!');
        } catch (error) {
            console.error('Upload failed', error);
            alert('Upload failed!');
        }
    }
  </script>
  
  <form on:submit|preventDefault={uploadImage}>
    <input type="file" on:change="{e => file = e.target.files[0]}" accept="image/*">
    <button type="submit" disabled={!file}>Upload Image</button>
  </form>
  