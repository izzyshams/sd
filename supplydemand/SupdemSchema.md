## Supdem API



| Function | Input | Output |
| -------- | ----- | ------ |
|          |       |        |
|          |       |        |
|          |       |        |

* User
  * Personal
    * uuid
    * fname
    * pword
    * location
    * isPaid
    * connectedMarkets[listofMarkets-mID]
  * Supplier Prof (premium)
    * Locations Watched
      * locationID
      * GPS Shape (dictionary(shape: [listof coords]), color, stroke,)
      * Name
      * Markets industry(clothing, food, etc)
      * chosen market color key value pair)
      * listofProvidedBusinesses[businessObjects]
  * Demander prof
    * demID -> uuid
    * all of personal
    * requested markets
    * locality to market
  * Market (pair of locality and business type)
    * marketID -> uuid
    * marketDemographic
    * list of coords
    * list of any parent locations it falls under
    * name
    * industry (food, clothing etc)
    * list of submarkets[] eg. bars
      * irish pubs, taverns, divebar, etc.
        * name
        * short desc
  * Location (parent of market)
    * affluency
    * gps coords

### Crowdsourcing Strategies

#### Biggest issue: Get users searching through us instead of Google

* User surveys

  * rewards

* Coupons for suggesting a business that launches

  * partner with business for opening promotions

  * eliminates wasteful coupon campaigns, uses savings to hook user into contributing data

    ​

### Framework

Node.js server

MongoDB

VanillaJS



