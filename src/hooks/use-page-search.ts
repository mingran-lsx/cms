import {ref} from "vue";
import PageContent from "@/components/page-content";

export function usePageSearch(){
    const PageContentRef = ref<InstanceType<typeof PageContent>>();
    const emitSearch = (query:any) => {
        PageContentRef.value?.getPageList(query);
    }
    const emitReset = () => {
        PageContentRef.value.getPageList();
    }
    return {
        PageContentRef,
        emitSearch,
        emitReset
    }
}