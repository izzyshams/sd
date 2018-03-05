# Directive
Pinnable mapping via social media with spatial analysis.

## Foundation

[Pinmaps API](https://pinmaps.net)

Possible Python Packages to use
   
 * googlemaps
 * geocoder
 * geojsonio
 * pandas
 * geocoder
 * geopandas
 * Shapely
     
     
 Generated Google Maps API Key

## Dependency and S/W information

### Python 3 Virtualenv using python 3.6

When working on this project please do so from inside of the virtualenv so that it is closed off from the main system.

run `python3 -v` and verify your python version is >= 3.4.x if it is not you will need to intall additional paackages from your distribution repository.

#### Using the venv

This is a small synopsis that outlines the [basic usage](https://developer.fedoraproject.org/tech/languages/python/multiple-pythons.html) of the virtual enviornment. DO ALL WORK FROM INSIDE THE ENV.

```bash
$ python3.5 -m venv supdem  # create the virtualenv
$ . supdem/bin/activate  # activate it

(supdem)$ python -m pip install requests  # install a package with pip
...
(supdem)$ python  # run python from that virtualenv
Python 3.5.2 (default, Aug 16 2016, 21:50:46) 
[GCC 5.3.1 20160406 (Red Hat 5.3.1-6)] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import requests
>>> ...
(env)$ deactivate  # go back to "normal"
```

For this repo, the venv is named `supdem`.
 
### Django Framework

We are using `Django 2.0.2` to build this project. Get caught up [here](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/development_environment) before making edits to ensure you work working with the proper versions.

Because we are in the venv `python` == `python3`. To start up the test websever run:
```bash
$ python manage.py runserver
```
and begin working.


### Database
 
MongoDB [Geospatial queries](https://docs.mongodb.com/manual/geospatial-queries/)

Another [Example](https://www.percona.com/blog/2016/04/15/creating-geo-enabled-applications-with-mongodb-geojson-and-mysql/)


## Categorization and prevention of abuse

Categories (Prohibited/Allowed) : 

Criminal Activities (Prohibited) 
 
Sub-Categoriess

 * Political Extreme / Hate / Discrimination
 * Computer Crime
 * Illegal Activities
 * Warez / Hacking / Illegal Software 
 
 
Drugs and Intoxicants (Prohibited)

Sub-Categories 

 * Illegal Drugs
 * Alcohol  
 * Tobacco 
 

Information and Communication (Allowed) 
 
Sub-Categories

 * Digital Postcards
 * Chat
 * Newsgroups / Bulletin Boards / General Discussion Sites
 * SMS / Mobile Phone Accessories
 * Web Mail 
 
 
 Community Education Religion (allowed)
 
Sub-Categories

 * Non-Governmental Organizations
 * Cities / Regions / Countries
 * Education
 * Sects
 * Political Parties
 * Governmental Organizations
 * Religion 
 
 
Entertainment / Culture (Allowed) 
 
Sub-Categories 

 * Cinema / Television
 * Recreational Facilities / Amusement / Theme Parks
 * Art / Museums / Memorials / Monuments
 * Music
 * Literature / Books
 * Humor / Comics 
 
 
Extremistic Sites (Prohibited)
 
Sub-Categories 

 * Violence / Extreme 
 
 
Finance / Investing (Allowed)
 
Sub-Categories 

 * Investment Brokers / Stocks
 * Financial Services / Investment / Insurance
 * Banking / Home Banking 
 
 
Games / Gambles (Allowed)
 
Sub-Categories 

 * Gambling (Prohibited)
 * Computer Games
 * Toys 
 
 
IT (Allowed)
 
Sub-Categories 

 * Software / Hardware / Distributors
 * Communication Services
 * IT Security / IT Information
 * Website Creation
 * Anonymous Proxies 
 
 
Job Search (Allowed)
 
Sub-Categories 

 * Job Search 
 * Job Posting
 
Lifestyle (Allowed)
 
Sub-Categories 

 * Dating / Relationships
 * Restaurants / Bars
 * Travel
 * Fashion / Cosmetics / Jewelry
 * Sports
 * Building / Residence / Architecture / Furniture
 * Nature / Environment / Animals 
 
 
Locomotion (Allowed)
 
Sub-Categories 

 * Vehicles / Transportation 
 
 
Medicine (Allowed)
 
Sub-Categories 

 * Health
 * Abortion 
 * Medication (Prohibited)
 * Pharmaceuticals
 
 
Nudity (Prohibited) 
 
Sub-Categories 

 * Pornography
 * Erotic / ***
 * Swimwear / Lingerie (Allowed) 
 
 
 Ordering (Allowed)
 
Sub-Categories 
 * Online Shopping
 * Auctions / Classified Ads 
  
Weapons (Prohibited) 
 
Sub-Categories 

* Weapons 
 
 
 Suspicious and Uncategorized (Prohibited and pending review)
 
Sub-Categories 

 * Suspicious
 * Categorization Failed

## Arch

 * Plans are to utilize the [Django Framework](https://www.djangoproject.com/) to structure the web application.
 * Locality will be calculated using Googles [GeoJSON](https://developers.google.com/maps/documentation/javascript/examples/layer-data-dragndrop) api.

## Design

### Fonts

Possible Font choices: Roboto family, Helvetica Neue, Raleway (header 1/2)

H1:
H2:
H3: 
Mono: 

### Branding

Primary Color 
Primary Accent
Secondary Color
Secondary Accent

Custom black
custom grey

Sup (#d23601)

Dem (#091b50)


 * [Wordpress Attempt](https://supdem.net/wp/suppliers)

 * [OneClick Django Hosting](https://www.digitalocean.com/community/tutorials/how-to-use-the-django-one-click-install-image-for-ubuntu-16-04). [Linode](https://www.linode.com/?r=7a75ec10d8db237e363b9309f77a11ff005e8826) also offers the option.


[GeoDjango](https://docs.djangoproject.com/en/2.0/ref/contrib/gis/tutorial/)

