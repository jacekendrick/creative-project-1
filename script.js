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

function doWork() {
    const url = "https://api.covid19api.com/summary";
    fetch(url)
        .then(response => {
            return response.json();
        }).then(json => {
            console.log(json);
            alert("New Confirmed Cases: " + json.Global.NewConfirmed);
        });
}
