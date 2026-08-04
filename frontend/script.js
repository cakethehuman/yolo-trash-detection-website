document.addEventListener("DOMContentLoaded", () => {
    const imageInput = document.getElementById("imageInput");
    const previewImage = document.getElementById("previewImage");
    const previewText = document.getElementById("previewText");
    const detectBtn = document.getElementById("detectBtn");
    
    const resultImageContainer = document.getElementById("resultImageContainer");
    const resultImage = document.getElementById("resultImage");
    const predictionText = document.getElementById("prediction");
    const confidenceText = document.getElementById("confidence");
    const objectsText = document.getElementById("objects");

    let uploadedImageUrl = null;

    imageInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        
        if (file) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                uploadedImageUrl = e.target.result;
                
                previewImage.src = uploadedImageUrl;
                previewImage.style.display = "block"; 
                previewText.style.display = "none";   
                
                if (resultImageContainer) {
                    resultImageContainer.style.display = "none";
                }
                
                predictionText.textContent = "-";
                confidenceText.textContent = "-";
                objectsText.textContent = "-";
            };
            
            reader.readAsDataURL(file);
        } else {
            previewImage.style.display = "none";
            previewText.style.display = "block";
            uploadedImageUrl = null;
        }
    });


    // Data Dummy
    detectBtn.addEventListener("click", () => {
        if (!uploadedImageUrl) {
            alert("Upload gambar!");
            return;
        }

        if (resultImageContainer && resultImage) {
            resultImage.src = uploadedImageUrl;
            resultImageContainer.style.display = "flex"; 
        }

        predictionText.textContent = "Plastic Bottle";
        confidenceText.textContent = "98.5%";
        objectsText.textContent = "1";
    });
});