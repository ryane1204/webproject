function loadContent(page) {
  // Fetch the content based on the clicked page from the server
  fetch(`/content/${page}.html`)
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error("Failed to load content");
      }
    })
    .then(data => {
      // Insert the content into the #content section
      document.getElementById('content').innerHTML = data;
    })
    .catch(error => {
      document.getElementById('content').innerHTML = '<p>Error loading content</p>';
      console.error(error);
    });
}
