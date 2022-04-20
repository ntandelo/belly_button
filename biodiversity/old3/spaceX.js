// const url = "https://api.spacexdata.com/v2/launchpads";


// const onGetData = receivedData => {
//     console.log("on get data", receivedData);
//     var LatLong = receivedData.map(function (coord) {
//         return [coord.location.latitude, coord.location.longitude];
//     });

//     console.log(LatLong);
// };

// function doSomething(receivedData) {
//     console.log("do something", receivedData);
// }

// d3.json(url).then(function (receivedData) {
//     console.log("really anon function", receivedData);
// });

// d3.json("samples.json").then(function(data){
//     console.log(data);
// });

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});

// x = 100
// print(x) 
// print(100)

