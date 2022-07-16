

 const config = {
     propList : [
         {
             label: "用户名",
             prop: "name",
             minWidth: "100",
             slotName: "name"
         },
         {
             label: "真实姓名",
             prop: "realname",
             minWidth: "100",
             slotName: "realname"
         },
         {
             label: "手机号码",
             prop: "cellphone",
             minWidth: "180",
             slotName: "cellphone"
         },
         {
             label:"状态",
             prop:"enable",
             minWidth:"80",
             slotName:"enable"
         },
         {
             label:"创建时间",
             prop:"createAt",
             minWidth:"180",
             slotName:"createAt"
         },{
             label:"更新时间",
             prop:"updateAt",
             minWidth:"180",
             slotName:"updateAt"
         },
         {
             label: "操作",
             prop: "handle",
             type: "action",
             minWidth: "150",
             slotName: "handle",
         },
     ],
    title: "用户列表",
 }
 export default config