
function updatel(){
    let lost = document.getElementById('Lost');
    let str="";
    let item=JSON.parse(localStorage.getItem('items')) || []
    item.forEach((element,index) => {
        str += `
        <tr>
                    <td><input class="inyt" id="name" type="text" value=${element[0]} ></td>
                    <td><input class="inyt" id="lost" type="text" value=${element[1]}></td>
                    <td><input class="inyt" id="thing" type="text" value=${element[2]}></td>
                    <td><input class="inyt" id="contact" type="text" value=${element[3]}></td>
                    <td><button class="bnt" id="dell" onclick="delt(${index})" type="submit">Delete</button></td>
                </tr>   
        `
    });
    lost.innerHTML=str;
}
updatel();
function updatef(){
    let found = document.getElementById('Found');
    let str1 = "";
    let itemf=JSON.parse(localStorage.getItem('itemsJson')) || []
    itemf.forEach((element,index) => {
        str1 += `
        <tr>
                    <td><input class="inyt" id="name" type="text" value=${element[0]} ></td>
                    <td><input class="inyt" id="lost" type="text" value=${element[1]}></td>
                    <td><input class="inyt" id="thing" type="text" value=${element[2]}></td>
                    <td><input class="inyt" id="contact" type="text" value=${element[3]}></td>
                    <td><button class="bnt" id="delf" onclick="delt(${index})" type="submit">Delete </button></td>
                </tr>   
        `
    });
    found.innerHTML=str1;
}
updatef();
function delt(delitem){
localStorage.clear(delitem);
    updatel();
    updatef();
}
let clr=document.getElementById('clear');
clr.addEventListener('click',()=>{
    localStorage.clear();
    updatel();
    updatef();
})
