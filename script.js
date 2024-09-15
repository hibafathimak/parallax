function parallax(){
    const cloud1=document.querySelector('.p7')
    const cloud2=document.querySelector('.p4')
    const cloud3=document.querySelector('.p6')
    const mount1 = document.querySelector('.p3')
    const mount2 = document.querySelector('.p5')
    const mount3 = document.querySelector('.p1')
    const title=document.querySelector('.title')

    // let header_height = header.offsetHeight;

  
    

    window.addEventListener('scroll',()=>{
         windowScroll=window.scrollY;
        // title.style.marginTop= windowScroll *1+'px';
        mount1.style.left=windowScroll*-0.1+'px'
        mount2.style.right=windowScroll*-0.1+'px'
        cloud2.style.top=windowScroll*-0.9+'px';
        cloud3.style.left=windowScroll*-1+'px';
        cloud1.style.right=windowScroll*-0.3+'px';

    })
}

parallax()

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


 


   
