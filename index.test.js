const axios = require("axios")

test('Check if a query is returning \'OK\'', () => {
  return axios({
    url: 'http://localhost:4000/graphql',
    method: 'post',
    data: { query: `query { posts( pageSize: 10) { hasMore cursor posts { id } } }` }
  }).then(res => { expect(res.status).toBe(200) })
})