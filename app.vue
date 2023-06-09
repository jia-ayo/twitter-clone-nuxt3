<template>
  <div :class="{ dark: darkMode }">
    <LoadingPage v-if="isAuthLoading" />

    <div class="bg-white dark:bg-dim-900">
      <div v-if="user" class="min-h-full">
        <div
          class="grid grid-cols-12 mx-auto sm:px-2 lg:max-w-7xl lg:px-5 md:gap-3 lg:gap-6"
        >
        
          <!-- left  sidebar -->
          <div class="hidden sm:block xs:col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft
                @onTweet="handleOpenTweetModal"
                :user="user"
                @onLogout="handleUserLogout"
              />
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
const { useAuthUser, initAuth, useAuthLoading, logout } = useAuth();
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

emitter.$on("toggleDarkMode", () => {
  darkMode.value = !darkMode.value;
});

onBeforeMount(() => {
  initAuth();
});

function handleFormSucess(tweet) {
  closePostTweetsModal();
  navigateTo({
    path: `/status/${tweet.id}`,
  });
}

function handleModalClose() {
  closePostTweetsModal();
}

function handleOpenTweetModal() {
  openPostTweetsModal(null);
}

function handleUserLogout() {
  logout();
}
</script>
