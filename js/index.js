{
    let imgs=document.querySelectorAll(".banner_mid_right li ");
    let pagers=document.querySelectorAll(".pagebox li");
    let banner=document.querySelector(".banner_mid");
    // console.log(imgs[0].classList.add(a);
    pagers.forEach(function(ele,index){
        // console.log(ele);
        ele.onclick=function(){
            for(let i=0;i<imgs.length;i++){
                imgs[i].classList.remove("active1");
                pagers[i].classList.remove("active");
            }
            //ele
            this.classList.add("active");
            imgs[index].classList.add("active1");
            n=index;
        }
    });
    let n=0;
    let t=setInterval(move,3000);
    function move(){
        n++;
        if(n===imgs.length){
            n=0;
        }
        if(n<0){
            n=imgs.length-1;
        }

        for(let i=0;i<imgs.length;i++){
            imgs[i].classList.remove("active1");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active1");
        pagers[n].classList.add("active");
    }
    // banner.onmouseenter=function(){
    //     clearInterval(t); //清除的是setInterval的编号
    // }
    // banner.onmouseleave=function(){
    //     // setInterval(function(){
    //     //     n++;
    //     //     if(n===imgs.length){
    //     //         n=0;
    //     //     }
    //     //     for(let i=0;i<imgs.length;i++){
    //     //         imgs[i].classList.remove("active");
    //     //         pagers[i].classList.remove("active");
    //     //     }
    //     //     imgs[n].classList.add("active");
    //     //     pagers[n].classList.add("active");
    //     // },3000);
    //     t=setInterval(move,3000);
    // }


    let banner_lbtn=document.querySelector(".banner_mid_btn1");
    let banner_rbtn=document.querySelector(".banner_mid_btn2");
    banner_rbtn.onclick=function(){
        move();
    }
    banner_lbtn.onclick=function(){
        n=n-2;
        move();
    }
}