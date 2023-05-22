export default () => {
  const usePostTweetModal = () => useState("post_tweet_modal", () => false);

  const useReplyTweet = () => useState("reply_tweet", () => null);

  const closePostTweetsModal = () => {
    const postTweetModel = usePostTweetModal();
    postTweetModel.value = false;
  };

  const setReplyTo = (tweet) => {
    const replyTweet = useReplyTweet();
    replyTweet.value = tweet;
  };

  const openPostTweetsModal = (tweet = null) => {
    const postTweetModel = usePostTweetModal();
    postTweetModel.value = true;
    setReplyTo(tweet);
  };
  const postTweet = (formData) => {
    const form = new FormData();

    form.append("text", formData.text);
    form.append("replyTo", formData.replyTo);

    formData.mediaFiles.forEach((mediaFile, index) => {
      form.append("media_fil_" + index, mediaFile);
    });
    return useFetchApi("/api/user/tweets", {
      method: "Post",
      body: form,
    });
  };

  const getTweets = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useFetchApi("/api/tweets", {
          method: "GET",
        });

        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };

  const getTweetById = (tweetId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useFetchApi(`/api/tweets/${tweetId}`);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    postTweet,
    getTweets,
    getTweetById,
    closePostTweetsModal,
    openPostTweetsModal,
    usePostTweetModal,
    useReplyTweet,
  };
};
