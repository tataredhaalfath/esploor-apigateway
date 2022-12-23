## API Contract

### Params
Authorization true <update, logout, get detail>
- [Register](#register)
- [Login](#login)
- [Update](#update)
- [Get Detail](#get-detail)
- [Logout](#logout)
- [Create Refresh Token](#create-refresh-token)



### Register

### Description
This api for register new user

### Method
`POST`

### URL
```diff
{URL_API}/api/v1/users/register
```

### Body
```diff
{
  "name":"fath",
  "email":"fath@gmail.com",
  "password":"12345678",
  "profession":"web developer"
}
```
### Response
```diff
{
  "status": "success",
  "data": {
    "id": 5
  }
}
```
### Error Response
email is exist
```diff
{
  "status": "error",
  "message": "email already exist"
}
```
password less than 6 character
```diff
{
  "status": "error",
  "message": [
    {
      "type": "stringMin",
      "message": "The 'password' field length must be greater than or equal to 6 characters long.",
      "field": "password",
      "expected": 6,
      "actual": 5
    }
  ]
}
```

<br>
<br>

---

### Login

### Description
This api for login

### Method
`POST`

### URL
```diff
{URL_API}/api/v1/users/login
```

### Body
```diff
{
  "email":"fath@gmail.com",
  "password":"12345678"
}
```
### Response
```diff
{
  "status": "success",
  "data": {
    "id": 5,
    "name": "fath",
    "email": "fath@gmail.com",
    "role": "student",
    "avatar": null,
    "profession": "web developer"
  }
}
```
### Error Response
user not found
```diff
{
  "status": "error",
  "message": "user not found"
}
```
password dont match
```diff
{
  "status": "error",
  "message": "password not correct"
}
```

<br>
<br>

---


### Update

### Description
Api for update data user

### Method
`PUT`

### URL
```diff
{URL_API}/api/v1/users/users
```

### Body
```diff
{
  "name":"al fath",
  "email":"fath@gmail.com",
  "password":"12345678",
  "avatar":"https://imagesa.com",
  "profession":"backend web dev" 
}

```
### Response
```diff
{
  "status": "success",
  "data": {
    "id": 5,
    "name": "al fath",
    "email": "fath@gmail.com",
    "profession": "backend web dev",
    "avatar": "https://imagesa.com"
  }
}
```

<br>
<br>

---

### Get Detail

### Description
Api for get detail data user

### Method
`GET`

### URL
```diff
{URL_API}/api/v1/users
```

### Response
```diff
{
  "status": "success",
  "data": {
    "id": 5,
    "name": "al fath",
    "profession": "backend web dev",
    "avatar": "https://imagesa.com",
    "email": "fath@gmail.com",
    "role": "student"
  }
}
```

<br>
<br>

---


### Logout

### Description
Api for logout user session

### Method
`POST`

### URL
```diff
{URL_API}/api/v1/users/logout
```

### Response
```diff
{
  "status": "success",
  "message": "refresh token deleted"
}
```

<br>
<br>

---

### Create Refresh Token
Api for create new refresh token

### Method
`POST`

### URL
```diff
{URL_API}/api/v1/refresh-tokens
```

### Body
```diff
{
  "refresh_token":"2137sadhjkhu214dsa",
  "user_id": 5
}
```

### Response
```diff
{
    "status": "success",
    "data": {
        "id": 7
    }
}
```

<br>
<br>
