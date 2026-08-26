## Javacript object notation

- json is MIME type: media type
  - MIME type: is a string sent alsong with a file idnidicating the type of the file.

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```


- JSON syntax restrictions:
  - it can only have serializable data types. 
    - primitive: true, false, null 
    - non primitives:json can contain object literals and arrays 
    - string must be in ""
    - numebers must be written in decimal notation
    - each property must be in key value pair 
    - objects and arrats cannot contain trailing commas
    - comments not allowed 

## Converting between objects aand text 
- parse() : accepts a json string as parameter and returns the corresonding js object .
- stringify() : accepts an object as a parameter and returns the equivalent json string. 



```
