# DFINITY REACT CONTENTFUL CMS

## Getting Started

### Setting Up Local Development Environment
Install [DFINITY SDK][install-sdk] to run dfx commands.

Clone [this][git-repo-url] repository.

Install dependencies ```npm install```.

Run ```dfx start``` on a terminal to start server.

Run ```dfx deploy``` on another terminal to install the react application to the server.

View the application on ```localhost://8000/?canisterId=[your canisterId]``` which can be found in your terminal after ```dfx deploy```.

### Connecting your Contentful API 

Create a space in [Contentful][contentful-api]

Go to Settings - Space Settings > API keys and add an API key.

Take note of your Space ID and access tokens.
> put into react app unconfirmed location



   [install-sdk]: <https://internetcomputer.org/docs/current/developer-docs/build/install-upgrade-remove/>
   [git-repo-url]: <https://github.com/therealbryanho/dfinity-websitewithcms>
   [contentful-api]: <https://app.contentful.com/>
