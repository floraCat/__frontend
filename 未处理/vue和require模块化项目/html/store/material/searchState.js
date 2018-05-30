
//搜索框数据状态

define(['funs'],function(Funs){

	return dateState = {

		state:{
			keyword:'',
			submitData:{}
		},

		mutations:{},

		actions:{
			data_search:function({ state, commit, rootState }){
				Funs.ajaxGet(rootState.topState.api,state.submitData,function(rs){
					rootState.topState.items=rs;
					if($('.libList .list').length>0){
						$('.libList .list dl.new').remove();
						$(function(){
						    //瀑布流
						    $('.libList .list').masonry({
						      columnWidth: 230
						    });
						});
					}
				});
			}
		}


	}

}); 