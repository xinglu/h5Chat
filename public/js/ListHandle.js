/**
 * Created by vuji on 16/5/24.
 */
var listHandle ={};

/**
 * 好友列表模版
 * @param data
 * @returns {string}
 */
listHandle.compileFriendList = function(data){
    var i = 0;
    var list = "";
    var tmpHTML = "";
    for(var key in data){
        var currArr = Array.from(data[key]);
        tmpHTML += '<li class="am-panel">';
        tmpHTML += '<a data-am-collapse="{parent: \'#friendList-collapase\', target: \'#friendList-collapase'+i+'\'}">';
        tmpHTML += '<i class="am-margin-left-sm"></i> '+key+' <i class="am-icon-angle-right am-fr am-margin-right"></i>';
        tmpHTML += '</a>';
        tmpHTML += '<ul class="am-list am-collapse admin-sidebar-sub friendList" id="friendList-collapase'+i+'">';
        currArr.forEach(function(item){
            tmpHTML += '<li class="" userId=\'uId'+item.friendId+'\' onmousedown="mouseClickUser(this,event)"> <img src="'+item.picture+'" alt="" class="am-circle"> <span>'+item.nickName+'</span></li>';
        });
        tmpHTML += "</ul></li>";
        i++;
    }
    return tmpHTML;
};

/**
 * 群组列表
 * @param data
 */
listHandle.compileGroupList = function(data){
    var tmpHTML = "";
    var tmpArr = Array.from(data);

    tmpArr.forEach(function(item){
       tmpHTML += '<li class="am-animation-slide-bottom" groupId=\'groupId'+item.groupId+'\' onmousedown="mouseClickGroup(this,event)"> <i class="am-icon-group am-icon-fw"></i><span>'+item.groupName+'</span></li>';
    });

    return tmpHTML;
}

/**
 * 添加到消息列表中
 * @param data
 * @param type
 * @returns {string}
 */
listHandle.msgBox = function(data,type){
    if(type == 1){
        return '<li class="" userId=\'uId'+data.friendId+'\' onmousedown="mouseClickUser(this,event)"> <img src="'+data.picture+'" alt="" class="am-circle"> <span>'+data.nickName+'</span></li>';
    }else{
        return '<li class="am-animation-slide-bottom" groupId=\'groupId'+data.groupId+'\' onmousedown="mouseClickGroup(this,event)"> <i class="am-icon-group am-icon-fw"></i><span>'+data.groupName+'</span></li>'
    }
}
