var congress= "trains"
var requestUrl = 'https://www.loc.gov/search/?q=' + congress + '&fo=json';
function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      //if (response.status === 200) {
       // responseText.textContent = response.status;
      
      return response.json();

  })
.then(function (data){
    console.log(data);
})

}
getApi(requestUrl);