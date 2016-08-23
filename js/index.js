$(function(){
	var sections = $('.section');
	$(".container").fullpage(
	{
		resize:true,
		menu:true,
		anchors: ['page1', 'page2', 'page3', 'page4','page5', 'page6', 'page7', 'page8','page9', 'page10'],
		menu: '#menu',
		scrollingSpeed:1000,
		navigation:true,
		navigationPosition:"right",
		navigationTooltips:["首页","视觉","交互","皮肤","功能","待办邮件","联系人邮件","科技","连接易信","马上体验"],
		afterLoad:function(anchorlink,index){
			// sections.removeAttr("id","active");
			// sections.eq(index-1).attr("id","active");
		}
	}
	);
	$('.button').click(function(){
		$.fn.fullpage.moveSectionDown();
	})
})