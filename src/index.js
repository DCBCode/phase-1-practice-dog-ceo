console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breedList = data.message;
        const ulElement = document.querySelector("ul");
  
        // Create the dropdown select element
        const selectElement = document.createElement("select");
  
        // Add options to the dropdown for letters a-d
        const letters = ["a", "b", "c", "d"];
        letters.forEach(letter => {
          const optionElement = document.createElement("option");
          optionElement.value = letter;
          optionElement.textContent = letter;
          selectElement.appendChild(optionElement);
        });
  
        // Add change event listener to the dropdown select element
        selectElement.addEventListener("change", function(event) {
          const selectedLetter = event.target.value;
  
          // Filter the breeds based on the selected letter
          const filteredBreeds = Object.keys(breedList).filter(breed =>
            breed.startsWith(selectedLetter)
          );
  
          // Clear the current list of breeds
          ulElement.innerHTML = "";
  
          // Add the filtered breeds to the <ul>
          filteredBreeds.forEach(breed => {
            const liElement = document.createElement("li");
            liElement.textContent = breed;
            ulElement.appendChild(liElement);
          });
        });
  
        // Append the dropdown select element to the DOM
        document.body.appendChild(selectElement);
  
        // Iterate over the breeds and add them to the <ul>
        for (const breed in breedList) {
          const liElement = document.createElement("li");
          liElement.textContent = breed;
          ulElement.appendChild(liElement);
        }
      })
      .catch(error => {
        console.log("Error fetching dog breeds:", error);
      });
  });
  function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const imageUrls = data.message;
  
        imageUrls.forEach(imageUrl => {
          const imgElement = document.createElement("img");
          imgElement.src = imageUrl;
          document.body.appendChild(imgElement);
        });
      })
      .catch(error => {
        console.log("Error fetching images:", error);
      });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    fetchImages();
  });