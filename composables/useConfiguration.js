import axios from "axios";
import cookie from 'cookie';
import { ref } from 'vue';

export const useConfiguration = () => {
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

    return { configuration }
}
