jQuery(function($) {
      var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/"));
        $(".navbar-nav > li > a").each(function(){
        if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
        $(this).addClass("active");
        $(this).parent("li").addClass("active");
      })
  });