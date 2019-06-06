module.exports.notFound = (req, res) => {
  res.status(404).render("404", {pageTitle: 'Not Found', path: '404-not-found'});
};