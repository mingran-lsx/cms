// {
//   "id": 38,
//   "name": "系统总览",
//   "type": 1,
//   "url": "/main/analysis",
//   "icon": "el-icon-monitor",
//   "sort": 1,
//   "createAt": "2021-04-19T14:11:02.000Z",
//   "updateAt": "2021-08-20T06:59:55.000Z",
//   "children": [
//   {
//     "id": 39,
//     "url": "/main/analysis/overview",
//     "name": "核心技术",
//     "sort": 106,
//     "type": 2,
//     "children": null,
//     "createAt": "2021-01-02 18:09:11.000000",
//     "parentId": 38,
//     "updateAt": "2021-08-19 15:54:41.000000"
//   },
//   {
//     "id": 40,
//     "url": "/main/analysis/dashboard",
//     "name": "商品统计",
//     "sort": 107,
//     "type": 2,
//     "children": null,
//     "createAt": "2021-01-02 18:09:22.000000",
//     "parentId": 38,
//     "updateAt": "2021-08-19 15:56:08.000000"
//   }
// ]
// },


const tabelConfig = {
  title: '菜单列表',
  propList: [
    {
      label: "菜单名称",
      prop: "name",
      minWidth: "100",
      slotName: "name"
    },
    {
      label: "类型",
      prop: "type",
      minWidth: "60",
      slotName: "type"
    },
    {
      label: "菜单路径",
      prop: "url",
      minWidth: "100",
      slotName: "url"
    },
    {
      label: "图标",
      prop: "icon",
      minWidth: "100",
      slotName: "icon"
    },
    {
      label: "按钮权限",
      prop: "permission",
      minWidth: "100",
      slotName: "permission"
    },
    {
      label: "创建时间",
      prop: "createAt",
      minWidth: "200",
      slotName: "createAt"
    },

    {
      label: "更新时间",
      prop: "updateAt",
      type: "text",
      minWidth: "200",
      slotName: "updateAt"
    },
    {
      label: "操作",
      prop: "handle",
      type: "action",
      minWidth: "120",
      slotName: "handle",
    },
  ],
  isShowIndex: true,
  isShowSelect: true,
  childrenProps: {
    rowKey: 'id',
    treeProps: {
      children: 'children',
    }
  }
    ,
  isShowFooter: false,
}


export default tabelConfig;
