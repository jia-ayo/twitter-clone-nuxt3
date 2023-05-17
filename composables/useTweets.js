export default () => {
  const postTweet = (formData) => {
    const form = new FormData();

    form.append("text", formData.text);
    
    formData.mediaFiles.forEach((mediaFile, index) => {
      form.append("media_fil_" + index, mediaFile);
    });
    return useFetchApi("/api/user/tweets", {
      method: "Post",
      body: form,
    });
  };
  return {
    postTweet,
  };
};
