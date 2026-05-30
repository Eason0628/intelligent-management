import { RouteObject } from "react-router-dom";
import { componentMap } from "../route/routerMap";
interface MenuType{
    icon:string;
    key:string;
    label:string;
    children?:MenuType[]
}
// RouteObject是路由对象类型，createBrowserRouter里面的对象类型
export function generateRoutes(menu:MenuType[]):RouteObject[]{
    return menu.map((item:MenuType)=>{
        const hasChildren=item.children
        let routerObj:RouteObject={
            path:item.key,
            element:hasChildren?null:<>{componentMap[item.key]}</>
        };
        if(item.children){
            routerObj.children=generateRoutes(item.children)
        }
        return routerObj
    })

}