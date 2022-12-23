## API Contract
Authorization true (admin, student)
- [Create new image](#create-new-image)
- [Get All](#get-all)
- [Delete](#delete)


### Create New Image

### Description
This api for create new image media

### Method
`POST`

### URL
```diff
{URL_API}/api/v1/media
```

### Body
```diff
{
  "image": "image-parsing-base64"
}
```
### Response
```diff
{
    "status": "success",
    "data": {
        "id": 9,
        "image": "localhost:8080/images/1671766912596.png"
    }
}
```
### Error Response
email is exist
```diff
{
    "status": "error",
    "message": "invalid base64"
}
```

<br>
<br>

---

### Get All

### Description
This api for get all image media

### Method
`GET`

### URL
```diff
{URL_API}/api/v1/media
```

### Response
```diff
{
    "status": "success",
    "data": [
        {
            "id": 2,
            "image": "localhost:8080/images/1671710225277.png"
        },
        {
            "id": 3,
            "image": "localhost:8080/images/1671710269546.png"
        },
        {
            "id": 4,
            "image": "localhost:8080/images/1671719577992.png"
        },
        ...
    ]
}
```
<br>
<br>

---

### Delete

### Description
This api for delete image media

### Method
`DELET`

### URL
```diff
{URL_API}/api/v1/media/{media_id}
```

### Response
```diff
{
    "status": "success",
    "message": "image deleted"
}
```

### Error Response
```diff
{
    "status": "error",
    "message": "media not found"
}
```

<br>
<br>

---