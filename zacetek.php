<html>
  <head>
    <script type="text/javascript">
      window.onload = function()
      {
      document.getElementById("Go").addEventListener('click', function()
      {
      Link=document.getElementById("zacetek").innerHTML+document.getElementById("server").value+document.getElementById("vmes").innerHTML+document.getElementById("language").value+document.getElementById("konec").innerHTML;
      var answer = confirm("Is this correct link?\n"+Link)
      if (answer)
      {
      document.location.href="traviantacticsonline.php?link="+Link;
      }
      }, true);
      };
    </script>
  </head>
  <body>
    