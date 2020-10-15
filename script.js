/*
document.getElementById("covidAPI").addEventListener("click", event => {
    const url = "https://api.covid19api.com/summary";
    fetch(url)
        .then(response => {
            return response.json();
        }).then(json => {
            console.log(json);
            alert("New Confirmed Cases: " + json.Global.NewConfirmed);
        });
        
});
*/

function getCovidData() {
    const url = "https://api.covid19api.com/summary";
    fetch(url)
        .then(response => {
            return response.json();
        }).then(json => {
            console.log(json);
            var summaryNewResults = "";
            var summaryTotalResults = "";
            summaryNewResults += "<div class='section-sub-container'>";
            summaryNewResults += "<h3 class='section-sub-header'>New Confirmed</h3>";
            summaryNewResults += "<p>" + json.Global.NewConfirmed + "</p>";
            summaryNewResults += "</div>";

            summaryNewResults += "<div class='section-sub-container'>";
            summaryNewResults += "<h3 class='section-sub-header'>New Deaths</h3>";
            summaryNewResults += "<p>" + json.Global.NewDeaths + "</p>";
            summaryNewResults += "</div>";

            summaryNewResults += "<div class='section-sub-container'>";
            summaryNewResults += "<h3 class='section-sub-header'>New Recovered</h3>";
            summaryNewResults += "<p>" + json.Global.NewRecovered + "</p>";
            summaryNewResults += "</div>";

            summaryTotalResults += "<div class='section-sub-container'>";
            summaryTotalResults += "<h3 class='section-sub-header'>Total Confirmed</h3>";
            summaryTotalResults += "<p>" + json.Global.TotalConfirmed + "</p>";
            summaryTotalResults += "</div>";

            summaryTotalResults += "<div class='section-sub-container'>";
            summaryTotalResults += "<h3 class='section-sub-header'>Total Deaths</h3>";
            summaryTotalResults += "<p>" + json.Global.TotalDeaths + "</p>";
            summaryTotalResults += "</div>";

            summaryTotalResults += "<div class='section-sub-container'>";
            summaryTotalResults += "<h3 class='section-sub-header'>Total Recovered</h3>";
            summaryTotalResults += "<p>" + json.Global.TotalRecovered + "</p>";
            summaryTotalResults += "</div>";
            document.getElementById("globalNewResults").innerHTML = summaryNewResults;
            document.getElementById("globalTotalResults").innerHTML = summaryTotalResults;
        });
        
}

function getCountryData() {
    const url = "https://api.covid19api.com/countries";
    const url2 = "https://api.covid19api.com/dayone/country/"
    var countryName = document.getElementById("countryName").value;
    fetch (url)
        .then(response => {
            return response.json();
        }).then(json => {
            console.log(countryName);
            console.log(json);
            for (let i = 0; i < json.length; i++) {
                if (json[i].Country === countryName) {
                    return json[i].Slug;
                }
            }
        }).then(slug => {
            fetch (url2 + slug)
                .then(response => {
                    return response.json();
                }).then(json => {
                    console.log(json);
                })
        })
}
