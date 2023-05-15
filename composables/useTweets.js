export default () => {
  const postTweet = (formData) => {
    const form = new FormData();
    form.append("text", formData.text);
    return useFetchApi("/api/user/tweets", {
      method: "Post",
      body: form,
    });
    };
    return {
        postTweet
    }
};
