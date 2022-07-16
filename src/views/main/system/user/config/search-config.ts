import {IForm, IFormItem} from "@/base-ui/form";
export const formConfig:IForm = {
    formItems: [
        {
            field: "id",
            label: "ID",
            type: "input",
            prop: "id",
            placeholder: "请输入ID",
        },
        {
            field: "name",
            label: '用户名',
            prop: 'name',
            type: 'input',
            placeholder: '请输入用户名'
        },
        {
            field: "realname",
            label: '真实姓名',
            prop: 'realname',
            type: 'input',
            placeholder: '请输入真实姓名'
        },    {
            field: "cellphone",
            label: '手机号',
            prop: 'cellphone',
            type: 'input',
            placeholder: '请输入手机号'
        },
        {
            field: "enable",
            label: '用户状态',
            prop: 'enable',
            type: 'select',
            placeholder: '请选择用户状态',
            options: [
                {
                    label: '启用',
                    value: '1'
                },
                {
                    label: '禁用',
                    value: '0'
                },
            ]
        },
        {
            field: "createAt",
            label: '创建时间',
            prop: 'createAt',
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
