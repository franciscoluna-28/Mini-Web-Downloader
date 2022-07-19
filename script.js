const fileInput = document.getElementById("input-form"),
downloadButton = document.getElementById("download-btn");

downloadButton.addEventListener("click", c => {
    c.preventDefault();	
    downloadButton.innerText = "Downloading...";
    fetchFile(fileInput.value)
});

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {

        let tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");

        aTag.href = tempUrl;



        aTag.download = url.replace(/^.*[\\\/]/, '');
        
    


        document.body.appendChild(aTag);

        aTag.click();
        downloadButton.innerText = "Download File";

        URL.revokeObjectURL(tempUrl);
        aTag.remove();
    
    }).catch(() => {
        alert("Download Failed or Invalid URL");
        downloadButton.innerText = "Download File";
    });
        
       
}




const isValidUrl = urlString=> {
    let url;
    try { 
          url =new URL(urlString); 
    }
    catch(e){ 
      return false; 
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

