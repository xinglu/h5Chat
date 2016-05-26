/**
 * Created by vuji on 16/5/24.
 */
/**
 * Created by vuji on 16/5/8.
 */
var forgetPwd = {
    query:"SELECT a.groupId,a.groupName,b.role,c.id,c.nickName,c.picture,c.birthday,c.address,c.email,c.tel,c.sex "
            +"FROM HTML5Chat.chat_group as a "
            +"left join HTML5Chat.chat_groupUser as b "
            +"on a.groupId = b.groupId "
            +"left join HTML5Chat.chat_info as c "
            +"on b.userId = c.id "
            +"where a.groupId in (select groupId from HTML5Chat.chat_groupUser as d where d.userId = ?);",
    queryNoMember : "SELECT a.groupId,a.groupName,b.role "
                    +"FROM HTML5Chat.chat_group as a "
                    +"left join HTML5Chat.chat_groupUser as b "
                    +"on a.groupId = b.groupId "
                    +"where b.userId = ?; ",
};

module.exports =  forgetPwd;