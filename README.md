# First Families API

## Techincal Requirements

### Dependencies  

I used three packages to construct my project:

1. Node - to install and manage the other packages used in my project
2. Express - to allow HTTP connection and routing for my API
3. Mongoose - to create the initial seed and to manipulate the database

## Data Structure  

Theere are currently two principal collections in the First Family API: the presidents themselves and the First Spouses. The exact structure of the of the data is listed below:

#### President

|**Variable**| **Description** |
|---|---|
| `_id` | Key to the President collection, corresponds to chronological order of *first* time a president took office|
| `name` | Full name used by the president|
| `partner` | Array of references to the president's previous partners |
| `born` | Date the president was born |
| `died` | Date the president died |
| `tenure` | Number of years served in office|

#### First Spouse

|**Variable**| **Description** |
|---|---|
| `_id` | Key to the FirstSpouse collection, related to the key from the President collection|
| `name` | Full maiden used by the first spouse|
| `partner` | Array of references to the first spouse's previous partners |
| `born` | Date the first spoue was born |
| `died` | Date the first spouse died |
  
Notes:
* `partner` is a **required** field. By nature of the position, the first spouse is always married to a president of the United States. The opposite is not always true (James Buchanan was famously [a bachelor](https://en.wikipedia.org/wiki/James_Buchanan#Romantic_life))

## Additional Notes

### Addressing Sally Hemmings and Thomas Jefferson's Legacy  

Society has become more willing to confront the problematic and contradictory legacy of the Founding Fathers, in particular their treatment of enslaved and indigenous people. It is now widely accepted historical fact that Thomas Jefferson sexually assualted Sally Hemmings and fathered six children. 

Currently, Sally Hemmings is not included in this API because variables and phrases used to describe the first spouses is woefully inadequate to address Sally's continued assault and would paint their relationship in a light that was untrue and downplays the severity of Thomas Jefferson's actions. I feel that Ian Mortimer's description of King Henry V also captures Thomas Jefferson's troubled legacy, "a man may be a hero and yet a monster". 

In future versions of this API, I hope to address Sally Hemmings in a way that is accurate, and sensitive to the trauma caused by "the Sage of Monticello".