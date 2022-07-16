import {IForm} from "@/base-ui/form";

export const formConfig:IForm = {
  formItems: [
    {
      field: "name",
      label: '角色名称',
      prop: 'name',
      type: 'input',
      placeholder: '请输入角色名称'
    },
    {
      field: "intro",
      label: "权限介绍",
      type: "input",
      prop: "intro",
      placeholder: "请输入权限介绍",
    },

    {
      field: "time",
      label: '创建时间',
      prop: 'time',
      type: 'datepicker',
      placeholder: '请选择时间',
      otherOptions: {
        "start-placeholder": '开始时间',
        "end-placeholder": '结束时间',
        "type": 'daterange'
      }
    }
  ],
  labelWidth:"80px",
  itemLayout: {
    padding: '10px 40px',
  },
  colLayout: {
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24,
  }
}
