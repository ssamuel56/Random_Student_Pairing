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
      studentLi.id = position;
      hiddenStudentsInput.value += student.studentText + ',';
      studentLi.textContent = student.studentText;
      studentsUl.appendChild(studentLi);
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
