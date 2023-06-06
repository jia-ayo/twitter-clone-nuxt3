<template>
  <div class="modal-overlay">
    <div class="modal bg-white dark:bg-black">
    <form action="">
      <h6>Registered</h6>
      <p>Your Details have been saved Successfully</p>
      <p>Thanks for testing the site</p>
      <button class="bg-blue-300 text-white">
         Login 
      </button>
    </form>
    </div>
  </div>
</template>

<script>
export default {};

</script>
<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  height: 17rem;
  width: 25rem;
  margin-top: 10%;
  border-radius: 20px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 1rem 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 1rem;
}
</style>
