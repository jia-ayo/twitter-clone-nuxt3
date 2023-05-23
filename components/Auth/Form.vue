<template>
  <div class="w-full">
    <div class="flex justify-center">
      <div class="w-10 h-10">
<LogoTwitter/>
      </div>

    </div>
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
      <UiButton @click="handleLogin" liquid :disabled="isButtonDisabled">
        Login
      </UiButton>
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

const isButtonDisabled = computed(() => {
  return !data.username || !data.password || data.loading;
});
</script>
