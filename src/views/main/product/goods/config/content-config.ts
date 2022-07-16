
// {
//   "id": 183,
//   "name": "吊带背心女夏2018秋季新款内搭吊带衫短款性感修身针织打底衫上衣显瘦",
//   "oldPrice": "43",
//   "newPrice": "30",
//   "desc": "吊带背心女夏2018秋季新款内搭吊带衫短款性感修身针织打底衫上衣显瘦",
//   "status": 1,
//   "imgUrl": "http://s11.mogucdn.com/mlcdn/17f85e/180927_5i77e04lhaalbg3dai0j4588lbahh_640x960.jpg_560x999.jpg",
//   "inventoryCount": 6285,
//   "saleCount": 2,
//   "favorCount": 3,
//   "address": "天津",
//   "categoryId": 6,
//   "createAt": "2021-04-30T13:43:16.000Z",
//   "updateAt": "2021-04-30T13:43:16.000Z"
// },

const tabelConfig = {
    title: '商品列表',
    propList: [
        {
            label: "商品名称",
            prop: "name",
            minWidth: "100",
            slotName: "name"
        },
        {
            label: "商品价格",
            prop: "newPrice",
            minWidth: "100",
            slotName: "newPrice"
        },

        {
            label: "商品描述",
            prop: "desc",
            minWidth: "100",
            slotName: "desc"
        },
        {
            label: "商品状态",
            prop: "status",
            minWidth: "100",
            slotName: "status"
        },
        {
            label: "商品图片",
            prop: "imgUrl",
            minWidth: "100",
            slotName: "imgUrl"
        },
        {
            label: "商品库存",
            prop: "inventoryCount",
            minWidth: "100",
            slotName: "inventoryCount"
        },
        // {
        //   label: "商品销量",
        //   prop: "saleCount",
        //   minWidth: "100",
        //   slotName: "saleCount"
        // },
        // {
        //   label: "商品收藏",
        //   prop: "favorCount",
        //   minWidth: "100",
        //   slotName: "favorCount"
        // },
        {
            label: "商品地址",
            prop: "address",
            minWidth: "100",
            slotName: "address"
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

}


export default tabelConfig;
