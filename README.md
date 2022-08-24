# ♾️ DFINITY REACT CONTENTFUL CMS 
![dfx-shield](https://img.shields.io/badge/dfx_0.11.1-yellowgreen) ![react-shield](https://img.shields.io/badge/react_18-blue) ![material-ui-shield](https://img.shields.io/badge/@material--ui-blueviolet) ![graphql-shield](https://img.shields.io/badge/GraphQL-red) ![contentful-shield](https://img.shields.io/badge/Contentful_API-yellow)

* [📝 Getting Started](#getting-started)
  * [⚙️ Setting Up Local Development Environment](#setting-up-local-development-environment)
  * [🔗 Connecting your Contentful API](#--connecting- your-contentful-api)
* [📂 Project File Structure and Design](#-project-file-structure-and-design)
  * [📄 Pages](#--pages)
  * [➿   Components](#--components)
    * [Adding main components](#adding-main-components)
    * [Add contentful model components](#add-contentful-model-components)
    * [Customizing Contentful Fields](#customizing-contentful-fields)
  * [⚒️ Utilities](#--utilities)
    * [Contentful Query](#contentful-query)
    * [Contentful Service](#contentful-service)

## 📝 Getting Started

### ⚙️ Setting Up Local Development Environment
1. Install [DFINITY SDK][install-sdk] to run dfx commands.
2. Clone [this][git-repo-url] repository.
3. Install dependencies ```npm install```.
4. Run ```dfx start``` on a terminal to start server.
5. Run ```dfx deploy``` on another terminal to install the react application to the server.

View the application on ```localhost://8000/?canisterId=[your canisterId]```

During **development**, if you come across ```Could not find a canister id to forward to.```,  ensure the path ends with ```?canisterId=[your canisterId]``` 


### 🔗 Connecting your Contentful API 

Create a space in [Contentful][contentful-api]
Go to Settings - Space Settings > API keys and add an API key.
Take note of your Space ID and access tokens.
> Content Delivery API - access token is used retrieve published content
> Content Preview API - access token is used to retrieve unpublished content

Queries you execute  [GraphiQL][contentful-graphql] can be used in your API calls.
```https://graphql.contentful.com/content/v1/spaces/{SPACE}``` 

## 📂 Project File Structure and Design

index.html - root
index.jsx - this file renders JSX into index.html
index.css - main styles
-- pages/ - Application pages which contains reusable components
-- components/ - Components that can potentially be reused
-- utils/ - service files
    
### 📄 Pages 
Create new pages in this folder and define them in App.js.
```
const pages = [ // define your pages here
        { name: "Home", path: "/", element: <Home /> },
        { name: "Test", path: "/test", element: <Test /> },
    ];
```
Don't forget to import your JSX Element.

### ➿	Components 
#### Adding main components
- [Envision a generally focused component][thinking-react]
- Explore breakdown of the ```<LatestBlogPosts />``` Component. 
- Include states, styles, layout. Basically handle operations and display.

#### Add contentful model components
- Explore ```<PostList />, <Post />, <PostType />```
- These JSX element defines the structure which takes **Contentful Content** data and turn it into components.
- Further more, explore Fields.jsx which contains Contenful components.
- In Fields.jsx, these component are based on the **Contenful Content Model** which makes it easier to build **Contentful Content** components

#### Customizing Contentful Fields
As mentioned above in Fields.jsx, the recommended way to develop these components is:
1. Identify the data structure passed from the API of a **Contentful Content Model** field. Use [GraphiQL][contentful-graphql] to see JSON results.
2. Process the data and identify the components that can be used. E.g. An image field is expected to return a width, height, url, title properties and we can add them into an img component.
`<img src={image.url} alt={image.title} width={image.width} height={image.height} />`
3. Customize the component
Passing styles from the main component to design the looks and developing a general structure for component.

### ⚒️ Utilities
This folder contains contentful services (util/contentful/)
1. queries.jsx (customizable)
2. service.jsx (static)
#### Contentful Query
Define graphql queries in this file in relation to the main component. Can be customized if your graphql is more complex or dynamic.
```<LatestBlogPosts />``` component has 2 queries
1. content - get a list of posts
2. pagination - get total posts to calculate the pagination 

And 2 functions to get LatestBlogPosts component queries.
1. getContentQuery(component, limit, skip)
2. getPaginationQuery(component)
You can add more functions to cater for dynamic queries

This service is used at the main component get the query and pass it into the **Contentful Service** to fetch data.

#### Contentful Service
No changes should be made in this service file. It acts as a helper to fetch Contentful data with graphql queries.

   [install-sdk]: <https://internetcomputer.org/docs/current/developer-docs/build/install-upgrade-remove/>
   [git-repo-url]: <https://github.com/therealbryanho/dfinity-websitewithcms>
   [contentful-api]: <https://app.contentful.com/>
   [contentful-graphql]: <https://www.contentful.com/developers/docs/references/graphql/#/introduction/basic-api-information/>
   [graphiql]:<https://graphql.contentful.com/content/v1/spaces/53t36x95ru0m/explore?access_token=OCLvDwk6HjdpR3OxvqhLaD-zuXLwo2QYEueE9pYJZuU />
   [thinking-react]: <https://reactjs.org/docs/thinking-in-react.html/>
