window.onload=function() {

    var i = 0,
        ii=0;
    document.getElementById("sub").addEventListener("click", function () {
        var ipt = document.getElementsByClassName("ipt")[0];
        if (ipt.value == "") {
            alert("留言不能为空！")
        } else {

            var p = document.createElement("p");
            p.className = "show_board";
            p.innerHTML = ipt.value;
            var show_board = document.getElementsByClassName("show_board");
            document.getElementById("show_area").appendChild(p);
            var count2 = document.getElementById("count2");
            ii = ii + 1;
            count2.innerHTML = ii;
            ipt.value = "";
            count1.innerHTML="0";
            i=0;
        }
    })

    var ipt = document.getElementsByClassName("ipt")[0];
    ipt.onkeydown = function (e) {
        if (e.which == 13) {
            var ipt = document.getElementsByClassName("ipt")[0];
            if (ipt.value == "") {
                alert("留言不能为空！")
            } else {
                var p = document.createElement("p");
                p.className = "show_board";
                p.innerHTML = ipt.value;
                var show_board = document.getElementsByClassName("show_board");
                document.getElementById("show_area").appendChild(p);
                var count2 = document.getElementById("count2");
                ipt.value = "";
            }
            e.preventDefault();
            count1.innerHTML="0";
            i=0;
            var count2 = document.getElementById("count2");
            ii = ii + 1;
            count2.innerHTML = ii;

        }else if(e.which==8){
            if(i>0){
                i=i-1;
                count1.innerHTML=i
            }
        }else if((e.which==32||e.which>47&&e.which<58)||(e.which>64&&e.which<91)||(e.which>96&&e.which<123)||(e.which>185&&e.which<193)||(e.which>218&&e.which<223)){
            if(i<150){
                i=i+1;
                count1.innerHTML=i;
            }else{
                alert("字数已满！");
            }
        }
        // else{
        //     var ipt = document.getElementsByClassName("ipt")[0];
        //     var count1 = document.getElementById("count1");
        //     count1.innerHTML=ipt.value.length;
            // if(ii<150){
            //     ii=ii+1;
            //     count1.innerHTML=ii;
            // }else{
            //     alert("字数已满！");
            // }
        // }
        // if(e.keyCode!=16){
        //     alert(e.keyCode);
        // }
    }
}
