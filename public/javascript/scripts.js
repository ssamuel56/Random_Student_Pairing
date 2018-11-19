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
    if (addStudentTextInput.value == '' || !/^[a-zA-Z][a-zA-Z\s]+$/.test(addStudentTextInput.value)) {
      alert("Please Enter a name")
      addStudentTextInput.value = ''
    }else {
      studentList.addStudent(addStudentTextInput.value);
      addStudentTextInput.value = '';
      view.displayStudents();
    }
  },
}

var view = {
  displayStudents: function() {
    var hiddenStudentsInput = document.getElementById('studentlist')
    var studentsUl = document.querySelector('ul');
    studentsUl.innerHTML = '';
    hiddenStudentsInput.value = '';
    studentList.students.forEach(function(student, position) {
      var studentLi = document.createElement('li');
      var deletionButton = document.createElement('button')
      deletionButton.type = "button"
      deletionButton.innerHTML = "x"
      deletionButton.id = "button" + position;
      studentLi.id = position;
      deletionButton.onclick = function() {
        var elem = document.getElementById(position);
        var butt = document.getElementById("button" + position);
        studentsUl.removeChild(elem);
        butt.parentNode.removeChild(butt);
        studentList.students.splice(position, 1);
        view.displayStudents();
        return false;
      };
      hiddenStudentsInput.value += student.studentText + ',';
      studentLi.textContent = student.studentText;
      studentsUl.appendChild(studentLi);
      studentsUl.appendChild(deletionButton);
    }, this);
    console.log(studentList.students)
  },
  setUpEventListeners: function() {
    var studentsUl = document.querySelector('ul');

    studentsUl.addEventListener('click', function(event) {
      var elementClicked = event.target;
    });
  }
};

view.setUpEventListeners();
