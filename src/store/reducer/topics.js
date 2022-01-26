export default function topics(
  topics = { loading: true, dataSource: [] },
  action
) {
  switch (action.type) {
    case "topics_loading":
      return {
        loading: true,
        dataSource: [],
      };

    case "topics_loadover":
      return {
        loading: false,
        dataSource: action.dataSource,
      };
    default:
      return topics
  }
}
