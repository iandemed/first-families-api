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
| _id | Key to the President collection, corresponds to chronological order of *first* time a president took office|
| name | Full name used by the president|
| partner | Array of references to the president's previous partners |
| born | Date the president was born |
| died | Date the president died |
| tenure | Number of years served in office|

#### First Spouse

|**Variable**| **Description** |
|---|---|
| _id | Key to the FirstSpouse collection, related to the key from the President collection|
| name | Full maiden used by the first spouse|
| partner | Array of references to the first spouse's previous partners |
| born | Date the first spoue was born |
| died | Date the first spouse died |