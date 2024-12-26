var posts=["2024/12/26/Hello图床使用/","2024/12/26/自动答题脚本/","2024/12/26/Vue-js-3的响应式/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };