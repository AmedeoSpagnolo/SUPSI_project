  var app = {
      sign: getAppSign(),
      affinity: {},
      oneSelected: false,
      line: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 0
      }
  }

  function getAppSign() {
      var condition = getParameterByName('sign');
      return condition ? condition : ''
  }

  function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  function drawLine() {
      d3.select('svg')
          .append("line") // attach a line
      .style("stroke", "yellow") // colour the line
      .style("stroke-width", "2px") // colour the line
      .attr("x1", app.line.x1) // x position of the first end of the line
      .attr("y1", app.line.y1) // y position of the first end of the line
      .attr("x2", app.line.x2) // x position of the second end of the line
      .attr("y2", app.line.y2) // y position of the second end of the line 
      .on('click', function() {
          d3.select(this).remove()
      })
  }

  