import SxRequest from '@/services/index';

export const getPageListByPageInfo =function (pageUrl:string,pageInfo:any){
    // console.log('getPageListByPageInfo',pageUrl,pageInfo)
    return SxRequest.post({
        url:pageUrl,
        data:pageInfo
    });
}

export const addPageData =function (pageUrl:string,pageInfo:any){
    console.log('addPageData',pageUrl,pageInfo)
    return SxRequest.post({
        url:pageUrl,
        data:pageInfo
    });
}
export const updatePageData =function (pageUrl:string,pageInfo:any){
    // console.log('updatePageData',pageUrl,pageInfo)
    return SxRequest.patch({
        url:pageUrl,
        data:pageInfo
    });
}
export const deletePageDataById =function (pageUrl:string){
    // console.log('deletePageData',pageUrl,pageInfo)
    return SxRequest.delete({
        url:pageUrl,
    });
}