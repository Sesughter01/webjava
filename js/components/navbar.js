const navbar = document.createElement('nav');

const list = document.createElement('ul');
const list_item_names = ['Features','Company','Careers','About'];
// const list_item = document.createElement('li');
// const list_link = document.createElement('a');
const links = document.getElementsByTagName('a')
var list_item_name=""
var link =""
const ids = ['id1','id2','id3','id4']
console.log(list_item_names.length)


for (let i = 0; i < list_item_names.length;i++ ) {
// console.log(links[i])
    // console.log(i)
    let list_item = document.createElement('li')
    let list_link = document.createElement('a');
    list.appendChild(list_item)
    //  list_item.append(links[i] )
    list_item.appendChild(list_link )
    list_link.innerHTML = list_item_names[i]
    
    
    
  }
  
navbar.append(list)
header.append(navbar)