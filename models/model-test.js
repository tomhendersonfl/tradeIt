var knex = require('../db/knex')
var Tenders = require('../models/tenders')

Tenders.all().then(function(tenders) {
  console.log(tenders.rows[0].name);
})






return
