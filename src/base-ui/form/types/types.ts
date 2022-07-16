type IFormItemType = "input" | "password" | "select" | "datepicker";

export interface IFormItem{
    label: string;
    name?: string;
    type?: IFormItemType;
    placeholder?: string;
    value?: any;
    options?: any[];
    rules?: any[];
    otherOptions?: any;
    prop?: any;
    field:string;
    isHidden?: boolean;

}

export interface IForm{
    labelWidth?: string;
    formItems: IFormItem[];
    colLayout:any;
    itemLayout:any;
}