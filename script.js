const div = document.createElement("div")
div.className = "container"

const res = fetch("https://api.covidtracking.com/v1/states/info.json")

res.then((data)=> data.json())
    .then((ele)=>{
      for(let i=0;i<ele.length;i++){
        div.innerHTML +=`<div class="card text-bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header" style="color:black"><h1>${ele[i].state}</h1></div>
        <div class="card-body">
          <h5 class="card-title" style="color:chartreuse">${ele[i].name}</h5>
          <p class="card-text">Test Results: ${ele[i].totalTestResultsField}</p>
          <p class="card-text">PUI: ${ele[i].pui}</p>
          <p class="card-text">FIPS: ${ele[i].fips}</p>
        </div>
      </div>`

        document.body.append(div)
      }
    })

