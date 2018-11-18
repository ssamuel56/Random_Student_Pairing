var studentList = {
  students: [],
  addStudent: function(studentText) {
    this.students.push({
      studentText: studentText
    });
  },
}

var handlers = {
  addStudent: function() {
    var addStudentTextInput = document.getElementById('addStudentTextInput');
    studentList.addStudent(addStudentTextInput.value);
    addStudentTextInput.value = '';
    view.displayStudents();
  },
}

var view = {
  displayStudents: function() {
    var hiddenStudentsInput = document.getElementById('studentlist')
    var studentsUl = document.querySelector('ul');
    studentsUl.innerHTML = '';
    hiddenStudentsInput.value= '';

    studentList.students.forEach(function(student, position) {
    var studentLi = document.createElement('li');
    var deletionButton = document.createElement('button')
    deletionButton.type = "button"
    deletionButton.innerHTML = "Delete"
      studentLi.id = position;
      deletionButton.onclick = function() {studentList.students.splice(studentLi.id, 1)}
      hiddenStudentsInput.value += student.studentText + ',';
      studentLi.textContent = student.studentText;
      studentsUl.appendChild(studentLi);
      studentsUl.appendChild(deletionButton);
    }, this);
  },
  setUpEventListeners: function() {
    var studentsUl = document.querySelector('ul');

    studentsUl.addEventListener('click', function(event) {
      var elementClicked = event.target;
    });
  }
};

var hiddenList = {
  addingHiddenStudents: function() {
    var hiddenStudentsInput = document.getElementById('studentlist')
    hiddenStudentInput.innerHTML += studentList.students
  }
};

view.setUpEventListeners();
