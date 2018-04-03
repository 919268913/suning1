//banner轮播图
{
    let imgs = document.querySelectorAll(".banner_mid_right li");
    let pages = document.querySelectorAll(".pagebox li");
    let banner = document.querySelector(".banner_mid");
    pages.forEach(function (ele, index) {
        // console.log(ele);
        ele.onclick = function () {
            for (let i = 0; i < imgs.length; i++) {
                imgs[i].classList.remove("active1");
                pages[i].classList.remove("active");
            }
            this.classList.add("active");
            imgs[index].classList.add("active1");
            n = index;
        }
    });
    let n = 0;
    let t = setInterval(move, 3000);

    function move() {
        n++
        if (n === imgs.length) {
            n = 0;
        }
        if (n < 0) {
            n = imgs.length - 1;
        }
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove("active1");
            pages[i].classList.remove("active");
        }
        imgs[n].classList.add("active1");
        pages[n].classList.add("active");
    }

    banner.onmouseenter = function () {
        clearInterval(t);
    };
    banner.onmouseleave = function () {
        t = setInterval(move, 3000);
    }

    let btn1 = document.querySelector(".banner_mid_btn1");
    let btn2 = document.querySelector(".banner_mid_btn2");
    btn2.onclick = function () {
        move();
    }
    btn1.onclick = function () {
        n = n - 2;
        move();
    }

}

//顶部搜索栏
{
    let top1 = document.querySelector(".topfix");
    let top2 = document.querySelector(".nav_bottom_left2");
    let bottom2 = document.querySelector(".bottomfix");
    let sidebar = document.querySelector(".sidebar");
    let tops = document.querySelector(".sidebar_top");
    window.onscroll = function () {
        tops.onclick = function () {
            document.documentElement.scrollTop = 0;
        }
        let st = document.documentElement.scrollTop;
        // console.log(st);
        if (st > 781) {
            top1.style.display = "block";
        } else {
            top1.style.display = "none";
        }
        if (st > 2700 && st < 14300) {
            sidebar.style.display = "block";
        } else {
            sidebar.style.display = "none";
        }
    }
    top2.onmouseenter = function () {
        bottom2.style.height = 440 + "px";
    };
    bottom2.onmouseleave = function () {
        bottom2.style.height = 0;
    };


    // let tips = document.querySelectorAll(".sidebar_grids li");
    // let containers = document.querySelectorAll(".shouji_diannao");
    // tips.forEach(function (ele, index) {
    //     ele.onclick = function () {
    //         let ot = containers[index].offsetTop - 50;
    //         let now = document.documentElement.scrollTop;
    //         // document.documentElement.scrollTop=ot;
    //         let speed = (ot - now) / 8;
    //         let time = 0;
    //         let t = setInterval(function () {
    //             time += 25;
    //             now += speed;
    //             if (time == 200) {
    //                 clearInterval(t);
    //             }
    //             document.documentElement.scrollTop = now;
    //     }, 25);
    //     }
    // });
    // window.addEventListener("scroll", function () {
    //     let st = document.documentElement.scrollTop;
    //     for (let i = 0; i < containers.length; i++) {
    //         if (st > containers[i].offsetTop - 50) {
    //             for (let i = 0; i < tips.length; i++) {
    //                 tips[i].classList.remove("actives");
    //             }
    //             tips[i].classList.add("actives");
    //         }
    //     }
    // });
    let tips = document.querySelectorAll(".sidebar_grids li");
    let content = document.querySelectorAll(".shouji_diannao");
    tips.forEach(function (ele, index) {
        ele.onclick = function () {
            let ot = content[index].offsetTop - 150;
            // console.log(ot);
            // document.documentElement.scrollTop=ot;
            let now = document.documentElement.scrollTop;
            let speed = (ot - now) / 8;
            let time = 0;
            let t = setInterval(function () {
                time += 25;
                now += speed;
                if (time === 200) {
                    clearInterval(t);
                }
                document.documentElement.scrollTop = now;
            }, 25);
        }
    })

    window.addEventListener("scroll", function () {
        let st = document.documentElement.scrollTop;

        for (let i = 0; i < content.length; i++) {
            if (st >= content[i].offsetTop - 200) {
                for (let i = 0; i < tips.length; i++) {
                    tips[i].classList.remove("actives");

                }
                tips[i].classList.add("actives");
            }
        }
    });
}
//右侧栏效果
{
    let dollor = document.querySelectorAll(".dollor");
    let dollor1 = document.querySelectorAll(".dollor1");
    dollor.forEach(function (ele, index) {
        let obj = dollor1[0];
        ele.onmouseenter = function () {
            obj.style.display = "none";
            dollor1[index].style.display = "block";
            obj = dollor1[index];
        }
        ele.onmouseleave = function () {
            dollor1[index].style.display = "none";
        }
    });
}

//和小米不同的图片轮播效果
{
    let inner = document.querySelector(".dajuhui_inner");
    let prev = document.querySelector(".dajuhui_btn");
    let next = document.querySelector(".dajuhui_btn1");
    let n = 1;
    let flag = true;
    next.onclick = function () {
        if (flag) {
            flag=false;
            n++;
            inner.style.transition = "all 1s";
            inner.style.marginLeft = -1000 * n + "px";
        }
    }
    prev.onclick=function(){
        if(flag){
            flag=false;
            n--;
            inner.style.transition="all 1s";
            inner.style.marginLeft=-1000*n+"px";
        }
    }
    inner.addEventListener("transitionend", function () {
        flag=true;
        if (n === 4) {
            inner.style.transition = "none";
            inner.style.marginLeft = "-1000px";
            n = 1;
        }
        if(n===0){
            inner.style.transition="none";
            inner.style.marginLeft="-3000px";
            n=3;
        }
    })

}
