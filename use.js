function getHeads(department) {
    var departmentHeadsContainer = document.getElementById('department-heads');
    var allHeadsContainer = document.getElementById('all-heads');

    // Move all heads to the "all heads" container
    const children = departmentHeadsContainer.children;
    Array.from(children).forEach(head => {
        allHeadsContainer.appendChild(head);
    });

    // Display the selected department name
    document.getElementById('department-name').innerHTML = department;
    document.getElementById('selected-department').style.display = "block";

    // Move the specific department heads back to the "department heads" container
    var heads = document.getElementsByClassName(department.split(" ").join(""));
    for (var i = 0; i < heads.length; i++) {
        departmentHeadsContainer.appendChild(heads.item(i));
    }
}
