document.addEventListener('DOMContentLoaded', function () {
    const bitgetYes = document.querySelector('input[name="bitget-account"][value="yes"]');
    const bitgetNo = document.querySelector('input[name="bitget-account"][value="no"]');
    const uidField = document.getElementById('uid-field');
    const registerLinkField = document.getElementById('register-link-field');
  
    bitgetYes.addEventListener('change', function () {
      uidField.style.display = 'block';
      registerLinkField.style.display = 'none';
    });
  
    bitgetNo.addEventListener('change', function () {
      uidField.style.display = 'none';
      registerLinkField.style.display = 'block';
    });
  });