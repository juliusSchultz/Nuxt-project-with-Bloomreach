import BrBanner from '~/components/BrBanner';
import Banner from '~/components/Banner';
import SharedBanner from '~/components/SharedBanner';
import SharedFooter from '~/components/SharedFooter';
import SharedHeader from '~/components/SharedHeader';
import StageComponent from '~/components/StageComponent';
import TheHeader from '~/components/TheHeader';
import TheFooter from '~/components/TheFooter';
import { ref } from 'vue';

export const useMapping = () => {
    const mapping = ref({ BrBanner, StageComponent, TheHeader, TheFooter, Banner, SharedBanner, SharedFooter, SharedHeader })

    return { mapping }
}
