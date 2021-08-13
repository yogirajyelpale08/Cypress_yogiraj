

describe('verify get request',()=>{

    it('get',()=>{

        cy.request({
            method : 'GET',
            url : 'https://reqres.in/api/users?page=2'
        }).then((response)=>{

            expect(response.status).to.be.eql(200)
            expect(response.duration).to.be.lessThan(1500)
            expect(response.headers).to.contain({
                "transfer-encoding" :"chunked",
                "content-type" : "application/json; charset=utf-8"

            })

            expect(response.body.page).to.eq(2)
            expect(response.body).property('page')
            expect(response.body).property('total_pages')
            expect(response.body).property('per_page')
            expect(response.body).property('data')
            expect(response.body).to.have.property('data').with.lengthOf(6)
            expect(response.body).to.include.keys('total_pages','per_page','data')


        })
    })
})