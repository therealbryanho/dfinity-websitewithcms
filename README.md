# ♾️ DFINITY REACT CONTENTFUL CMS 
![DFINITY](https://dfinity.org/logo.svg)

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

### 📂 Project Design and File Structure
- 3 Folders
    1. pages - Application pages which contains reusable components
    2. components - Components that can potentially be able to reuse
    3. utils - service files
    
#### 📄 Pages
Create new pages in this folder and define them in App.js.
```
const pages = [ // define your pages here
        { name: "Home", path: "/", element: <Home /> },
        { name: "Test", path: "/test", element: <Test /> },
    ];
```
Don't forget to import your JSX Element.

#### ➿	Components
Add your main components
- [Envision a generally focused component][thinking-react]
- Explore breakdown of the ```<LatestBlogPosts />``` Component. 
- Include states, styles, layout. Basically handle operations and display.

Add contentful model components
- Explore ```<PostList />, <Post />, <PostType />```
- These JSX element defines the structure which takes **Contentful Content** data and turn it into components.
- Further more, explore Fields.jsx which contains Contenful components.
- In Fields.jsx, these component are based on the **Contenful Content Model** which makes it easier to build **Contentful Content** components

Customizing Contentful Fields
- As mentioned above in Fields.jsx, the recommended way to develop these components is to find out the data passed from the API of a **Contentful Content Model** to process the data and customize the component.

#### ⚒️ Utilities (utils)


   [install-sdk]: <https://internetcomputer.org/docs/current/developer-docs/build/install-upgrade-remove/>
   [git-repo-url]: <https://github.com/therealbryanho/dfinity-websitewithcms>
   [contentful-api]: <https://app.contentful.com/>
   [contentful-graphql]: <https://www.contentful.com/developers/docs/references/graphql/#/introduction/basic-api-information/>
   [graphiql]:<https://graphql.contentful.com/content/v1/spaces/53t36x95ru0m/explore?access_token=OCLvDwk6HjdpR3OxvqhLaD-zuXLwo2QYEueE9pYJZuU />
   [thinking-react]: <https://reactjs.org/docs/thinking-in-react.html/>
