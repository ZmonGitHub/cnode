export default function topic(
  topic = { loading: true, data: { author:{}}, isError: false, errorMessage: "" },
  action
) {
  switch (action.type) {
    case "topic_loading":
      return {
        loading: true,
        data: {
          author:{}
        },
        isError: false,
        errorMessage: "",
      };

    case "topic_loadover":
      return {
        loading: false,
        data: action.data,
        isError: false,
        errorMessage: "",
      };
    case "error":
      return {
        loading: false,
        data: action.data,
        isError: true,
        errorMessage: action.errorMessage,
      };
    default:
      return topic;
  }
}
