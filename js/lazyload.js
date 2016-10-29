	// jquery.load
    jQuery(document).ready(function(){
        jQuery("img.lazy").lazyload({
            // effect:"slideDown",
            // effect:"fadeIn",
            // effect:"show",
            threshold:200,
            // threshold图片在距离屏幕200像素时提前加载
            // 默认情况下图片会出现在屏幕时加载
        });
    });
	// $(document).ready(function(){
 //    	$("img.lazy").lazyload({
 //    		effect:"fadeIn",
 //        	skip_invisible:false
 //    	});
 //    });
	// console.log($(".lazy"));

    // $(function () {
    //     $("img.lazy").lazyload({
    //         effect: "fadeIn"
    //     });
    // });
    //**距离浏览器提前高度为60提前加载*
    // $(document).ready(function(){
    // 	$("img.lazy").lazyload({
    // 		threshold:60
    // 	});
    // });
    // 当用户移入(或点击)图片的时候，图片才会加载呈现到用户视觉窗口中
	// $(document).ready(function(){
	// 	$("img.lazy").lazyload({
	// 		event:"mouseover",
	// 		// event:"click",
	// 	});
	// });