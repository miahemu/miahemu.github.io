var posts=["2025/03/22/hello-world/","2025/03/22/mianshiti/JavaSE相关面试题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };