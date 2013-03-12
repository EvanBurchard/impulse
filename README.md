# Impulse 
A basic app for starting node projects.  

# What packages are included?
* Express framework
* Mocha Tests with supertest for route testing
* Jade HTML templating
* Stylus/Nib CSS templating
* Supervisor for watching changes to the app

# How do I set it up?
npm install

# How do I run the tests?
"npm test" (alias for "make test" and "mocha")
"make autotest" (alias for "mocha --watch")
"make docs" will save the output of your tests in docs/test.html

# How do I run the app?
"node app.js" (or "supervisor app.js" to watch it)
