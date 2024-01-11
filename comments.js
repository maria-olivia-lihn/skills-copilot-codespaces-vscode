// Create web server using Express.js and handle requests to the /comments path
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Path: comments/:id
// Create web server using Express.js and handle requests to the /comments/:id path
app.get('/comments/:id', function(req, res) {
  // Get the id from the URL parameters
  // Note that the id is a string, not a number, so we need to convert it to a number
  var id = parseInt(req.params.id, 10);

  // Find the comment with the given id
  var comment = comments.filter(function(comment) {
    return comment.id === id;
  })[0];

  // Return the comment as JSON
  res.json(comment);
});

// Path: comments
// Create web server using Express.js and handle POST requests to the /comments path
app.post('/comments', function(req, res) {
  // Note that we don't have to worry about JSON parsing: Express.js does that for us
  var comment = {
    id: Date.now(),