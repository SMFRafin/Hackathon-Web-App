document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    const sidebar = document.getElementById('sidebar');
    const openSidebarButton = document.getElementById('openSidebarButton');
    const closeSidebarButton = document.getElementById('closeSidebarButton');

    function display() {
        header.innerHTML = '<h1> Welcome to Virtual Job Fair</h1>';
    }

    function openSidebar() {
        sidebar.style.left = '0';
    }

    // Function to close the sidebar
    function closeSidebar() {
        sidebar.style.left = '-250px';
    }

    // Event listeners for buttons
    openSidebarButton.addEventListener('click', openSidebar);
    closeSidebarButton.addEventListener('click', closeSidebar);
    display();
});
