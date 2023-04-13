import axios from "axios";
import cookie from 'cookie';
import { ref } from 'vue';

export const useConfiguration = () => {
    const accountName = 'diva-e-preview.bloomreach.io';
    const channelName = 'deployed-channel';
    const pathName = '/'
    const pathSearch = '?token=eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI4ZGY5NGFiOS03MzY5LTQyMjYtYWZiOC0wNWIwNjFlZGEyNDkifQ.E16C0lDC_89ts8_-CtxRD1-xkCa8e6EnWNbn6-TNhn3Ep8LhRdclEFxHpr2obliyZHJlP3SIoQUSGqqKnqL87TULOP7MS4MehWNSm-iqq05sjH6IPIg5u5XG-4EQQF2mNE14CahZAZlrfQwZbJbL1Wa5qTS4NqOME7ueVbyTCc4R1WVQ9Ar8UjMzYWZjZFXA5SraI6guIrvJnGTylsBqHFPcPe02PLM-6e8Bmy6nUfpkj3546rniiTsWnKRcFRdbNEMuZ-paMYmqcZOh8MLU31qGTpwzPj0sw4J0MveMRCPOjrCzUwag8pzOfy4t1MCL5-HWh4STuM1b8UMYkpjxlw&server-id=cms-blue-diva-e-preview-one-669448544f-pgdh6&endpoint=https%3A%2F%2Fdiva-e-preview.bloomreach.io%2Fdelivery%2Fsite%2Fv1%2Fchannels%2Fdeployed-channel%2Fpages'

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
