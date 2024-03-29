# ♾️ Internet Computer Boilerplate - React Website with Contentful CMS 
![dfx-shield](https://img.shields.io/badge/dfx_0.11.1-yellowgreen) ![react-shield](https://img.shields.io/badge/react_18-blue) ![material-ui-shield](https://img.shields.io/badge/@material--ui-blueviolet) ![graphql-shield](https://img.shields.io/badge/GraphQL-red) ![contentful-shield](https://img.shields.io/badge/Contentful_API-yellow)

- [Introduction](#introduction)
- [Setting Up Local Development Environment](#setting-up-local-development-environment)
- [Connecting your Contentful API](#connecting-your-contentful-api)
- [Project File Structure and Design](#project-file-structure-and-design)
  * [Directory](#directory)
  * [Pages](#pages)
  * [Components](#components)
    + [Main components](#main-components)
    + [Contentful components](#contentful-components)
      - [Contentful Content Design](#contentful-content-design)
      - [Contentful Content Model Design](#contentful-content-model-design)
      - [Contentful Fields Design](#contentful-fields-design)
  * [Utilities](#utilities)
    + [Contentful Query](#contentful-query)
    + [Contentful Service](#contentful-service)

## Introduction
This is a boilerplate for you to easily setup and deploy a React website with Contentful CMS onto the Internet Computer blockchain.

The boilerplate will get you setup with the structure of a blog. There are features like listing of multiple posts, viewing of an individual post, pagination and search.

You can create any kind of content in Contentful, like property listings, car listings, even eCommerce products, and then edit the code in this boilerplate to load your content through the Contentful API.

Have fun!

## Setting Up Local Development Environment
1. Install [DFINITY SDK][install-sdk] to run dfx commands.
2. Clone [this][git-repo-url] repository.
3. Install dependencies ```npm install --legacy-peer-deps```. [⁉️][react18-mui-issue]
4. Run ```dfx start``` on a terminal to start server.
5. Run ```dfx deploy``` on another terminal to install the react application to the server.

View the application on ```localhost://8000/?canisterId=[your canisterId]```

![ScreenShot](screenshot.png)

During **development**, if you come across ```Could not find a canister id to forward to.```,  ensure the path ends with ```?canisterId=[your canisterId]``` 

For development, you can create another react project and install the same dependencies. Copy the `component/`, `pages/` and `util/` folders into the new project `src/` and replace the `<App />` element in `index.js` with the new `<App />` from `pages/App.jsx`. 


Dependencies for development react app (with MUI)
```
"dependencies": {
    "@emotion/react": "^11.10.0",
    "@emotion/styled": "^11.10.0",
    "@material-ui/core": "^4.12.4",
    "@mui/material": "^5.10.1",
    "@mui/styles": "^5.9.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```
Install Material UI for React 18 
`npm install @material-ui/core @mui/styles @mui/material @emotion/react @emotion/styled --legacy-peer-deps`
  
OR copy the dependencies and `npm install --legacy-peer-deps`

## Connecting your Contentful API 
New to Contentful? Official guide for creating space https://www.contentful.com/help/contentful-101/

After creating a space in [Contentful][contentful-api], you can create an API key.
Go to Settings - Space Settings > API keys and add an API key.
Take note of your Space ID and access tokens.

Content Delivery API - access token is used retrieve published content.

Content Preview API - access token is used to retrieve unpublished content.

Use [GraphiQL][contentful-graphql] to test your GraphQL queries and preview content.
`` https://graphql.contentful.com/content/v1/spaces/{space-id}/explore?access_token={access-token} ``
## Project File Structure and Design
### Directory
index.html - root
index.jsx - this file renders JSX into index.html
index.css - main styles
-- pages/ - Application pages which contains reusable components
-- components/ - Components that can potentially be reused
-- utils/ - service files
### Pages 
Create new pages in this folder and define them in `App.jsx`.
Take note: file extension jsx requires `import React from "react";`.
```
import Home from "./Home";
import Test from "./Test";
...
const pages = [ // define your pages here
        { name: "Home", path: "/", element: <Home /> },
        { name: "Test", path: "/test", element: <Test /> },
    ];
```
Don't forget to import your JSX Element.
### Components
#### Main components
[Design a general but focused component][thinking-react]

Explore breakdown of the `<LatestBlogPosts /> `component which mainly includes component states, styles, layout and handles.

Fetching data in the main component with **Contentful Query and Contentful Service**
```
const query_service = new Contentful_Query();
const content_service = new Contentful_Service();
            
const content_query = query_service.getContentQuery(...);
const content_data = await content_service.getDeliveryContent(content_query);
if (content_data) {...}
```


The main component acts as a controller for the page and the component services
#### Contentful components
Explore the `<Post />, <PostList />, <PostType />`, `<Fields />` components.
##### Contentful Content Design
In `Post.jsx`, the `<Post />`, `<PostList />` and `<PostListItem />` are different design JSX elements derived from the **Contentful *Content***. These are children components of the main component `<LatestBlogPosts />` defined with different designs of the *Content*. 
|State|JSX Element|
|--|--|
|Many Posts|`<PostList />`|
|One Post|`<Post />`|

Post will look different depending on the state of `<LatestBlogPosts />` 
##### Contentful Content Model Design
In `PostType.jsx`, the `<PostType />` JSX element is derived from the **Contentful *Content Model***. Handles the type of ***Content Model*** to display and contains the different types of ***Content Model*** design structure.

Post Type is determined by 2 factors
-- Post Content Design
-- Post Content Data

This table shows children JSX elements of the Post Content Design based on Post Content Data that has no image, an image, images.
||`<Post />`|`<PostList />`|
|---|---|---|
|No Media|`<PostWithNoMedia />`|`<ListPostWithNoMedia />`|
|An Image|`<PostWithAnImage />`|`<ListPostWithAnImage />`|
|Images|`<PostWithImages />`|`<ListPostWithImages />`|

Style classes are passed into the design of these elements.
##### Contentful Fields Design 
In `Fields.jsx`, these JSX elements are responsible for processing data into simple components. Keep the design simple and don't be afraid add more.

E.g.:
Identify the data structure passed from the API of a **Contentful Content Model** field. Use [GraphiQL][contentful-graphql] to see JSON results.
```
image{
    title: "test"
    url: "https://..."
    width: 200
    height: 100
}
```
Handle data and display in simple components. 
`<img src={image.url} alt={image.title} width={image.width} height={image.height} />`

You can use the collection of *Fields* elements to build many ***Content Model*** designs.
### Utilities
This folder contains contentful services (util/contentful/)
#### Contentful Query
Define graphql queries in `queries.js` relative to the main component.
E.g. Add into stored_queries the name of the main component "SomeMainComponent" as the object name.
```
stored_queries = {
    "LatestBlogPosts" : {
        content: function(limit, skip){
            return `...`;
        }
        pagination: `...`;
    },
    "SomeMainComponent":{
        ...
    }
}
```
A main component can have many queries, if an argument is required to pass in for the query it can be a function instead of a string with `` quotes.

These functions below are used to identify the stored query
```
getContentQuery(component, limit, skip) {
    return this.stored_queries[component].content(limit, skip);
}
getPaginationQuery(component) {
    return this.stored_queries[component].pagination;
}
```
This query helper is called in the main component to get the query before passing it into the **Contentful Service**.
#### Contentful Service
Import Contentful API tokens and spaceId into `service.js`.

This helper is called to fetch Contentful data for the main component.

   [install-sdk]: <https://internetcomputer.org/docs/current/developer-docs/build/install-upgrade-remove/>
   [git-repo-url]: <https://github.com/therealbryanho/dfinity-websitewithcms>
   [contentful-api]: <https://app.contentful.com/>
   [contentful-graphql]: <https://www.contentful.com/developers/docs/references/graphql/#/introduction/basic-api-information/>
   [graphiql]:<https://graphql.contentful.com/content/v1/spaces/53t36x95ru0m/explore?access_token=OCLvDwk6HjdpR3OxvqhLaD-zuXLwo2QYEueE9pYJZuU />
   [thinking-react]: <https://reactjs.org/docs/thinking-in-react.html/>
   [react18-mui-issue]:<https://stackoverflow.com/questions/71713111/mui-installation-doesnt-work-with-react-18 />
