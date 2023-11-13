fetch('data.json')
  .then(response=>response.json())
  .then(function (data) {
    const jsonString = JSON.stringify(data);
    console.log(jsonString)
//const arrayAgain = JSON.parse(jsonString);
//console.log(Array.isArray(arrayAgain));
   // return jsonString
    document.getElementById("reaction_obtained").innerHTML = data[0].score;
    document.getElementById("memory_obtained").innerHTML = data[1].score;
    document.getElementById("verbal_obtained").innerHTML = data[2].score;
    document.getElementById("visual_obtained").innerHTML = data[3].score;
    document.getElementById("result").addEventListener("click", (event) => {
      console.log(data[0].score + data[1].score + data[2].score + data[3].score)
      document.getElementById("obtained_result").innerHTML = data[0].score + data[1].score + data[2].score + data[3].score;
      document.getElementById("percentage").innerHTML = (data[0].score + data[1].score + data[2].score + data[3].score) / 4 + "%";

    });
  })
 
  .catch(function (err) {
    console.log(err);
  });
  