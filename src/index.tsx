import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// @ts-ignore: SCSS side-effect import without module declaration
import './index.scss';
// 引入mockjs
import "./mock";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>
);


reportWebVitals();
