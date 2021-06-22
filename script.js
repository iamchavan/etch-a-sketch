function generateGrid(grids=16)
{
    const gridContainer=document.querySelector('.grid-container');
    gridContainer.innerHTML='';
    for(let i=0;i<grids*grids;i++)
    {
        const grid=document.createElement('div');
        grid.innerText=".";
        grid.addEventListener("mouseover",(e)=>{e.target.style.backgroundColor="white";e.target.style.color="white";});
        gridContainer.appendChild(grid);
    }
}
function clearButton()
{
    let newsize=parseInt(window.prompt("new grid size max=100",'16'));
    newsize=Math.min(newsize,100);
    let newClassName=toString(newsize);
    const gridContainer=document.querySelector('.grid-container');
    while(gridContainer.firstChild)
    {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    generateGrid(newsize,toString(newsize));
}
const clrscn=document.getElementById("clearPopup");
clrscn.addEventListener("click",clearButton);
generateGrid();