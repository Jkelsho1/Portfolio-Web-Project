document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const hamburgIcon = document.querySelector('.hamburg');
  const cancelIcon = document.querySelector('.cancel');

  // Show dropdown when hamburg icon clicked
  function hamburg() {
    dropdown.classList.add('show');
  }

  // Hide dropdown when cancel icon clicked
  function cancel() {
    dropdown.classList.remove('show');
  }

  // Close dropdown when clicking outside of dropdown or hamburg icon
  window.addEventListener('click', (e) => {
    if (
      !dropdown.contains(e.target) &&
      !hamburgIcon.contains(e.target)
    ) {
      dropdown.classList.remove('show');
    }
  });

  // Scroll smoothly to footer when called
  function scrollToFooter() {
    const footer = document.getElementById("footer-main");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  }

  // ====== EMAIL NOTIFICATION FORM LOGIC ======
  const subscribeForm = document.getElementById('subscribeForm');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address.');
        return;
      }
      fetch('/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email})
      })
      .then(res => res.json())
      .then(data => alert(data.message))
      .catch(err => alert('Error sending notification.'));
    });
  }

  // ====== DOWNLOAD CV BUTTON LOGIC ======
  const downloadBtn = document.getElementById('downloadBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
      const link = document.createElement('a');
      link.href = 'files/John-Michael-Decen-Guy-joco-CV.pdf'; // Adjust path if needed
      link.download = 'John-Michael-Decen-Guy-joco-CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
});
