<template>
  <div>
    <MainSection title="Search" :loading="loading">
      <Head>
        <title>Search</title>
      </Head>

      <TweetListFeed :tweets="[]" />
    </MainSection>
  </div>
</template>

<script setup>
const { getTweets } = useTweets();

const loading = ref(false);
const homeTweets = ref([]);
const searchQuery = useRoute().query.q;

onBeforeMount(async () => {
  console.log(searchQuery);
  loading.value = true;
  try {
    const { tweets } = await getTweets({
      query: searchQuery,
    });
    homeTweets.value = tweets;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
</script>
