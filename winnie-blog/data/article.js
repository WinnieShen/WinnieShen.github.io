function article(id,title,publishDate,categoryDetailId,introduction,content){
    this.id=id;
    this.title = title;
    this.publishDate = publishDate;
    this.categoryDetailId = categoryDetailId;
    this.introduction = introduction;
    this.content= content;
}
function getArticleById(id) {
    for(var i = 0;i<articleArr.length;i++){
        if(id == articleArr[i].id){
            return articleArr[i];
            break;
        }
    }
    return null;
}

function getFourLatestArticles() {
    if(articleArr.length <= 4){
        return articleArr;
    }
    var arr = sorArticlesByDate(articleArr);
    var artArr = [arr[0],arr[1],arr[2],arr[3]];
    return artArr;
}

function sorArticlesByDate(arr){
    var temp;
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(new Date(arr[i].publishDate) < new Date(arr[j].publishDate)){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function getArticleByCategoryDetail(id){
    var arr =[];
    for(var i = 0;i<articleArr.length;i++){
        if(id == articleArr[i].categoryDetailId){
            arr.push(articleArr[i]);
        }
    }
    return sorArticlesByDate(arr);
}
function listArticleYears(){
    var temp,arr =[];
    for(var i = 0;i<articleArr.length;i++){
        var year = new Date(articleArr[i].publishDate).getFullYear();
        if(arr.indexOf(year) == -1){
            arr.push(year);
            console.log(year);
        }
    }
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]<arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}
function getArticleByYear(year){
    var arr =[];
    for(var i = 0;i<articleArr.length;i++){
        if(year == new Date(articleArr[i].publishDate).getFullYear()){
            arr.push(articleArr[i]);
        }
    }
    return sorArticlesByDate(arr);
}
var articleDic = "data/articles/";
var articleArr =[
    new article(8,"了解CSS,以及简单的CSS属性","2015/09/19",3,
        "css",
        articleDic + "article-8.html"),
    new article(7,"了解html,以及基本的html标签","2015/08/18",3,
        "作为一个无开发经验者，无论是前端还是后台，都需要会写基本的html代码，下面我来介绍一下html的基本知识。",
        articleDic + "article-7.html"),
    new article(6,"HTTP协议","2017/01/08",3,
        "HTTP 是基于TCP/IP协议的应用层协议。它不涉及数据包（packet）传输，主要规定了客户端和服务器之间的通信格式，默认使用80端口(HTTPS是443)。由于" + 
        "其简捷、快速的方式，适用于分布式超媒体信息系统。它于1990年提出，经过几年的使用与发展，得到不断地完善和扩展。当前最新版本为2015年5月作为互联网" +
        "标准正式发布的HTTP/2，替换HTTP 1.1成为HTTP的实现标准。",
        articleDic + "article-6.html"),
    new article(5,"Angular2学习手册","2016/12/22",1,
        "对于前端这个大世界来说，兴起的技术层出不穷，我最近学习了Angular2，Angular2与Angular1区别还是很大的，" +
        "不过本人对Angular1的知识也是一个初级的阶段，Angular2的学习是否需要对Angular1的熟悉呢？现在把过程与经验分享给大家。希望对大家的学习有所帮助。",
        articleDic +　"article-5.html"),
    new article(4,"Linux命令之二：find/grep","2016/11/11",2,
        "find/grep 在linux命令中属于常用又实用的部分，而熟练的使用会为平时的工作学习提高不少效率。下面是我整理的find/grep的一些用法，不齐全的部分后续还会添加。",
        articleDic + "article-4.html"),
    new article(3,"Linux命令之一：基础命令","2016/06/01",2,
        "大家都知道，Linux是一套免费使用和自由传播的类Unix操作系统，如果你对linux还不是很熟，建议大家可以去看看我的另一篇博客， " +
        "名为Linux 基础知识,可以帮助你初步了解linux一些特性。",
        articleDic + "article-3.html"),
    new article(2,"Linux基础知识","2016/05/28",2,
        "Linux是一套免费使用和自由传播的类Unix操作系统，是一个基于POSIX和UNIX的多用户、多任务、支持多线程和多CPU的操作系统。" +
        "它能运行主要的UNIX工具软件、应用程序和网络协议。 它支持32位和64位硬件。Linux继承了Unix以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。",
        articleDic + "article-2.html"),
    new article(1,"前端开发学习目录","2014/07/08",3,
        "作为不同level的前端工作者，常常会因为不知道学习的步骤，而显得很茫然，下面我将根据不同的level指定一系列的学习方案，希望能帮助爱好前端的你， " +
        "也希望在遇到困难的时候，不要放弃。",
        articleDic + "article-1.html")
];