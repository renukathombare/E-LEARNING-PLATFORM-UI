// Get course name from URL
const urlParams = new URLSearchParams(window.location.search);
const courseName = urlParams.get("name");

if (courseName && document.getElementById("courseTitle")) {
    document.getElementById("courseTitle").innerText = courseName;
}

// Mark course as completed
function markCompleted() {
    let completedCourses = JSON.parse(localStorage.getItem("courses")) || [];

    if (!completedCourses.includes(courseName)) {
        completedCourses.push(courseName);
        localStorage.setItem("courses", JSON.stringify(completedCourses));
        alert("Course marked as completed!");
    }
}

// Show completed courses
const completedList = document.getElementById("completedList");

if (completedList) {
    let savedCourses = JSON.parse(localStorage.getItem("courses")) || [];

    savedCourses.forEach(course => {
        let li = document.createElement("li");
        li.textContent = course;
        completedList.appendChild(li);
    });
}
