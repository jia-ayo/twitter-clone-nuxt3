<template>
  <div class="w-full">
    <div class="flex justify-center">
      <div class="w-10 h-10">
        <LogoTwitter />
      </div>
    </div>
    <div class="pt-5 space-y-6">
      <UiInput
        class="dark:placeholder:text-gray-300"
        label="Name"
        placeholder="Name"
        type="text"
        v-model="data.name"
      />
      <UiInput
        class="dark:placeholder:text-gray-300"
        label="Username"
        placeholder="@username"
        type="text"
        v-model="data.username"
      />
      <UiInput
        class="dark:placeholder:text-gray-300"
        label="Email"
        placeholder="Email"
        type="email"
        v-model="data.email"
      />
      <UiInput
        class="dark:placeholder:text-gray-300"
        label="Password"
        placeholder="*******"
        type="password"
        v-model="data.password"
      />
      <UiInput
        class="dark:placeholder:text-gray-300"
        label="Reapet Password"
        placeholder="*******"
        type="password"
        v-model="data.repeatPassword"
      />
      <UiButton @click="handleRegister" liquid :disabled="isButtonDisabled">
        Register/Signup
      </UiButton>
    </div>
  </div>
</template>

<script setup>
const data = reactive({
  name: "",
  username: "",
  email: "",
  password: "",
  repeatPassword: "",
  loading: false,
});
async function handleRegister() {
  const { register } = useAuth();
  data.loading = true;
  try {
    await register({
      username: data.username,
      password: data.password,
      name: data.name,
      email: data.email,
      repeatPassword: data.repeatPassword,
    });
  } catch (error) {
    console.log(error);
  } finally {
    data.loading = false;
  }
}



const isButtonDisabled = computed(() => {
  return (
    !data.username ||
    !data.password ||
    data.loading ||
    !data.email ||
    !data.repeatPassword ||
    !data.name
  );
});
</script>
