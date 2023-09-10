document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    const sidebar = document.getElementById('sidebar');
    const openSidebarButton = document.getElementById('openSidebarButton');
    const closeSidebarButton = document.getElementById('closeSidebarButton');
    const detailsButtons = document.querySelectorAll('details');

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
    //Function for details button
    function toggleJobDetails(){
        const jobDetails= this.nextElementSibling;
        jobDetails.classlist.toggle('hidden');
    }
    // Event listeners for buttons
    openSidebarButton.addEventListener('click', openSidebar);
    closeSidebarButton.addEventListener('click', closeSidebar);
    detailsButtons.forEach(function(button) {
        button.addEventListener('click', toggleJobDetails);
    });
    display();
});
