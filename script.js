document.getElementById('button').addEventListener('click', mussuem)

let age = 18

let day = ''
function mussuem () {
  age = document.getElementById('age').value
  day = document.getElementById('day').value
  if ((day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Friday' || day === 'Thursday') && (age > 18)) {
    document.getElementById('results').innerHTML = 'Time for work'
  } else if ((age < 18) && (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Friday' || day === 'Thursday')) {
    document.getElementById('results').innerHTML = 'Time to go to school'
  } else { document.getElementById('results').innerHTML = 'Time for the weekend'

  }
}
