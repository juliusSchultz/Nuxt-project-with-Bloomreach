# Nuxt.js project connected to Bloomreach CMS

This repository provides a template for Nuxt.js web projects containing content to be generated from the Bloomreach CMS.

## CMS Setup
You can use your own account or the officially available public developer environment to access the Bloomreach Experience Manager. See the [Documentation](https://documentation.bloomreach.com/content/docs/log-in-to-the-developer-environment) for details.

You can login to test this setup via the link https://developers.bloomreach.io/cms/?0 with the following credentials:

Username: bloomreach.trial+user01@gmail.com  
Password: z]N76}3vQRX7y8mt

1. create a channel in the Experience Manager section and give it a name, f.ex. "example-channel"
2. create a project in the project section by entering a project name and ticking "development project".
3. add the channel to it
4. clicking on the settings wheel in the project section next to channel name leads to the project settings. Change the project frontend url to the url where the app is currently running, f.ex. http://localhost:3000/
5. add the site configuration for your components to your project. You can do that using the components menu in the Site development(beta) section. F.ex. add the site configuration for the BrBanner like this  
   1. Add a new Component configuration
   2. ad the following parameters:  
   Display name: BrBanner  
   Extends: base/component  
   Ctype: BrBanner
   3. Click on "Create"
   4. In the properties menu, you need to add any properties that you want the component to use. In the case of the BrBanner, the property configuration could contain one simple property with the following attributes.  
      Name: bannerText  
      Value type: String
   5. Click on "Save"

# Application setup to connect CMS
First you need to create an .env file that contains all the environment variables. You can do this by copying the .env.template and removing the .template extension.  

To connect your application to a channel created in the CMS, you can add the following environment variables 
1. As the username, you can insert the domain of the URL that is shown before login to the Experience manager that comes right after https://.
   So if you have the URL https://developers.bloomreach.io/cms/?0 the necessary value for the field username would be developer.bloomreach.io.
2. As the channel name, you can add the name of a created channel and replace spaces in the channel name with a dash.

To fill the components of the application you first need to run the application, f.ex via npm run dev.
Now go to the projects section and open your channel.

You should now see a lock in the content section of your application. To finally make your content editable you can click on "Page", which opens a menu in which "Add to project" can be selected.
It is now possible to add components via the components section. if you want to add further components you need to adapt the following: 
1. add the component source code to your application
2. add the component to the mapping in the _.vue
3. add the adequate site configuration

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
