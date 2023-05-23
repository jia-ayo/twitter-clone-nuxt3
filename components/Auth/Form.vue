<template>
  <div>
    <div class="pt-5 space-y-6">
      <UiInput
        class="dark:placeholder:text-gray-300"
        label="Username"
        placeholder="@username"
        type="text"
        v-model="data.username"
      />

      <UiInput
        class="dark:placeholder:text-gray-300"
        label="Password"
        placeholder="*******"
        type="password"
        v-model="data.password"
      />
      <div>
        <button class="dark:text-white" @click="handleLogin">Login</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = reactive({
  password: "",
  username: "",
  loading: false,
});
async function handleLogin() {
  const { login } = useAuth();
  data.loading = true;
  try {
    await login({
      username: data.username,
      password: data.password,
    });
  } catch (error) {
    console.log(error);
  } finally {
    data.loading = false;
  }
}
</script>
