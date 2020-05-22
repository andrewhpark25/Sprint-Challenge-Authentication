
exports.seed = function (knex, Promise) {
  return knex('users').truncate()
  .then(function () {
  return knex('users').insert([
    {
      id:1,
      username: "admin",
      password: "keepitsecret,keepitsafe."
  
    },
    { id:2,
      username: "me",
      password: "changethepass"
    },
    {
      id:3,
      username: "nobody",
      password: "hasnorole"
    }
  ]);
})
}
 