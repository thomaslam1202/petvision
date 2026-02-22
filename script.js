const BACKEND_URL = "https://thomaslam1202-petvision-backend.hf.space";

async function predict(imageFile) {
    const formData = new FormData();
    formData.append("file", imageFile);

    // Show loading state
    document.getElementById("result").innerText = "Predicting...";

    try {
        const response = await fetch(`${BACKEND_URL}/predict`, {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        document.getElementById("result").innerText = 
            `Class: ${data.class} \nConfidence: ${(data.confidence * 100).toFixed(1)}%`;

    } catch (error) {
        document.getElementById("result").innerText = "Error: Could not reach backend. Try again.";
    }
}

document.getElementById("upload").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) predict(file);
});
