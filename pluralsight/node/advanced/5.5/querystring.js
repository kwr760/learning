const querystring = require('5.5/querystring');

console.log(
  querystring.stringify({
    name: 'Samer Buna',
    website: 'jsComplete.com/samer-buna'
  })
);

console.log(
  querystring.parse('name=Samer%20Buna&website=jsComplete.com%2Fsamer-buna')
);
