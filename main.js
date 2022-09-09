document.querySelector("#menu").addEventListener("click", () =>
{
  document.querySelector("nav ul").classList.toggle("showmenu")
})

let section = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("nav ul li a ");
let header=document.querySelector("header");
window.onscroll = () =>
{
  section.forEach(sec =>
  {
    let top = window.scrollY;
    console.log(top)
    let offset = sec.offsetTop -150 ;
    let hieght = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if(top>100)
    {
      header.style.cssText = `background-color: rgb(58, 55, 55); `;
      navlinks.forEach((link) => {
        link.style.cssText=``
      });
    }
    else
    {
      header.style.cssText = `background-color: none;  `;
      }
    if (top > offset && top < offset + hieght)
    {
      navlinks.forEach(link =>
      {
        link.classList.remove("active");
        let n=document.querySelector("nav ul li [href*=" + id + "]");
          n.classList.add("active");
        })
      }
    })
}