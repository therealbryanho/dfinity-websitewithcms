# DFINITY REACT CONTENTFUL CMS

## Getting Started

Install [DFINITY SDK][install-sdk] to run dfx commands.

Clone [this][git-repo-url] repository.

Install dependencies ```npm install```.

Run ```dfx start``` on a terminal to start server.

Run ```dfx deploy``` on another terminal to install the react application to the server.

View the application on ```localhost://8000/?canisterId=[your canisterId]``` which can be found in your terminal after ```dfx deploy```.

## Connecting your Contentful API

Log in to [Contentful][contentful-api] to manage your spaces, contents.

Create a space if you have not.

Go to Settings > Space Settings > API keys and add an API key.

Take note of your Space ID and access tokens.
> put into react app unconfirmed location



   [install-sdk]: <https://internetcomputer.org/docs/current/developer-docs/build/install-upgrade-remove/>
   [git-repo-url]: <https://github.com/therealbryanho/dfinity-websitewithcms>
   [contentful-api]: <https://www.contentful.com>
   [node.js]: <http://nodejs.org>
