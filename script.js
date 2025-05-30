const userContainer = document.getElementById('user-container');
const errorMessage = document.getElementById('error-message');

async function fetchUsers() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const users = await res.json();

    users.forEach(user => {
      const card = document.createElement('div');
      card.className = `
        bg-slate-800 text-white rounded-xl shadow-xl 
        hover:shadow-2xl p-6 transition duration-300 border border-slate-700
      `;

      card.innerHTML = `
  <div class="flex items-center space-x-4 mb-3">
    <img src="https://i.pravatar.cc/40?u=${user.id}" alt="EMP" class="w-10 h-10 rounded-full border-2 border-white">
    <h2 class="text-2xl font-bold">${user.name}</h2>
  </div>
  <p class="mb-1"><span class="font-semibold text-slate-300">Email:</span>
    <a href="mailto:${user.email}" class="text-blue-400 hover:underline">${user.email}</a>
  </p>
  <p class="mb-4"><span class="font-semibold text-slate-300">Address:</span>
    ${user.address.street}, ${user.address.city}
  </p>
  <div class="flex gap-3">
    <a href="update.html?id=${user.id}" 
       class="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-md transition">
      Update
    </a>
    <button class="bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold px-4 py-2 rounded-md transition"
      onclick="handleDelete(this)">
      Delete
    </button>
  </div>
`;


      userContainer.appendChild(card);
    });
  } catch (error) {
    errorMessage.textContent = `Failed to load users: ${error.message}`;
  }
}

function handleDelete(buttonElement) {
  if (confirm("Are you sure you want to delete this user?")) {
    const card = buttonElement.closest('div.bg-slate-800');
    card.remove();
  }
}

fetchUsers();
