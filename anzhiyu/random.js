var posts=["2025/03/22/JavaSE相关面试题/","2025/03/23/Java集合相关面试题/","2025/03/23/SSM框架相关面试题/","2025/03/22/hello-world/","2025/03/24/后端高频笔试题/","2025/03/24/速通买卖股票的最佳时机/","2025/03/25/Redis相关面试题/","2025/03/24/MySQL相关面试题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"Spring","link":"https://spring.io/projects/spring-framework/","avatar":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/220px-Spring_Boot.svg.png","descr":"简化了 Java 企业应用的开发和部署。"},{"name":"Redis","link":"https://redis.io/docs/latest/","avatar":"https://www.stackery.io/assets/images/posts/redis-cache-cluster-support/featured.svg","descr":"高性能的内存键值数据库，用于缓存和实时数据处理。"},{"name":"MongoDB","link":"https://www.mongodb.com/docs/manual/","avatar":"https://cdn.prod.website-files.com/61ddd0b42c51f89b7de1e910/6695bdc587b22146ac63f811_651dd0fec46ea0f3566d1ef6_mongodb.svg","descr":"灵活可扩展的文档型NoSQL数据库。"},{"name":"Golang","link":"https://go.dev/doc/","avatar":"https://miro.medium.com/v2/resize:fit:600/1*i2skbfmDsHayHhqPfwt6pA.png","descr":"一种高效并发的编程语言，适合构建分布式系统。"},{"name":"Vue","link":"https://cn.vuejs.org/guide/introduction.html","avatar":null,"descr":"一款轻量级的前端框架，用于构建用户界面和单页应用。"},{"name":"Docker","link":"https://docs.docker.com/","avatar":null,"descr":"一个容器化平台，用于打包、分发和运行应用程序。"},{"name":"玦尘","link":"https://blog.csdn.net/weixin_74199893/article/details/145559835","avatar":"https://pic1.imgdb.cn/item/67e01dcb88c538a9b5c523cb.png","descr":"如何设计一个高效、稳定的秒杀系统？","siteshot":"https://w.wallhaven.cc/full/85/wallhaven-8529vj.png","color":"vip","tag":"系统设计"},{"name":"玦尘","link":"https://blog.csdn.net/weixin_74199893/article/details/145874090","avatar":"https://pic1.imgdb.cn/item/67e01dcb88c538a9b5c523cb.png","descr":"如何设计一个动态线程池？","siteshot":"https://w.wallhaven.cc/full/zy/wallhaven-zy1xjw.png","color":"vip","tag":"系统设计"},{"name":"玦尘","link":"https://blog.csdn.net/weixin_74199893/article/details/146047838","avatar":"https://pic1.imgdb.cn/item/67e01dcb88c538a9b5c523cb.png","descr":"常用验证码登录流程设计","siteshot":"https://w.wallhaven.cc/full/3l/wallhaven-3lx6gv.png","color":"speed","tag":"场景"},{"name":"芦文超","link":"https://mp.weixin.qq.com/s/4T_S7nR8-HXJ59IbK4FBWQ","avatar":"https://pic1.imgdb.cn/item/67e0ea4688c538a9b5c59eb3.png","descr":"B站千亿级点赞系统服务架构设计","siteshot":"https://w.wallhaven.cc/full/md/wallhaven-mdjyxy.png","color":"speed","tag":"场景"},{"name":"玦尘","link":"https://blog.csdn.net/weixin_74199893/article/details/145568727","avatar":"https://pic1.imgdb.cn/item/67e01dcb88c538a9b5c523cb.png","descr":"如何设计一个RPC框架？","siteshot":"https://w.wallhaven.cc/full/5g/wallhaven-5g9ed8.png","color":"vip","tag":"系统设计"},{"name":"只设计不码码","link":"https://skrshop.tech/#/","avatar":"https://pic1.imgdb.cn/item/67e0ea4688c538a9b5c59eb3.png","descr":"电商设计手册 | SkrShop","siteshot":"https://w.wallhaven.cc/full/nm/wallhaven-nmdwjk.jpg","color":"vip","tag":"系统设计"},{"name":"JavaGuide","link":"https://javaguide.cn/system-design/security/basis-of-authority-certification.html","avatar":"https://javaguide.cn/logo.svg","descr":"认证授权基础概念详解","siteshot":"https://w.wallhaven.cc/full/qd/wallhaven-qdwydq.jpg","color":"speed","tag":"场景"},{"name":"vivo互联网技术","link":"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI4NjY4MTU5Nw==&action=getalbum&album_id=1500522652925526016&scene=173&from_msgid=2247496259&from_itemidx=1&count=3&nolastread=1#wechat_redirect","avatar":"https://pic1.imgdb.cn/item/67e0fed788c538a9b5c5a656.jpg","descr":"vivo全球设计系列文章","siteshot":"https://w.wallhaven.cc/full/q6/wallhaven-q689jr.jpg","color":"vip","tag":"系统设计"},{"name":"吴海涛","link":"https://mp.weixin.qq.com/s/iZ9BX6cCCp_TB-SC3knuew","avatar":"https://pic1.imgdb.cn/item/67e0ff6c88c538a9b5c5a675.png","descr":"如何从零搭建10万级 QPS 大流量、高并发优惠券系统","siteshot":"https://w.wallhaven.cc/full/vg/wallhaven-vg5zwl.jpg","color":"vip","tag":"系统设计"},{"name":"大愚Talk","link":"https://juejin.cn/post/6844903794099273742","avatar":"https://pic1.imgdb.cn/item/67e0ea4688c538a9b5c59eb3.png","descr":"设计交易系统(概念篇)","siteshot":"https://w.wallhaven.cc/full/85/wallhaven-85zm9y.jpg","color":"vip","tag":"系统设计"},{"name":"JavaGuide","link":"https://mp.weixin.qq.com/s/SCrTwoCQUZ8fNdWp3wdBVw","avatar":"https://javaguide.cn/logo.svg","descr":"微博点赞系统设计","siteshot":"https://pic1.imgdb.cn/item/67e0fd5088c538a9b5c5a5e1.png","color":"speed","tag":"场景"},{"name":"大愚Talk","link":"https://juejin.cn/post/6844903800340217864","avatar":"https://pic1.imgdb.cn/item/67e0ea4688c538a9b5c59eb3.png","descr":"设计交易系统(实干篇)","siteshot":"https://w.wallhaven.cc/full/x8/wallhaven-x8q3gz.png","color":"vip","tag":"系统设计"},{"name":"王浩","link":"https://mp.weixin.qq.com/s/IMfVI7rdcTun3DK1wbqOQw","avatar":"https://pic1.imgdb.cn/item/67e0ff6c88c538a9b5c5a675.png","descr":"2022 春节抖音视频红包系统设计与实现","siteshot":"https://w.wallhaven.cc/full/2k/wallhaven-2kdldx.jpg","color":"vip","tag":"系统设计"},{"name":"玦尘","link":"https://blog.csdn.net/weixin_74199893/article/details/146048700","avatar":"https://pic1.imgdb.cn/item/67e01dcb88c538a9b5c523cb.png","descr":"40亿个QQ号,限制1G内存,如何去重?","siteshot":"https://w.wallhaven.cc/full/jx/wallhaven-jxqw8w.png","color":"speed","tag":"场景"},{"name":"Jack Jiang","link":"https://www.zhihu.com/question/22623475/answer/2541075908","avatar":"https://pic1.imgdb.cn/item/67e0ea4688c538a9b5c59eb3.png","descr":"微信红包的技术原理是怎样的？","siteshot":"https://w.wallhaven.cc/full/z8/wallhaven-z8566j.jpg","color":"vip","tag":"系统设计"},{"name":"一条IT","link":"https://mp.weixin.qq.com/s/4OqYCnEV3xTmXYGT2w7ltg","avatar":"https://pic1.imgdb.cn/item/67e0ea4688c538a9b5c59eb3.png","descr":"如何设计百万人抽奖系统……","siteshot":"https://w.wallhaven.cc/full/rd/wallhaven-rdm99j.png","color":"vip","tag":"系统设计"},{"name":"爱钓鱼的桌子哥","link":"https://juejin.cn/post/6844903847031226382","avatar":"https://pic1.imgdb.cn/item/67e16de60ba3d5a1d7e2afaf.png","descr":"如何设计一个百万级用户的抽奖系统？","siteshot":"https://w.wallhaven.cc/full/13/wallhaven-135753.png","color":"vip","tag":"系统设计"},{"name":"陈曦","link":"https://mp.weixin.qq.com/s/OSlJgoFETAoXYdT-Pgj2cw","avatar":"https://pic1.imgdb.cn/item/67e0ea4688c538a9b5c59eb3.png","descr":"转转一体化推送平台的实践","siteshot":"https://w.wallhaven.cc/full/mp/wallhaven-mpdjdy.jpg","color":"vip","tag":"系统设计"},{"name":"黄振","link":"https://mp.weixin.qq.com/s/s99ZWuSi0Lu6ivfpBHvLWQ","avatar":"https://pic1.imgdb.cn/item/67e16f1f0ba3d5a1d7e2b285.png","descr":"B站评论系统架构设计","siteshot":"https://w.wallhaven.cc/full/4l/wallhaven-4lzkxp.jpg","color":"vip","tag":"系统设计"},{"name":"stormspirit","link":"https://mp.weixin.qq.com/s/N1UdNS4V_5DOLeHi6uzWRQ","avatar":"https://pic1.imgdb.cn/item/67e0ea4688c538a9b5c59eb3.png","descr":"评论系统存储和可用性设计","siteshot":"https://w.wallhaven.cc/full/96/wallhaven-96pkw8.jpg","color":"vip","tag":"系统设计"},{"name":"刘若愚","link":"https://mp.weixin.qq.com/s/_h32dsZyrd_XhqNJjwh66A","avatar":"https://pic1.imgdb.cn/item/67e16eff0ba3d5a1d7e2b259.png","descr":"如何构建一个资金账户系统","siteshot":"https://w.wallhaven.cc/full/39/wallhaven-39dody.jpg","color":"vip","tag":"系统设计"}];
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