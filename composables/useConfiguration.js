import axios from "axios";
import { ref } from 'vue';

export const useConfiguration = () => {
    const accountName = 'diva-e-preview.bloomreach.io';
    const channelName = 'deployed-channel';
    const pathName = window.location.pathname
    const pathSearch = window.location.search

    const configuration = ref({
        path: `${pathName}${pathSearch}`,
        endpoint: `https://${accountName}/delivery/site/v1/channels/${channelName}/pages`,
        httpClient: axios,
    })

    return { configuration }
}
