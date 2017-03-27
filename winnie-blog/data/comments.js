function comments(id,userId,createDate,content,blogId){
    this.id = id;
    this.userId = userId;
    this.createDate = createDate;
    this.content = content;
    this.blogId = blogId;
}

var commentsArr =[
    new comments(1,1,"2016/08/07","写的不错，继续加油。",1),
    new comments(2,2,"2016/03/14","还需要完善哦，没写全。",1),
    new comments(3,3,"2016/10/27","Mark一下，记录全面。谢楼主。以后会常来逛哦，楼主加油更博。",2),
    new comments(4,3,"2017/01/03","喜欢。",2)
];


function getThreeLatestComments() {

    if(commentsArr.length <= 3){
        return commentsArr;
    }
    var arr = sortCommentsByDate(commentsArr);
    var comArr = [arr[0],arr[1],arr[2]];
    return comArr;
}
function sortCommentsByDate(arr){
    var temp;
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(new Date(arr[i].createDate) < new Date(arr[j].createDate)){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function getCommentsOfBlogSortByDate(bId) {
    var blogCommentArr = [];
    for(var i=0;i<commentsArr.length;i++){
        if(bId == commentsArr[i].blogId){
            blogCommentArr.push(commentsArr[i]);
        }
    }
    return sortCommentsByDate(blogCommentArr);
}