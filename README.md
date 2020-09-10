# First Families API

## Techincal Requirements

### Technologies Used

1. JavaScript - the language that the project and API are written in
2. Heroku - to host a deployed version of the API remotely
3. MongoDB Atlas - to host a remote version of my MongoDB database

### Dependencies  

I used three packages to construct my project:

1. `npm` - to install and manage the other packages used in my project
2. `express` - to allow HTTP connection and routing for my API
3. `mongoose` - to create the initial seed and to manipulate the database

Installation instructions for npm and Node.js can be found [here](https://www.npmjs.com/get-npm).  

Once `npm` is installed successfully on your machine, you can install the dependencies by navigating to your local directory for this repo and run `npm install`.  

All of the required dependencies can be found in `package.json` file.

### Authentication

As of the most current release of this API, there is no documentation. The First Families API is a completely open API

## Resource List  

Theere are currently two principal collections in the First Family API: the presidents themselves and the First Spouses. The exact structure of the of the data is listed below:

### President

#### GET /president/{_id}
```JSON
{
    "_id": "1",
    "name": "George Washington",
    "partner": [
        {
            "partner": [
                "1"
            ],
            "_id": "1p",
            "name": "Martha Dandridge",
            "born": "1731-06-02T00:00:00.000Z",
            "died": "1802-05-22T00:00:00.000Z",
            "__v": 0
        }
    ],
    "born": "1732-02-22T00:00:00.000Z",
    "died": "1799-12-14T00:00:00.000Z",
    "tenure": 8,
    "__v": 0
}
```
#### President

|**Variable**| **Type** |**Description** |
|---|---|---|
| `_id` | String |Key to the President collection, corresponds to chronological order of *first* time a president took office|
| `name` | String |Full name used by the president|
| `partner` | Array of References |Array of references to the president's previous partners |
| `born` | Date |Date the president was born |
| `died` | Date |Date the president died |
| `tenure` | Number |Number of years served in office|

### First Spouse

#### GET /firstSpouse/{_id}
```JSON
{
    "partner": [
        {
            "_id": "1",
            "name": "George Washington",
            "partner": [
                "1p"
            ],
            "born": "1732-02-22T00:00:00.000Z",
            "died": "1799-12-14T00:00:00.000Z",
            "tenure": 8,
            "__v": 0
        }
    ],
    "_id": "1p",
    "name": "Martha Dandridge",
    "born": "1731-06-02T00:00:00.000Z",
    "died": "1802-05-22T00:00:00.000Z",
    "__v": 0
}
```

#### First Spouse

|**Variable**| **Type** | **Description** |
|---|---|---|
| `_id` | String |Key to the FirstSpouse collection, related to the key from the President collection|
| `name` | String |Full maiden used by the first spouse|
| `partner` | Array of References |Array of references to the first spouse's previous partners |
| `born` | Date |Date the first spoue was born |
| `died` | Date |Date the first spouse died |
  
Notes:
* `partner` is a **required** field. By nature of the position, the first spouse is always married to a president of the United States. The opposite is not always true (James Buchanan was famously [a bachelor](https://en.wikipedia.org/wiki/James_Buchanan#Romantic_life))

## Additional Notes

### Addressing Sally Hemmings and Thomas Jefferson's Legacy  

Society has become more willing to confront the problematic and contradictory legacy of the Founding Fathers, in particular their treatment of enslaved and indigenous people. It is now widely accepted historical fact that Thomas Jefferson sexually assualted Sally Hemmings and fathered six children. 

Currently, Sally Hemmings is not included in this API because variables and phrases used to describe the first spouses is woefully inadequate to address Sally's continued assault and would paint their relationship in a light that was untrue and downplays the severity of Thomas Jefferson's actions. I feel that Ian Mortimer's description of King Henry V also captures Thomas Jefferson's troubled legacy, "a man may be a hero and yet a monster". 

In future versions of this API, I hope to address Sally Hemmings in a way that is accurate, and sensitive to the trauma caused by "the Sage of Monticello".