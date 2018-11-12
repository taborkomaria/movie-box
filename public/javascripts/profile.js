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
    let tablinks = document.querySelectorAll(".profile-table.blue .tablinks");

    function openProfileTab(tab) {
        
        document.querySelectorAll(".profile-table.blue .profile-content-tab")
            .forEach(element => element.className = element.className.replace(" active", ""));

            
        tablinks.forEach(element => element.className = element.className.replace(" active", ""));
    
        var tabName = tab.dataset.name;

        if (document.getElementById(tabName)){
            document.getElementById(tabName).className += " active";
        }
        tab.className += " active"; 
    }

    tablinks.forEach((element, id) => {
        element.addEventListener('click', () => openProfileTab(element));
    });
    document.getElementById("defaultOpenBlue").click();
}
{
    let tablinks = document.querySelectorAll(".profile-table.pink .tablinks");

    function openProfileTab(tab) {
        
        document.querySelectorAll(".profile-table.pink .profile-content-tab")
            .forEach(element => element.className = element.className.replace(" active", ""));

            
        tablinks.forEach(element => element.className = element.className.replace(" active", ""));
    
        var tabName = tab.dataset.name;

        if (document.getElementById(tabName)){
            document.getElementById(tabName).className += " active";
        }
        tab.className += " active"; 
    }

    tablinks.forEach((element, id) => {
        element.addEventListener('click', () => openProfileTab(element));
    });
    document.getElementById("defaultOpenPink").click();
}