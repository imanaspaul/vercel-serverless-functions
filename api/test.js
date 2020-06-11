let uu = require('url-unshort')();

module.exports = (req, res) => {
  const {url = 'https://bit.ly/2Auha5dd' } = req.query

  uu.expand(url)
  .then(url => {
    if (url) res.status(200).send(`Original url is: ${url}`);
    // no shortening service or an unknown one is used
    else res.status(404).send(`No shorten url found`);
  })
  .catch(err => console.log(err));
}