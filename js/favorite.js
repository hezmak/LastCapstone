
 function addDynamicCosmetic(NO, name, price, score, type, fav_flag){


   var template = '<div class="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item"><a href="detail/'+NO+'.html"><img src="images/'+NO+'.jpg" alt="'+name+'" class="img-responsive"><h3 class="fh5co-work-title">'+name+'</h3>$'+price+'</a><span class="fa fa-star checked cos'+NO+'" style="float: right">'+' '+score+'</span></div>';

   $("#"+type).append(template);
   $("#home").append(template);
   if(fav_flag == true){
     $('.fa-star').css("color","orange");
   }
 };
 $("#skin").click(function(){
   console.log("가 클릭됨");
 });

 $(document).ready(function() {
   addDynamicCosmetic(1, "cosmetic 1", 11037, 3.4, "skin",  true);
   addDynamicCosmetic(2, "cosmetic 2", 11037, 3.4, "lotion",  false);
   addDynamicCosmetic(3, "cosmetic 3", 11037, 3.4, "sunblock",  true);
   $('#skin').click(function(e){
            //e.preventDefault();
            console.log("this is the click");
        });

 });
