const params = new URLSearchParams(window.location.search);
const userId = params.get('id');
const form = document.getElementById('update-form');

if (userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(user => {
      document.getElementById('user-id').value = user.id;
      document.getElementById('name').value = user.name;
      document.getElementById('email').value = user.email;
      document.getElementById('city').value = user.address.city;
    });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = {
    id: document.getElementById('user-id').value,
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    city: document.getElementById('city').value
  };
  
  console.log('Updated data:', data);
  alert('User updated (not saved to real server — demo only)');
});
