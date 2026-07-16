import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { HomePage } from '../pages/HomePage';

// 详情页/对比页按路由拆 chunk：prompts 数据、源码高亮、详情组件都不进首页主包
const StyleDetailPage = lazy(() =>
  import('../pages/StyleDetailPage').then((m) => ({ default: m.StyleDetailPage }))
);
const ComparePage = lazy(() =>
  import('../pages/ComparePage').then((m) => ({ default: m.ComparePage }))
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'style/:styleId',
        element: (
          <Suspense fallback={null}>
            <StyleDetailPage />
          </Suspense>
        ),
      },
      {
        path: 'compare/:idA/:idB',
        element: (
          <Suspense fallback={null}>
            <ComparePage />
          </Suspense>
        ),
      },
    ],
  },
]);
