
$(document).ready(function () { 
    $(".loader").delay(1500).fadeOut("slow");
  $("#overlayer").delay(1500).fadeOut("slow");
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.head').addClass("sticky");

           } else {
               $('.head').removeClass("sticky");
        }
         if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
        if (this.scrollY > 400) {
            $('.about .about-content .left img').css("opacity","1")
            // $('.about .about-content .left img').css("width","450px")
            $('.about .about-content .right').css("opacity","1")
        }
        if (this.scrollY > 1700) {
            $('.services .service .serv-1 ').css("transform","scale(1)")
        }
    })
     $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        // $('html').css("scrollBehavior", "auto");
    });
    $(".mmenu-btn").click(() => {
        $('.head .menu').toggleClass("active")
        $('.mmenu-btn i').toggleClass("active")
    })
     $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    
})

// var counter = 1;
// var i;
// var inpt=document.querySelectorAll('.radio')
// setInterval(function () {
//    document.getElementById('radio' + counter).checked = true;
//       counter++;
//       if(counter > 4){
//         counter = 1;
//       }
// }, 5000);
    
















const slides = document.querySelector(".slidder").children;
 const prev=document.querySelector(".prev");
 const next=document.querySelector(".next");
 const indicator=document.querySelector(".indicator");
 let index=0;


   prev.addEventListener("click",function(){
       prevSlide();
       updateCircleIndicator(); 
       resetTimer();
   })

   next.addEventListener("click",function(){
      nextSlide(); 
      updateCircleIndicator();
      resetTimer();
      
   })

   // create circle indicators
    function circleIndicator(){
        for(let i=0; i< slides.length; i++){
        	const div=document.createElement("div");
        	      div.innerHTML=i+1;
                div.setAttribute("onclick","indicateSlide(this)")
                div.id=i;
                if(i==0){
                	div.className="active";
                }
               indicator.appendChild(div);
        }
    }
    circleIndicator();

    function indicateSlide(element){
         index=element.id;
         changeSlide();
         updateCircleIndicator();
         resetTimer();
    }
     
    function updateCircleIndicator(){
    	for(let i=0; i<indicator.children.length; i++){
    		indicator.children[i].classList.remove("active");
    	}
    	indicator.children[index].classList.add("active");
    }

   function prevSlide(){
   	 if(index==0){
   	 	index=slides.length-1;
   	 }
   	 else{
   	 	index--;
   	 }
   	 changeSlide();
   }

   function nextSlide(){
      if(index==slides.length-1){
      	index=0;
      }
      else{
      	index++;
      }
      changeSlide();
   }

   function changeSlide(){
   	       for(let i=0; i<slides.length; i++){
   	       	 slides[i].classList.remove("active");
   	       }

       slides[index].classList.add("active");
   }

   function resetTimer(){
   	  // when click to indicator or controls button 
   	  // stop timer 
   	  clearInterval(timer);
   	  // then started again timer
   	  timer=setInterval(autoPlay,4000);
   }
 


  
  function autoPlay(){
      nextSlide();
      updateCircleIndicator();
  }

  let timer=setInterval(autoPlay,4000);

 var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth:200,
        modifier: 1,
        slideShadows: true,
      },
      loop:true,
       autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

var openClose = document.querySelectorAll(".open svg")
for (let i = 0; i < openClose.length; i++) {
    openClose[i].addEventListener('click', function () {
        this.classList.toggle('active-rotate')
        console.log("hhhhhhhhhhhhh");
    })
}




