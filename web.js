document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    const sidebar = document.getElementById('sidebar');
    const openSidebarButton = document.getElementById('openSidebarButton');
    const closeSidebarButton = document.getElementById('closeSidebarButton');
    const detailsButtons = document.querySelectorAll('.details');
    const sectionTitle = document.getElementById("sectionTitle");
    const sectionContent = document.getElementById("sectionContent");

    function display() {
        header.innerHTML = '<h1> Welcome to Virtual Job Fair</h1>';
    }

    function openSidebar() {
        sidebar.style.left = '0';
    }
    //function to display about us and contact us
    function displayInfo(title, content) {
        sectionTitle.textContent = title;
        sectionContent.textContent = content;
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
    document.querySelector("footer li:nth-child(1)").addEventListener("click", function() {
        displayInfo("Contact Us", "You can reach us at smartvillage@example.com.");
    });
    document.querySelector("footer li:nth-child(2)").addEventListener("click", function() {
        displayInfo("About Us", "We are a leading job fair organizer committed to connecting job seekers and employers.");
    });
    display();
});
