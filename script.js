document.addEventListener('DOMContentLoaded', function() {
    // Code to fetch data and display it in the page
    const totalBookings = document.getElementById('total-bookings');
    const activeUsers = document.getElementById('active-users');
    const bookingsList = document.getElementById('bookings-list');
    const usersList = document.getElementById('users-list');

    // Example data fetching
    const bookings = [
        { startDate: '2024-04-01', endDate: '2024-04-03', location: 'Conference Room A', attendees: 10 },
        { startDate: '2024-04-05', endDate: '2024-04-07', location: 'Conference Room B', attendees: 5 },
    ];
    const users = [
        { name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
        { name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
    ];

    // Display bookings and users in the page
    bookings.forEach(function(booking) {
        const bookingRow = document.createElement('tr');
        bookingRow.innerHTML = `
        <td>${booking.startDate}</td>
        <td>${booking.endDate}</td>
        <td>${booking.location}</td>
        <td>${booking.attendees}</td>
        <td><button>Edit</button></td>
      `;
        bookingsList.appendChild(bookingRow);
    });

    users.forEach(function(user) {
        const userRow = document.createElement('tr');
        userRow.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
        <td><button>Edit</button></td>
      `;
        usersList.appendChild(userRow);
    });

    // Example code to update data
    const updateButton = document.getElementById('update-data');
    updateButton.addEventListener('click', function() {
        // Code to update bookings and users
        const updatedBookings = [
            { startDate: '2024-04-02', endDate: '2024-04-04', location: 'Conference Room A', attendees: 15 },
            { startDate: '2024-04-06', endDate: '2024-04-08', location: 'Conference Room B', attendees: 7 },
        ];
        const updatedUsers = [
            { name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
            { name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Manager' },
        ];

        // Update bookings and users in the page
        bookingsList.innerHTML = '';
        usersList.innerHTML = '';
        updatedBookings.forEach(function(booking) {
            const bookingRow = document.createElement('tr');
            bookingRow.innerHTML = `
          <td>${booking.startDate}</td>
          <td>${booking.endDate}</td>
          <td>${booking.location}</td>
          <td>${booking.attendees}</td>
          <td><button>Edit</button></td>
        `;
            bookingsList.appendChild(bookingRow);
        });

        updatedUsers.forEach(function(user) {
            const userRow = document.createElement('tr');
            userRow.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.role}</td>
          <td><button>Edit</button></td>
        `;
            usersList.appendChild(userRow);
        });
    });
});