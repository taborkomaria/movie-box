/*function openProfileTab(tabName, tabId) {
    let i, tabcontent, tablinks;
    
    tabcontent = document.querySelectorAll(".profile-content-tab");
    tabcontent.forEach( element =>{
        element.style.display = "none";
    })

    tablinks = document.querySelectorAll(".tablinks");
    tablinks.forEach( element =>{
        element.className = element.className.replace(" active", "");
    })

    document.getElementById(tabName).style.display = "block";
    tablinks[tabId].className += " active"; 
}

let tablinks = document.querySelectorAll(".tablinks");
tablinks.forEach( (element, index) =>{
    element.addEventListener('click', () => openProfileTab(element.getAttribute('name'), index))
})
*/

{
    let tablinks = document.querySelectorAll(".tablinks");

    function openProfileTab(tab) {
        document.querySelectorAll(".profile-content-tab")
            .forEach(element => element.style.display = "none");

            
        tablinks.forEach(element => element.className = element.className.replace(" active", ""));
    
        var tabName = tab.getAttribute('name');

        if (document.getElementById(tabName)){
            document.getElementById(tabName).style.display = "block";
        }
        tab.className += " active"; 
    }

    tablinks.forEach((element, id) => {
        element.addEventListener('click', () => openProfileTab(element));
    });
    document.getElementById("defaultOpen").click();
}