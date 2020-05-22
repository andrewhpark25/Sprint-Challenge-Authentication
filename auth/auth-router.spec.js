const server = require('../api/server.js');

const supertest = require('supertest');




describe('server', () => {
    it('can run the tests', () => {
        expect(true).toBeTruthy();
    })

     
         describe('POST /register', () => {
            it('should return status 201', async () => {

                const response = await supertest(server).post('/api/auth/register').send({username:"ronaldo", password:"juventus"})

                 expect(response.status).toBe(201);
              
                
              }) 
             
         })

         describe('POST /register', () => {
            it('return status 400 if nothing is sent', async () => {

                const response = await supertest(server).post('/api/auth/register')

                 expect(response.status).toBe(400);
              
              
              }) 
             
         })

         
        describe('POST /login', () => {
            it('should return status 200', async () => {

                const response = await  supertest(server).post('/api/auth/login').send({username:"ronaldo", password:"juventus"})

                 expect(response.status).toBe(200);
              
                
              }) 
             
         })
         describe('POST /login', () => {
            it('should return status 401 if not authenticated user', async () => {

                const response = await  supertest(server).post('/api/auth/login').send({username:"someone", password:"new123"})

                 expect(response.status).toBe(401);
              
                
              }) 
             
         })

         describe('GET /logout', () => {
            it('should return status 204', () => {
                return (
                supertest(server).get('/api/auth/logout').then(response => {
                    expect(response.status).toBe(204);
                })
                );
              }) 
         })
         
   
})