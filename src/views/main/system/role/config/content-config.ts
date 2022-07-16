

 const config = {
     propList : [
         {
             label: "角色名称",
             prop: "name",
             minWidth: "100",
             slotName: "name"
         },
         {
             label: "权限介绍",
             prop: "intro",
             minWidth: "100",
             slotName: "intro"
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