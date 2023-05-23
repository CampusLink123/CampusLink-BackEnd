# CampusLink-BackEnd


<img src="https://th.bing.com/th/id/R.a717eafa290bf333c4dd1c86076c5b9e?rik=pXCeL7BeH7OpqA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnodejs-logo-vector-png-node-js-logo-nodejs-javascript-source-code-960.png&ehk=NaiEBuqG0x3uVgAGlcLZYzHf4HXNJlhbuaDOEskHpP0%3d&risl=&pid=ImgRaw&r=0" height=200 style="margin-right: 100px;" /><img src="[https://th.bing.com/th/id/R.a717eafa290bf333c4dd1c86076c5b9e?rik=pXCeL7BeH7OpqA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnodejs-logo-vector-png-node-js-logo-nodejs-javascript-source-code-960.png&ehk=NaiEBuqG0x3uVgAGlcLZYzHf4HXNJlhbuaDOEskHpP0%3d&risl=&pid=ImgRaw&r=0](https://th.bing.com/th/id/OIP.WuxgQQ2c7k2W90bwJkm7ZwHaGE?pid=ImgDet&rs=1)" width=100 style="margin-right: 100px;" /><img style="margin-left: 100px;" src="https://th.bing.com/th/id/R.f974df63ffb41fa18af01733177acfed?rik=9B4V0zj4DBnSLQ&riu=http%3a%2f%2fverleihsystem.com%2fwp-content%2fuploads%2f2015%2f06%2frest-api.png&ehk=nuYQMXUgTE29BCwzMyQNsTTEqVS2h%2fFGRlp9Fs0uugs%3d&risl=&pid=ImgRaw&r=0" alt="REST API logo" height=200 />



## Get all users : (GET)

```

https://campuslinkbackend.onrender.com/api/user/ 

```

## Get one user : (GET) 

```

https://campuslinkbackend.onrender.com/api/user/:UUID 

```

## Greate new user : (PUSH) 

``` 

https://campuslinkbackend.onrender.com/api/user/ 

```

body :

```
{
  "UUID": "2hs8",
  "username": "test123",
  "fullname": "John Doe",
  "password": "mypassword",
  "Class" : "TYIT",
  "Div" : "B",
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

## Check login user : (GET)

```

https://campuslinkbackend.onrender.com/api/user/login/:username/:password

```

This will return the user data if credentials are correct, if not the it will return 
```
{
  "message": "not found from this username (username)"
}
```


