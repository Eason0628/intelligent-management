### `npm start`

### `npm run build`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

1.react-app-env.d.ts 是React类型声明文件，用于在React项目中使用TypeScript。


3.项⽬环境搭建
1.使⽤creaet-react-app的ts模板创建项⽬
npx create-react-app my-app --template [template-name]
npx create-react-app my-app --template typescript
2.安装react-router
npm install react-router-dom
3.安装 antd
npm install antd --save

4.基础路由配置


5.基础页面
1.home
2.user
3.estate car
4.finance
5.contract surrender
6.bill
7.merchants
8.todo:运营管理页面开发257
9.equipment:封装table; 主要查看useDataList中type的使用
  1.为什么函数类型返回值是promise类型？
  2.Type封装


10.
.env文件定义的变量在所有环节都能被使用，开发、生产、测试环境,环境变量的定义必须以REACT_APP_开头，只识别这个前缀的变量，Vue是VUE_APP_API_开头的变量
.env.production:生产环境的配置文件
.env.test:测试环境的配置文件
.env.development:开发环境的配置文件

在调用的js里用process.env.REACT_APP_API_URL调用环境变量

.env.development中定义的环境变量只能在开发环境下被访问到
.env.production中定义的环境变量只能在打包后的项目中被访问到(生产环境)




