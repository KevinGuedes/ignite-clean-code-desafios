const necessaryGradeToBeApproved = 7
const studentGrade = 10

const numberOfAbsensesToFailSchool = 100
const studentNumberOfAbsenses = 109

function checkIfStudentPassedTheSchoolYear() {
  const isStudentGradeLowerThanTheNecessary =
    studentGrade < necessaryGradeToBeApproved

  if (isStudentGradeLowerThanTheNecessary) {
    return {
      error: true,
      message:
        'Student was not approved because his grade was below the necessary.',
    }
  }

  const hasStudentFailedDuteToAbsenses =
    studentNumberOfAbsenses > numberOfAbsensesToFailSchool

  if (hasStudentFailedDuteToAbsenses) {
    return {
      error: true,
      message: 'Student was not approved because of his absenses',
    }
  }

  return { error: false, message: 'Student was approved :)' }
}

console.log(checkIfStudentPassedTheSchoolYear())
