    let coins = 100
    
    
    let coinsText = document.getElementById("coins");
    let historyList = document.getElementById("history");
    let clearBtn = document.getElementById("clearBtn");

    // Function to get current time
    function getCurrentTime() {
      let now = new Date();
      return now.toLocaleTimeString(); // Example: "11:36:58 AM"
    }

    // all service button
    // let allServiceBtn = document.getElementById("callAllService")
    //     .addEventListener("click", function() {
    //   if (coins < 20) {
    //     alert("Not enough coins!");
    //     return;
    //   }
    //   alert("Calling National Emergency Number - 999");
    //   coins = coins - 20;
    //   coinsText.innerText = coins;
    //   historyList.innerHTML += "<li class='bg-[#41ff6b1a] p-2 rounded shadow'>National Emergency <br> Number <br> 999</li>"})


    // National Emergency Number button
    document.getElementById("callAllService").addEventListener("click", function() {
      if (coins < 20) {
        alert("Not enough coins!");
        return;
      }

      // Get current local time
      let now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;

      let Calltime = hours + ":" + minutes + ":" + seconds;

      alert("Calling National Emergency Number - 999");

      coins = coins - 20;
      coinsText.innerText = coins;

      historyList.innerHTML += "<li class='bg-[#41ff6b1a] p-2 rounded shadow margin-bottom:10px;'>National Emergency<br>Number : 999<br> " + Calltime + "</li>";
    })


    // Police Helpline button
    document.getElementById("callPolice").addEventListener("click", function() {
      if (coins < 20) {
        alert("Not enough coins!");
        return;
      }

      // Get current local time
      let now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;

      let Calltime = hours + ":" + minutes + ":" + seconds;

      alert("Calling Police Helpline Number - 999");

      coins = coins - 20;
      coinsText.innerText = coins;

      historyList.innerHTML += "<li class='bg-[#41ff6b1a] p-2 rounded shadow margin-bottom:10px;'>Police Helpline<br>Number : 999<br> " + Calltime + "</li>";
    })

    // Fire Service button
    document.getElementById("callFire").addEventListener("click", function() {
      if (coins < 20) {
        alert("Not enough coins!");
        return;
      }

      // Get current local time
      let now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;

      let Calltime = hours + ":" + minutes + ":" + seconds;

      alert("Calling Fire Service Number - 999");

      coins = coins - 20;
      coinsText.innerText = coins;

      historyList.innerHTML += "<li class='bg-[#41ff6b1a] p-2 rounded shadow margin-bottom:10px;'>Fire Service<br>Number : 999<br> " + Calltime + "</li>";
    })


    // Ambulance Service button
    document.getElementById("callAmbulance").addEventListener("click", function() {
      if (coins < 20) {
        alert("Not enough coins!");
        return;
      }

      // Get current local time
      let now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;

      let Calltime = hours + ":" + minutes + ":" + seconds;

      alert("Calling Ambulance Service Number - 109");

      coins = coins - 20;
      coinsText.innerText = coins;

      historyList.innerHTML += "<li class='bg-[#41ff6b1a] p-2 rounded shadow margin-bottom:10px;'>Ambulance Service<br>Number : 1994-999999<br> " + Calltime + "</li>";
    })


    // Women & Child Helpline button
    document.getElementById("callwANDc").addEventListener("click", function() {
      if (coins < 20) {
        alert("Not enough coins!");
        return;
      }

      // Get current local time
      let now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;

      let Calltime = hours + ":" + minutes + ":" + seconds;

      alert("Calling Women & Child Helpline Number - 109");

      coins = coins - 20;
      coinsText.innerText = coins;

      historyList.innerHTML += "<li class='bg-[#41ff6b1a] p-2 rounded shadow margin-bottom:10px;'>Women & Child Helpline<br>Number : 109<br> " + Calltime + "</li>";
    })

    //  Anti-Corruption Helpline button
    document.getElementById("callAC").addEventListener("click", function() {
      if (coins < 20) {
        alert("Not enough coins!");
        return;
      }

      // Get current local time
      let now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;

      let Calltime = hours + ":" + minutes + ":" + seconds;

      alert("Calling Anti-Corruption Helpline Number - 106");

      coins = coins - 20;
      coinsText.innerText = coins;

      historyList.innerHTML += "<li class='bg-[#41ff6b1a] p-2 rounded shadow margin-bottom:10px;'>Anti-Corruption Helpline<br>Number : 106<br> " + Calltime + "</li>";
    })



    // Electricity Helpline button
    document.getElementById("callE").addEventListener("click", function() {
      if (coins < 20) {
        alert("Not enough coins!");
        return;
      }

      // Get current local time
      let now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;

      let Calltime = hours + ":" + minutes + ":" + seconds;

      alert("Calling Electricity Helpline Number - 16216");

      coins = coins - 20;
      coinsText.innerText = coins;

      historyList.innerHTML += "<li class='bg-[#41ff6b1a] p-2 rounded shadow margin-bottom:10px;'>Electricity Helpline<br>Number : 16216<br> " + Calltime + "</li>";
    })


    // BRAC Helpline button
    document.getElementById("callB").addEventListener("click", function() {
      if (coins < 20) {
        alert("Not enough coins!");
        return;
      }

      // Get current local time
      let now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;

      let Calltime = hours + ":" + minutes + ":" + seconds;

      alert("Calling Brac Helpline Number - 16445");

      coins = coins - 20;
      coinsText.innerText = coins;

      historyList.innerHTML += "<li class='bg-[#41ff6b1a] p-2 rounded shadow margin-bottom:10px;'>Brac Helpline<br>Number : 16445<br> " + Calltime + "</li>";
    })


    // Bangladesh Railway Helpline button
    document.getElementById("callBR").addEventListener("click", function() {
      if (coins < 20) {
        alert("Not enough coins!");
        return;
      }

      // Get current local time
      let now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;

      let Calltime = hours + ":" + minutes + ":" + seconds;

      alert("Calling Bangladesh Railway Helpline Number - 163");

      coins = coins - 20;
      coinsText.innerText = coins;

      historyList.innerHTML += "<li class='bg-[#41ff6b1a] p-2 rounded shadow margin-bottom:10px;'>Bangladesh Railway Helpline<br>Number : 163<br> " + Calltime + "</li>";
    })


    // Clear history button
    clearBtn.addEventListener("click", function() {
      historyList.innerHTML = "";
    })
 



















