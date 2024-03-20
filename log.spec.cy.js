/// <reference types="Cypress" />
describe('api spec', () => {
  it('api test using reqres', () => {
   cy.request('GET','https://reqres.in/api/users?page=2').then((response)=>{
    expect(response.status).to.eq(200)
    expect(response.body.data[0].first_name).to.eq('Michael')
    expect(response.body.data[0].last_name).to.eq('Lawson')
   })
  })
it('api test using post reqres', () => {
var user={
    "name": "morpheus",
    "job": "tester"
}
cy.request('POST','https://reqres.in/api/users',user).then((response)=>{
  expect(response.status).to.eq(201)
  expect(response.body.name).to.eq('morpheus')
  expect(response.body.job).to.eq('tester')
  expect(response.body.id).to.eq('2')
})

  
})
})
