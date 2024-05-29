

// over mij overlay
function changeText(newText) {
  document.getElementById('text-container').innerText = newText;
}


//button active over mij
document.addEventListener('DOMContentLoaded', () => {
  // Select all buttons
  const buttons = document.querySelectorAll('.btn');

  // Function to handle button clicks
  function handleButtonClick(event) {
    // Remove the 'active' class from all buttons
    buttons.forEach(button => button.classList.remove('active'));

    // Add the 'active' class to the clicked button
    event.target.classList.add('active');
  }

  // Add click event listener to each button
  buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
  });

  // Set the first button as active by default
  buttons[0].classList.add('active');
});


//over mij button
function navigateToPage() {
  window.location.href = "https://www.danieltukker.nl/";
}