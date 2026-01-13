  function typeText(id, text) {
    let i = 0;
    const interval = setInterval(() => {
      document.getElementById(id).textContent += text[i];
      i++;
      if (i === text.length) clearInterval(interval);
    }, 80);
  }

  setTimeout(() => {
    document.getElementById("delayedSection").style.display = "block";
    typeText("delayedHeading", "Diet Plan for Delayed Periods");
  }, 1000);

  setTimeout(() => {
    document.getElementById("earlySection").style.display = "block";
    typeText("earlyHeading", "Diet Plan for Early Periods");
  }, 4000);
