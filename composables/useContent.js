import { computed } from "vue";

export const useContent = (component, page) => {
    // simple property components
    const simplePropertiesContent = computed(() => component.getParameters());

    // document type components
    const document = computed(() => getPageContent(component?.getProperties()?.document) || {})
    const documentContent = computed(() => document?.value?.getData() || {})

    // customContentType components
    const componentContent = computed(() => component.getContent(page) || {})

    // helping methods
    const getPageContent = (item) => {
        return page?.getContent(item)
    }

    const extractUrlOfImage = (image) => {
        return getPageContent(image)?.getOriginal()?.getUrl()
    }

    const extractUrlOfLink = (link) => {
        return page.getContent(link)?.getUrl() || ''
    }

    return {
        simplePropertiesContent,
        documentContent,
        componentContent,
        document,
        extractUrlOfLink,
        extractUrlOfImage,
    }
}
