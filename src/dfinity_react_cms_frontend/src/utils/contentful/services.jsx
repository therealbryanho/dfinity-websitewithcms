import Contentful_Query from "../graphql/queries";
import Post from "./model";


class Contentful_Service {
    delivery_api_token = 'OCLvDwk6HjdpR3OxvqhLaD-zuXLwo2QYEueE9pYJZuU';
    preview_api_token = 'yaYfP9KvaprK1TduajHPjh8cKlEF83mdFBFwmQSAEuA';
    spaceId = '53t36x95ru0m';

    getContentful = async (page) => {
        const query = new Contentful_Query().getQuery(page);

        await window.fetch(`https://graphql.contentful.com/content/v1/spaces/${this.spaceId}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.delivery_api_token}`,
            },
            body: JSON.stringify({ query }),
        })
            .then((response) => response.json())
            .then(({ data, errors }) => {
                if (errors) {
                    console.error(errors);
                }
                console.log(data);
                if (data) {
                    return new Post().getPosts(data);
                }
            });
    }
}
export default Contentful_Service;