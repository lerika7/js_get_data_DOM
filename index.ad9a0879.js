var t=document.querySelectorAll("span.population"),e=[],o=0,n=0;t.forEach(function(t){var a=+t.textContent.replaceAll(",","");e.push(a),o+=a,n++});var a=o/n,l=o.toLocaleString("en-US"),r=a.toLocaleString("en-US");document.querySelector("span.total-population").textContent=l,document.querySelector("span.average-population").textContent=r;
//# sourceMappingURL=index.ad9a0879.js.map
