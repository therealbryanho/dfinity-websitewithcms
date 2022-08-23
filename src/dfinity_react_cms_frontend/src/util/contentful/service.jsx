import Contentful_Query from "./queries";


class Contentful_Service {
    // Define API TOKENS and SPACE IDS, use an array to manage multiple spaces and associated tokens
    delivery_api_token = 'OCLvDwk6HjdpR3OxvqhLaD-zuXLwo2QYEueE9pYJZuU';
    preview_api_token = 'yaYfP9KvaprK1TduajHPjh8cKlEF83mdFBFwmQSAEuA';
    spaceId = '53t36x95ru0m';

    // Define the service to fetch delivery content, content that is published.
    getDeliveryContent = async (query) => {
        //  Fetch and return data
        return await window.fetch(`https://graphql.contentful.com/content/v1/spaces/${this.spaceId}/`, {
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
                console.warn(data);
                return data;
            });
    }

    // Define the service to fetch preview content, content that is unpublished.
    getPreviewContent = async (component) => {
        // Get the query according the component
        const query = new Contentful_Query().getQuery(component);
        //  Fetch and return data
        return await window.fetch(`https://graphql.contentful.com/content/v1/spaces/${this.spaceId}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.preview_api_token}`,
            },
            body: JSON.stringify({ query }),
        })
            .then((response) => response.json())
            .then(({ data, errors }) => {
                if (errors) {
                    console.error(errors);
                }
                console.warn(data);
                return data;
            });
    }
}
export default Contentful_Service;