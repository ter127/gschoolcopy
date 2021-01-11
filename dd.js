window.onload = function(){
  

var data = [
  {"title": "<strong>배움의 원칙</strong><br>거꾸로캠퍼스가 실현하는<br>21세기 배움의 원칙 아홉가지<br><br><br>자세히보기➝",
    "className":"rr1"
  },
  {"title": "<strong>교육과정</strong><br>거꾸로캠퍼스의 교육 과정과<br>교육 프로그램에 대한 안내<br><br><br>자세히보기➝",
      "className":"rr2"
    },
  {"title": "<strong>학교생활</strong><br>거꾸로캠퍼스를 만들어가는<br>학생과 교사들의 이야기<br><br><br>자세히보기➝",
      "className":"rr3"
    }
]
for (var index in data){
    var paragraph = document.createElement("div");
    paragraph.innerHTML = data[index]["title"]
    document.getElementById("rrbox").appendChild(paragraph);
    paragraph.classList.add(data[index]["className"])
}
    document.getElementById("btn").addEventListener("click", function () {
        document.getElementById("head").style.backgroundColor =
          "rgb(255, 250, 206)";
        document.getElementsByClassName("rr1").id = "rrr1";
        document.getElementsByClassName("rr2").id = "rrr2";
        document.getElementsByClassName("rr3").id = "rrr3";
        document.getElementById("video").style.backgroundImage =
          "url(크리스마스.jpg)";
        document.getElementById("main").style.backgroundColor =
          "rgb(214, 255, 225)";
        document.getElementById("kk").style.color = "red";
        document.getElementById("kkk").style.color = "green";
        document.getElementById("co").style.backgroundColor = "rgb(11, 24, 59)";
        document.getElementById("tt").style.color = "rgb(255, 250, 206)";
        document.getElementById("ttt").style.color = "rgb(255, 250, 206)";
        document.getElementById("tov1").setAttribute("class", "chstov");
        document.getElementById("tov2").setAttribute("class", "chstov");
        document.getElementById("tov3").setAttribute("class", "chstov");
        document.getElementById("tov4").setAttribute("class", "chstov");
        document.getElementById("tov5").setAttribute("class", "chstov");
        document.getElementById("tov6").setAttribute("class", "chstov");
        document.getElementById("tov7").setAttribute("class", "chstov");
        document.getElementById("tov8").setAttribute("class", "chstov");
        document.getElementById("tov9").setAttribute("class", "chstov");
        document.getElementById("tov10").setAttribute("class", "chstov");
        document.getElementById("tov11").setAttribute("class", "chstov");
        document.getElementById("tov12").setAttribute("class", "chstov");
        document.getElementById("footer").style.backgroundColor =
          "rgb(58, 38, 3)";
      });
      document.querySelector('.bt1').addEventListener('click', function(){
        contain.style.transform = 'translate(0px)'
      });      
document.querySelector('.bt2').addEventListener('click', function(){
  contain.style.transform = 'translate(-1040px)'
});
document.querySelector('.bt3').addEventListener('click', function(){
  contain.style.transform = 'translate(-2080px)'
});
var posi = 0
var contain = document.querySelector('#container')
document.querySelector('.btle').addEventListener('click', function(){{
  if(-2080 < posi)
  posi = posi - 1040
    contain.style.transform = "translate(" + posi + "px)"
  }
});
document.querySelector('.btri').addEventListener('click', function(){{
  if(0 > posi)
  posi = posi + 1040
    contain.style.transform = "translate(" + posi + "px)"
  }
});
}
