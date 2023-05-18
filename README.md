# CampusLink-BackEnd

get all users : (GET)

```

http://localhost:6000/api/user/ 

```

get one user : (GET) 

```

http://localhost:6000/api/user/:UUID 

```

create new user : (PUSH) 

``` 

http://localhost:6000/api/user/ 

```

body :

```
{
  "UUID": "9c",
  "username": "john123",
  "fullname": "John Doe",
  "password": "mypassword",
  "securityQA": [
    {
      "question": "What is your favorite color?",
      "answer": "blue"
      
    },
    {
      "question": "What is your pet's name?",
      "answer": "fluffy"
    }
  ],
  "profilePic": "https://example.com/profilepic.jpg",
  "phoneNumber": "123-456-7890",
  "gender": "male",
  "age": 25,
  "isAlumini": true
}
```

check login user : (GET)

```

http://localhost:6000/api/user/login/:username/:password

```

This will return the user data if credentials are correct, if not the it will return 
```
{
  "message": "not found from this username (username)"
}
```


