function addlist(){
    var userinput = document.getElementById("gettext").value;
    var selectdiv = document.getElementById("todohere");
    var li = document.createElement('li')
    var btn = document.createElement('button')
    var done = document.createElement('button')
    var span = document.createElement('span')
    var children = selectdiv.children.length + 1;
    selectdiv.appendChild(li);
    li.setAttribute("id", "li"+children);
    li.appendChild(span)
    span.innerText = userinput
    li.appendChild(done);
    li.appendChild(btn);
    btn.setAttribute("id", "btn"+children);
    btn.innerText = "delete";
    done.innerText = "done";
    function deltelist() {
        li.remove();
    }
    function donelist(){
            var rodtext = document.createElement('strike')
            li.insertBefore(rodtext, li.firstChild);
            rodtext.innerText = userinput;
            span.remove()
            done.remove()
    }
    btn.addEventListener('click' , deltelist);
    done.addEventListener('click' , donelist);
}
document.getElementById("cla").addEventListener('click' , addlist)


