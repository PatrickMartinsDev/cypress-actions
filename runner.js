const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImMzMzQyY2NmLWVhZTQtNDgzZS1iNTMxLTQ4OWQ0NzU5MzQxYy0xNzAzMjUyMzkwMDgwIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMjVlMDJmMmQtOWIyOC00MDU3LWJlYWMtYzY2MjRjNjYxNjU4IiwidHlwZSI6InQifQ.fBfPr49gWXpPuxkiRtT8o46Oddo3t9wI2fWlJ18TjMo'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
