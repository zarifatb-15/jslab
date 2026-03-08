const searchInput = document.getElementById("searchInput");
const cityname = document.getElementById("cityName");
const items = document.querySelectorAll(".list li");

function filterCities(){
    const query= searchInput.value.trim().toLowerCase();

    let firstMatch="";
    items.forEach (function(li){
        const text =li.textContent.toLowerCase();
        const t=text.includes(query);

        if(query==="" || t){
            li.style.display="";

            if(firstMatch==="" && query !== "") 
                firstMatch=li.textContent;
        }
        else
            li.style.display="none";
    });

    if (query==="") cityName.textContent= "Type to search...";
    else if (firstMatch !== "") cityName.textContent=firstMatch;
    else cityName.textContent="No results";
}
searchInput.addEventListener("input", filterCities);
filterCities();


