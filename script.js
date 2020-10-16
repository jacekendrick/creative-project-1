function getCovidData() {
    const url = "https://api.covid19api.com/summary";
    fetch(url)
        .then(response => {
            return response.json();
        }).then(json => {
            console.log(json);
            let summaryNewResults = "";
            let summaryTotalResults = "";
            summaryNewResults += "<div class='section-sub-container'>";
            summaryNewResults += "<h3 class='section-sub-header'>New Confirmed</h3>";
            summaryNewResults += "<p class='covid-summary'>" + json.Global.NewConfirmed + "</p>";
            summaryNewResults += "</div>";

            summaryNewResults += "<div class='section-sub-container'>";
            summaryNewResults += "<h3 class='section-sub-header'>New Deaths</h3>";
            summaryNewResults += "<p class='covid-summary'>" + json.Global.NewDeaths + "</p>";
            summaryNewResults += "</div>";

            summaryNewResults += "<div class='section-sub-container'>";
            summaryNewResults += "<h3 class='section-sub-header'>New Recovered</h3>";
            summaryNewResults += "<p class='covid-summary'>" + json.Global.NewRecovered + "</p>";
            summaryNewResults += "</div>";

            summaryTotalResults += "<div class='section-sub-container'>";
            summaryTotalResults += "<h3 class='section-sub-header'>Total Confirmed</h3>";
            summaryTotalResults += "<p class='covid-summary'>" + json.Global.TotalConfirmed + "</p>";
            summaryTotalResults += "</div>";

            summaryTotalResults += "<div class='section-sub-container'>";
            summaryTotalResults += "<h3 class='section-sub-header'>Total Deaths</h3>";
            summaryTotalResults += "<p class='covid-summary'>" + json.Global.TotalDeaths + "</p>";
            summaryTotalResults += "</div>";

            summaryTotalResults += "<div class='section-sub-container'>";
            summaryTotalResults += "<h3 class='section-sub-header'>Total Recovered</h3>";
            summaryTotalResults += "<p class='covid-summary'>" + json.Global.TotalRecovered + "</p>";
            summaryTotalResults += "</div>";
            document.getElementById("globalNewResults").innerHTML = summaryNewResults;
            document.getElementById("globalTotalResults").innerHTML = summaryTotalResults;
        });
        
}

// NOTE: Response data is structured differently depending on country -- countries with lots of provinces or states get all wonky
// For best results, search Mexico, Madagascar, Guatemala, South Africa, Sweden, or any country really that doesn't have a bunch of provinces (China, Canada, U.S, etc.)
function getCountryData() {
    const url = "https://api.covid19api.com/countries";
    const url2 = "https://api.covid19api.com/dayone/country/"
    let countryName = document.getElementById("countryName").value;
    let results = "";
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
                    results += "<div class='section-sub-container'><h6>Covid Data in " + countryName + " ~ " + moment(json[json.length - 1].Date).format('MMMM Do YYYY') + "</h6><div class='section-sub-container'><ul>";
                    results += "<li><span class='covid-summary'>Active: </span>" + json[json.length - 1].Active;
                    results += "<li><span class='covid-summary'>Confirmed: </span>" + json[json.length - 1].Confirmed;
                    results += "<li><span class='covid-summary'>Deaths: </span>" + json[json.length - 1].Deaths;
                    results += "<li><span class='covid-summary'>Recovered: </span>" + json[json.length - 1].Recovered + "</ul></div>";
                    results += "</div>";
                    document.getElementById("countryResults").innerHTML = results;
                });
        });
}
