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
    new article(1,"CSS3-实现垂直居中的方法","2016/10/26",3,
        "在前端技术日新月异的今天，浏览器兼容已经成为一个重要问题，那么CSS中实现的样式，也需要考虑到浏览器的兼容，那么，我们今天来探讨一下垂直居中的方式，以及" + 
        "在不同浏览器的实现情况。", 
        articleDic + "article-1-css-vertical-center.html"),
    new article(2,"HTTP协议","2017/01/08",3,
        "HTTP 是基于TCP/IP协议的应用层协议。它不涉及数据包（packet）传输，主要规定了客户端和服务器之间的通信格式，默认使用80端口(HTTPS是443)。由于" + 
        "其简捷、快速的方式，适用于分布式超媒体信息系统。它于1990年提出，经过几年的使用与发展，得到不断地完善和扩展。当前最新版本为2015年5月作为互联网" +
        "标准正式发布的HTTP/2，替换HTTP 1.1成为HTTP的实现标准。",
        articleDic + "article-6.html")
];
