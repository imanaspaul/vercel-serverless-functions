let uu = require('url-unshort')();

module.exports = (req, res) => {
  const url  = req.query.url

  uu.expand(url)
  .then(url => {
    if (ourl) res.status(200).send(`Original url is: ${ourl}`);
    // no shortening service or an unknown one is used
    else res.status(404).send(`No shorten url found`);
  })
  .catch(err => console.log(err));
}