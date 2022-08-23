class Contentful_Query {
  // Define your queries for your components, you can use an external file to store and import here
  stored_queries = {
    "LatestBlogPosts": {
      content: function (limit, skip) {
        return `{
            postCollection(limit:${limit},skip:${skip},order:published_DESC){
              items {
                title
                description{
                  json
                }
                published
                image {
                  title
                  description
                  contentType
                  fileName
                  size
                  url
                  width
                  height
                }
              }
            }
            }`;
      },
      pagination: `{
        postCollection{
          total
        }
      }`,
    }
  };

  // Function to get component associated query
  getContentQuery(component, limit, skip) {
    return this.stored_queries[component].content(limit, skip);
  }

  getPaginationQuery(component) {
    return this.stored_queries[component].pagination;
  }
}

export default Contentful_Query;