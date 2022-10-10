      var customerNode = document.getElementById("CustName");
      var emailNode = document.getElementById("email");
      var dateNode = document.getElementById("startDate");
      var expNode = document.getElementById("experience");

      customerNode.addEventListener("change", chkName, false);
      emailNode.addEventListener("change", chkemail, false);
      dateNode.addEventListener("change", chkdate, false);
      expNode.addEventListener("change",chkexp, false);