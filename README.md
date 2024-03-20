Cricket Fantacy 10 api task, are following...
test this APIs on postMan on http://localhost:4000/apis

1. post ('/send-otp') with body phoneNumber, otp will get on respons, we had not used smtp services hear now.
2. post('/verify-otp') with body phoneNumber and opt, after verify will get response.
3. post('/resend-otp') with body phoneNumber, will get response of  otp,
4. get('/user-profile/:userId') with params userId, will get response of user Profile.
5. post('/new-user') for creating new user profile.
6. post('/send-notification') notification will to all user, will get response of success.
7. get('/matches/:userId') with params userId, will get response of array of matches for a user.
8. get('/my-transactions/:userId') with params userId, will get response of all transaction of a user.
9. get('/wallet/:userId') with params userId, will get response of wallet detailes of  user a object.
10. get('/balance/:userId') with params userId, will get response of balance.
11. post('/add-cash') with body userId and amount, will get response of added successfully.
