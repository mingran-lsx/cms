import PageModal from "@/components/page-modal";
import {ref} from "vue";
type cb = (item?:any) => void;
export function usePageModal(newFn: cb,editFn: cb) {
  const PageModalRef = ref<InstanceType<typeof PageModal>>();
  const defaultFormInfo =ref({});
  const handleEdit = (data: any) => {
    editFn(data); // 编辑回调
    defaultFormInfo.value = {...data};
    PageModalRef.value.DialogVisible = true;
  }
  const handleAdd = (data: any) => {
    newFn();//`newFn`是一个函数，用于注册新增按钮的事件
    defaultFormInfo.value={};
    PageModalRef.value.DialogVisible = true;
  }
  return {
    PageModalRef,
    defaultFormInfo,
    handleEdit,
    handleAdd
  }
}
