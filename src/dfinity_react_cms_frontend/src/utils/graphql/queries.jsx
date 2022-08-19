

class Contentful_Query {
    stored_queries = {
        "HOME": `{
            postCollection{
              items{
                title
                description{
                  json
                }
                published
                imageCollection{
                  items{
                    url
                    description
                    contentType
                  }
                }
              }
            }
            }`
    };
    getQuery(page) {
        return this.stored_queries[page];
    }
}
export default Contentful_Query;