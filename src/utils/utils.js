let utils ={}

utils.formatDate = function(date){
    var d = new Date(date);
    return (d.getMonth()+1)+"-"+d.getDate()+"-"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
};

export default utils;