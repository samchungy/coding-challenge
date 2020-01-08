## Instructions to Run:

1. Build the Docker Image: `docker build -t <your-app-name> .`
2. Run the Docker Image `docker run -p 49160:8080 -d <your-app-name>`
3. Test by querying `localhost:49160/api/venues/`

## Testing:
1. To run the tests simply run `npm test`

## Modules
- Axios (For request promises)
- koajs, koa-bodyparser, koa-router (For Routing)
- lokijs (For DB)
- jest, supertest (For Testing)

## Example Calls

GET localhost:49160/api/venues/ 
with JSON body:
```
{
	"property_number": "62719312"
}
```

POST localhost:49160/api/venues/
with JSON body:
```
{
    "property_number": "62719312",
    "venue_name": "Aria Bar & Lounge",
    "venue_address": "Podium, 1 Southgate Avenue, Southbank, 3006",
    "space_type": "Hello",
    "website": {
        "url": "http://www.sebeldocklands.com.au/en/meeting-rooms/aria-bar-and-events.html"
    },
    "lat": "-37.82047861515797",
    "lon": "144.96589092458512",
    "location": {
        "type": "Point",
        "coordinates": [
            144.965890924585,
            -37.820478615158
        ]
    }
}
```

PUT localhost:49160/api/venues/
with JSON body:
```
	{
	    "property_number": "62719312",
	    "venue_name": "NEW NAME",
	    "venue_address": "Podium, 1 Southgate Avenue, Southbank, 3006",
	    "space_type": "Hello",
	    "website": {
	        "url": "http://www.sebeldocklands.com.au/en/meeting-rooms/aria-bar-and-events.html"
	    },
	    "lat": "-37.82047861515797",
	    "lon": "144.96589092458512",
	    "location": {
	        "type": "Point",
	        "coordinates": [
	            144.965890924585,
	            -37.820478615158
	        ]
	    }
	}
```

DELETE localhost:49160/api/venues/
with JSON body:
```
{
	"property_number": "62719312"
}
```
