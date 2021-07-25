var items=document.querySelectorAll(".timeline li");

window.addEventListener("scroll",callbackfunc)
function callbackfunc()
{
    for(var i=0;i<items.length;i++)
    {
        if (elementview(items[i])) 
          {
            items[i].classList.add("in-view");
          }
    }
}

function elementview(e)
{
    var rect=e.getBoundingClientRect();
    
    return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}