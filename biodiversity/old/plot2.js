var trace = {
    x: [1,4,5,6,7,8,12,34,90,3,4,45,23,78],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    mode: 'markers',
    type: 'scatter'
  };

  var layout = {
    title: "'Pie' Chart",
  };
  Plotly.newPlot("plotArea", [trace], layout);