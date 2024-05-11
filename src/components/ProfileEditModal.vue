<!-- ProfileEditModal.vue -->
<template>
  <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Profile</h5>
          <button type="button" class="close" @click="closeModal">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- Form to edit profile information -->
          <div class="form-group">
            <label for="jobTitle">Job Title</label>
            <input type="text" class="form-control" id="jobTitle" v-model="editedUser.jobTitle" />
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea
              class="form-control"
              id="description"
              v-model="editedUser.description"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
          <button type="button" class="btn btn-primary" @click="saveChanges">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface User {
  jobTitle: string
  description: string
}

interface EditedUser {
  jobTitle: string
  description: string
}

const editedUser = ref<EditedUser>({
  jobTitle: '',
  description: ''
})

const closeModal = () => {
  // Reset edited user data
  editedUser.value = {
    jobTitle: '',
    description: ''
  }
}

const saveChanges = () => {
  // Perform action to save changes (e.g., update user profile)
  // Emit an event or use a callback to inform the parent component
  // about the changes and close the modal
  // For simplicity, let's just close the modal here
  closeModal()
}
</script>
