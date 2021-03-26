function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
};

function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }

// Variables
headerGarlandOn = document.getElementById("hd-gr-on");
footerGarlandOn = document.getElementById("ft-gr-on");
headingStyle = document.getElementById("style");
embHeaderGarlandOn = document.getElementById("emb-hd-gr-on");
embHeaderGarlandOff = document.getElementById("emb-hd-gr-off");
embFooterGarlandOn = document.getElementById("emb-ft-gr-on");
embFooterGarlandOff = document.getElementById("emb-ft-gr-off");
informationBlock = document.getElementById("information_block");

openModalButton = document.getElementById("open-modal");
closeModalButton = document.getElementById("closeModal");
myModalView = document.getElementById("my_modal");
coverageView = document.getElementById("coverage");
pageView = document.getElementById("page");
myModalBody = document.getElementById("modal_body")
buttonWrapper = document.getElementById("button_wrapper");

innerModalButton = document.getElementById("modal_button");
innerModalButtonText = document.getElementById("modal_button_text");

sevensArray = document.querySelectorAll('.sevens');

// Paralax
if(!isMobileDevice()){

    document.addEventListener("mousemove", parallax);
    function parallax(e){
        sevensArray.forEach(seven => {
            const speed = seven.getAttribute('data-speed');

            const x = (window.innerWidth - e.pageX*speed)/250;
            const y = (window.innerHeight - e.pageY*speed)/250;

            seven.style.transform = `translateX(${x}px) translateY(${y}px)`;
        })
    }
}

// Garlands
setInterval(glowOff, 3500);
function glowOff(){
    headerGarlandOn.style.opacity = "0";
    footerGarlandOn.style.opacity = "0";
    setTimeout(glowOn, 2000);
}

function glowOn(){
    headerGarlandOn.style.opacity = "1";
    footerGarlandOn.style.opacity = "1";
}


window.onresize = function(event){
    if((window.innerHeight + 400) > window.innerWidth){
        headingStyle.setAttribute("href", "./css/mobile_styles.css");

        embHeaderGarlandOn.setAttribute("src", "./images/header_garland_on_mob.svg");
        embHeaderGarlandOff.setAttribute("src", "./images/header_garland_off_mob.svg");

        embFooterGarlandOn.setAttribute("src", "./images/footer_garland_on_mob.svg");
        embFooterGarlandOff.setAttribute("src", "./images/footer_garland_off_mob.svg");


        if(window.innerHeight > (window.innerWidth * 3)){
            informationBlock.style.height = "120vh";
        }
    } else{
        headingStyle.setAttribute("href", "./css/styles.css");

        embHeaderGarlandOn.setAttribute("src", "./images/header_garland_on.svg");
        embHeaderGarlandOff.setAttribute("src", "./images/header_garland_off.svg");

        embFooterGarlandOn.setAttribute("src", "./images/footer_garland_on.svg");
        embFooterGarlandOff.setAttribute("src", "./images/footer_garland_off.svg");
    }
};

document.addEventListener("DOMContentLoaded", function(event) {
    if((window.innerHeight + 400) > window.innerWidth){
        headingStyle.setAttribute("href", "./css/mobile_styles.css");


        embHeaderGarlandOn.setAttribute("src", "./images/header_garland_on_mob.svg");
        embHeaderGarlandOff.setAttribute("src", "./images/header_garland_off_mob.svg");

        embFooterGarlandOn.setAttribute("src", "./images/footer_garland_on_mob.svg");
        embFooterGarlandOff.setAttribute("src", "./images/footer_garland_off_mob.svg");


        if(window.innerHeight > (window.innerWidth * 3)){
            informationBlock.style.height = "120vh";
        }
    } else{
        headingStyle.setAttribute("href", "./css/styles.css");

        embHeaderGarlandOn.setAttribute("src", "./images/header_garland_on.svg");
        embHeaderGarlandOff.setAttribute("src", "./images/header_garland_off.svg");

        embFooterGarlandOn.setAttribute("src", "./images/footer_garland_on.svg");
        embFooterGarlandOff.setAttribute("src", "./images/footer_garland_off.svg");
    }
});

// Modal

openModalButton.onclick = function(){
    myModalView.style.display = "block";
    coverageView.style.display = "block";
    window.scrollTo(0, 1);

    document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
    document.body.scrollTo({top: 0, behavior: 'smooth'});
    pageView.scrollTo({top: 0, behavior: 'smooth'});

    if (isMobileDevice()) {
      myModalView.style.width = "100%";
      myModalView.style.height = "100vh";
      myModalView.style.position = "fixed";
      myModalView.style.marginTop='0%';
      myModalView.style.paddingTop = "2%";
      myModalView.style.borderRadius = "0%";
      myModalBody.style.height = "72vh";
      disableScroll();
    }else {
      myModalView.style.removeProperty("width");
      myModalView.style.removeProperty("height");
      myModalView.style.removeProperty("position");
      myModalView.style.removeProperty("margin-top");
      myModalView.style.removeProperty("padding-top");
      myModalView.style.removeProperty("border-radius");
      myModalBody.style.removeProperty("height");
    }

    setTimeout(() => {
        myModalView.style.opacity = "1";
        coverageView.style.opacity = "0.9";
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        pageView.style.overflow = "hidden";
        myModalView.style.overflow = "hidden";
    }, 200)

}

function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}
function enableScroll() {
            window.onscroll = function() {};
}
closeModalButton.onclick = function(){
    enableScroll();
    myModalView.style.opacity = "0";
    coverageView.style.opacity = "0";


    setTimeout(() => {
        myModalView.style.display = "none";
        coverageView.style.display = "none";

        document.documentElement.style.overflowX = "hidden";
        document.documentElement.style.overflowY = "scroll";

        pageView.style.overflowX = "hidden";
        pageView.style.overflowY = "scroll";
    }, 200)
}

innerModalButton.addEventListener('mouseenter', e => {
    innerModalButtonText.style.opacity = "0.8";
});

innerModalButton.addEventListener('mouseleave', e => {
    innerModalButtonText.style.opacity = "1";
});
