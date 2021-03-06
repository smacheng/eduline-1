// JavaScript Document

/**
 * 删除意见反馈
 * @param integer id 反馈ID
 * @return void
 */
admin.delSuggest = function(id){
	if('undefined' == typeof(id)||!id) id = admin.getChecked();
	if(!id){
        ui.error('请选择要删除的反馈');
		return false;
    }
	if(confirm('确定要删除此反馈吗？')){
        $.post(U('classroom/AdminSuggest/del'),{id:id},function(msg){
            admin.ajaxReload(msg);
        },'json');
    }
}
/**
 * 删除课堂（云课堂用户-课堂管理）
 * @param id
 * @param action
admin.delLearn=function(_id,action){
    var id = ("undefined"== typeof(_id)|| _id=='') ? admin.getChecked() : _id;
    if(id==''){
        ui.error("课堂id不能为null");
        return false;
    }
    if(!confirm("是否确认删除此课堂？")){
        return false;
    }
    $.post(U('classroom/AdminLearnc/'+action),{ids:id},function(msg){
        admin.ajaxReload(msg);
    },'json');
}*/

/**
 * 删除讲师
 * @param _id
 * @param action
 * @returns {boolean}
 */
admin.delTeacher=function(_id,action){

    var id = ("undefined"== typeof(_id)|| _id=='') ? admin.getChecked() : _id;
    if(id==''){
        ui.error("讲师id不能为null");
        return false;
    }
    if(!confirm("是否确认删除此讲师？")){
        return false;
    }
    $.post(U('classroom/AdminTeacher/'+action),{ids:id},function(msg){
        admin.ajaxReload(msg);
    },'json');
}

admin.delTeacherAll=function(action){

    var ids=admin.getChecked();
    ids = ("undefined"== typeof(ids)|| ids=='') ? admin.getChecked() : ids;
    if(ids==''){
        ui.error("讲师id不能为null");
        return false;
    }
    if(!confirm("是否确认？")){
        return false;
    }
    $.post(U('classroom/AdminTeacher/'+action),{ids:ids},function(msg){
        admin.ajaxReload(msg);
    },'json');
}

/**
 * 删除vip等级
 * @param _id
 * @param action
 * @returns {boolean}
 */
admin.delVip=function(_id,action){
    var id = ("undefined"== typeof(_id)|| _id=='') ? admin.getChecked() : _id;
    if(id==''){
        ui.error("请选择你要删除的vip等级");
        return false;
    }
    if(!confirm("是否确认删除此vip等级？")){
        return false;
    }
    $.post(U('classroom/AdminVip/'+action),{ids:id},function(msg){
        admin.ajaxReload(msg);
    },'json');
}

admin.delVipAll=function(action){

    var ids=admin.getChecked();
    ids = ("undefined"== typeof(ids)|| ids=='') ? admin.getChecked() : ids;
    if(ids==''){
        ui.error("请选择你要删除的vip等级");
        return false;
    }
    if(!confirm("是否确认？")){
        return false;
    }
    $.post(U('classroom/AdminVip/'+action),{ids:ids},function(msg){
        admin.ajaxReload(msg);
    },'json');
}
/**
 * 删除提现记录
 * @param integer id 提现记录ID
 * @return void
 */
admin.delWithdraw = function(id){
	if('undefined' == typeof(id)||!id) id = admin.getChecked();
	if(!id){
        ui.error('请选择要删除的记录');
		return false;
    }
	if(confirm('确定要删除此记录吗？')){
        $.post(U('classroom/AdminWithdraw/del'),{id:id},function(msg){
            admin.ajaxReload(msg);
        },'json');
    }
}

admin.zyPageBack = function(){
	window.history.back();
	return false;
}


//添加视频
admin.addVideoLib = function(){
     location.href = U('classroom/AdminVideo/addVideoLib')+'&tabHash=addVideoLib';
};

/**
 * 操作视频状态
 * @param integer id 提现记录ID
 * @return void
 */
admin.opervideo = function(id , field ,val){
    if('undefined' == typeof(id)||!id) id = admin.getChecked();
    if(!id){
        ui.error('请选择要操作的记录');
        return false;
    }
    if( confirm('确定要执行此操作吗？') ){
        $.post(U('classroom/AdminVideo/opervideo'),{id:id,field:field,val:val},function(msg){
            admin.ajaxReload(msg);
        },'json');
    }
}