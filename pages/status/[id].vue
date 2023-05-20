<template>
  <div>
    <MainSection title="Tweet" :loading="loading">
      <Head>
        <title></title>
      </Head>
      <TweetDetails :user="user" :tweet="tweet" />
    </MainSection>
  </div>
</template>

<script setup>
const loading = ref(false);
const tweet = ref(null);
const { useAuthUser } = useAuth();
const user = useAuthUser();

const { getTweetById } = useTweets();

function getTweetIdFromRoute() {
  return useRoute().params.id;
}

async function getTweet() {
  loading.value = true;
  try {
    const response = await getTweetById(getTweetIdFromRoute());
    tweet.value = response.tweet;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}

onBeforeMount(() => {
  getTweet();
});
</script>
