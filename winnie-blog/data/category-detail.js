function categoryDetail(id,name,createDate){
    this.id=id;
    this.name = name;
    this.createDate = createDate;
}
var categoryDetailArr =[
    new categoryDetail(1,"angular/angular2","2016/05/08"),
    new categoryDetail(2,"Linux","2016/09/20"),
    new categoryDetail(3,"前端开发学习","2015/02/11"),
    new categoryDetail(4,"使用教程","2014/09/24")
];

function sortCategoryDetailByDate(arr){
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
