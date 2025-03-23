var posts=["2025/03/22/JavaSE相关面试题/","2025/03/23/Java集合相关面试题/","2025/03/23/SSM框架相关面试题/","2025/03/22/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"Spring","link":"https://spring.io/projects/spring-framework/","avatar":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/220px-Spring_Boot.svg.png","descr":"简化了 Java 企业应用的开发和部署。"},{"name":"Redis","link":"https://redis.io/docs/latest/","avatar":"https://www.stackery.io/assets/images/posts/redis-cache-cluster-support/featured.svg","descr":"高性能的内存键值数据库，用于缓存和实时数据处理。"},{"name":"MongoDB","link":"https://www.mongodb.com/docs/manual/","avatar":"https://cdn.prod.website-files.com/61ddd0b42c51f89b7de1e910/6695bdc587b22146ac63f811_651dd0fec46ea0f3566d1ef6_mongodb.svg","descr":"灵活可扩展的文档型NoSQL数据库。"},{"name":"Golang","link":"https://go.dev/doc/","avatar":"https://miro.medium.com/v2/resize:fit:600/1*i2skbfmDsHayHhqPfwt6pA.png","descr":"一种高效并发的编程语言，适合构建分布式系统。"},{"name":"Vue","link":"https://cn.vuejs.org/guide/introduction.html","avatar":null,"descr":"一款轻量级的前端框架，用于构建用户界面和单页应用。"},{"name":"Docker","link":"https://docs.docker.com/","avatar":null,"descr":"一个容器化平台，用于打包、分发和运行应用程序。"},{"name":"玦尘","link":"https://blog.csdn.net/weixin_74199893/article/details/145559835","avatar":"https://pic1.imgdb.cn/item/67e01dcb88c538a9b5c523cb.png","descr":"如何设计一个高效、稳定的秒杀系统？","siteshot":"https://w.wallhaven.cc/full/85/wallhaven-8529vj.png","color":"vip","tag":"技术"},{"name":"玦尘","link":"https://blog.csdn.net/weixin_74199893/article/details/145568727","avatar":"https://pic1.imgdb.cn/item/67e01dcb88c538a9b5c523cb.png","descr":"如何设计一个RPC框架？","siteshot":"https://w.wallhaven.cc/full/5g/wallhaven-5g9ed8.png","color":"vip","tag":"技术"},{"name":"玦尘","link":"https://blog.csdn.net/weixin_74199893/article/details/145874090","avatar":"https://pic1.imgdb.cn/item/67e01dcb88c538a9b5c523cb.png","descr":"如何设计一个动态线程池？","siteshot":"https://w.wallhaven.cc/full/zy/wallhaven-zy1xjw.png","color":"vip","tag":"技术"},{"name":"玦尘","link":"https://blog.csdn.net/weixin_74199893/article/details/146047838","avatar":"https://pic1.imgdb.cn/item/67e01dcb88c538a9b5c523cb.png","descr":"常用验证码登录流程设计","siteshot":"https://w.wallhaven.cc/full/3l/wallhaven-3lx6gv.png","color":"vip","tag":"技术"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };