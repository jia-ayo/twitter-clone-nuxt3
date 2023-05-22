<template>
  <div :class="{ dark: darkMode }">
    <LoadingPage v-if="isAuthLoading" />

    <div class="bg-white dark:bg-dim-900">
      <div v-if="user" class="min-h-full">
        <div
          class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 md:gap-3 lg:gap-9"
        >
          <!-- left  sidebar -->
          <div class="hidden md:block xs-col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft @onTweet="handleOpenTweetModal" />
            </div>
          </div>
          <!-- Main content -->
          <main class="col-span-12 md:col-span-8 xl:col-span-6">
            <RouterView />
          </main>
          <!-- right sidebar -->
          <div class="hidden col-span-12 md:block xl:col-span-4 md:col-span-3">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>
      <AuthPage v-else />
    </div>
    <UiModal :isOpen="postTweetModel" @onClose="handleModalClose">
      <TweetForm
        :replyTo="replyTweet"
        showReply
        :user="user"
        @onSuccess="handleFormSucess"
      />
    </UiModal>
  </div>
</template>

<script setup>
const darkMode = ref(false);
const { useAuthUser, initAuth, useAuthLoading } = useAuth();
const isAuthLoading = useAuthLoading();

const {
  closePostTweetsModal,
  usePostTweetModal,
  openPostTweetsModal,
  useReplyTweet,
} = useTweets();
const user = useAuthUser();

const postTweetModel = usePostTweetModal();
const emitter = useEmitter();
const replyTweet = useReplyTweet();

emitter.$on("replyTweet", (tweet) => {
  openPostTweetsModal(tweet);
});

onBeforeMount(() => {
  initAuth();
});

function handleFormSucess() {
  closePostTweetsModal();
}

function handleModalClose() {
  closePostTweetsModal();
}

function handleOpenTweetModal() {
  openPostTweetsModal(null);
}
</script>
