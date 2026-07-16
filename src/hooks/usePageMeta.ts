import { useEffect } from 'react';

/** 客户端路由切换时同步 document.title 与 meta description（首屏静态值由构建期 postbuild-seo 注入） */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', description);
    }
  }, [title, description]);
}
