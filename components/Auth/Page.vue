<template>
  <div class="flex h-screen">
    <div class="relative flex-1 hidden w-0 lg:block">
      <img
        class="absolute inset-0 object-cover w-full h-full"
        src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
        alt=""
      />
    </div>
    <div
      class="flex flex-col justify-center items-center flex-1 px-4 py-12 sm:px-6 lg:fkex-none lg:px-20 xl:px-24"
    >
      <div class="flex items-center w-full max-w-sm mx-auto lg:w-96">
        <AuthForm v-if="newUser" />
        <AuthRegister v-else />
      </div>
      <div class="flex flex-row p-6">
        <div
          class="mr-3 pr-3 cursor-pointer hover:underline"
          @click="loginPage()"
        >
          login
        </div>
        <div
          class="mr-3 pr-3 cursor-pointer hover:underline"
          @click="registerPage()"
        >
          Register/SignUp
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const newUser = ref(true);
function registerPage() {
  newUser.value = false;
}
function loginPage() {
  newUser.value = true;
}
</script>
