<template>
  <div id="app">
    <br-page :configuration="configuration" :mapping="mapping">
      <template v-slot:default="props">
        <header>
          <br-component component="menu" />
        </header>
        <section>
          <br-component component="main" />
        </section>
        <footer>
          <br-component component="footer" />
        </footer>
      </template>
    </br-page>
  </div>
</template>

<script>
import MyComponent from '~/components/MyComponent';
import BrBanner from '~/components/BrBanner';
import Banner from '~/components/Banner';
import SharedBanner from '~/components/SharedBanner';
import SharedFooter from '~/components/SharedFooter';
import SharedHeader from '~/components/SharedHeader';
import StageComponent from '~/components/StageComponent';
import TheHeader from '~/components/TheHeader';
import TheFooter from '~/components/TheFooter';
import axios from "axios";
import cookie from 'cookie';
import { ref } from 'vue';


export default {
  name: 'App',
  setup(){
    const accountName = process.env.ACCOUNT_NAME;
    const channelName = process.env.CHANNEL_NAME;
    const pathName = window.location.pathname
    const pathSearch = window.location.search

    const PREVIEW_TOKEN_KEY = 'token';
    const PREVIEW_SERVER_ID_KEY = 'server-id';
    // Read a token and server id from the query string
    const searchParams = new URLSearchParams(window.location.search);
    const queryToken = searchParams.get(PREVIEW_TOKEN_KEY);
    const queryServerId = searchParams.get(PREVIEW_SERVER_ID_KEY);

    const cookies = cookie.parse(document.cookie);

    // Prioritize values from the query string because cookies might be outdated.
    const authorizationToken = queryToken ?? cookies[PREVIEW_TOKEN_KEY];
    const serverId = queryServerId ?? cookies[PREVIEW_SERVER_ID_KEY];

    // Save the values from the query string to have ability to restore them when switch back from legacy page to the SPA-SDK rendered page.
    if (queryToken) {
      document.cookie = cookie.serialize(PREVIEW_TOKEN_KEY, queryToken);
    }

    if (queryServerId) {
      document.cookie = cookie.serialize(PREVIEW_SERVER_ID_KEY, queryServerId);
    }

    const configuration = ref({
      path: `${pathName}${pathSearch}`,
      endpoint: `https://${accountName}/delivery/site/v1/channels/${channelName}/pages`,
      httpClient: axios,
      // Provide authorization token and server id if they exist to the SPA-SDK initialization method.
      ...(authorizationToken ? { authorizationToken } : {}),
      ...(serverId ? { serverId } : {}),
    })

    const mapping = ref({ BrBanner, StageComponent, MyComponent, TheHeader, TheFooter, Banner, SharedBanner, SharedFooter, SharedHeader })

    return {
      configuration,
      mapping,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
