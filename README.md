# YumeMenuVersion2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

The app has the following important files:
`menu.service.ts`: this file contains all of the get/post requests to the backend
`app.module.ts`: this app contains the live key for stripe API

There are 4 main pages:
### I.Home
The Home page is the root page. The home page will fetch an `open flag` from https://yume-angular.herokuapp.com/statusRestaurant
If the status is 1, restaurant is operating normally. 
If the status is 0, restaurant is manually closed.

User can set the open/close notice on the backed using companion Android app

### II.Menu
Menu page is autopopulated by fetching data from AWS S3 database. The data is static.
Users can modify the S3 files. The website will auto update based on the modified S3.

### III.Checkout
Checkout page is where the customer pays for the order. Once the customer pays, the customer will receive a receipt email(optional) and a text message, telling the customers the order numbers, subtotal, and tax.

Checkout page has Stripe Integration. Checkout page will make get request to check if the restaurant is in business hours and manually close is false. If both conditions met, the customer can pay.
### IV.Location
Location page contains the business hours. Location page has two buttons. `Call` button will make a phone call. `Direction` will take the customer to the restaurant's location
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.




## Add outside library
`./menu/menu.module.ts` is the file contains all of external library. This project uses mainly Ant Angular Design for layout.
Link: `https://ng.ant.design/docs/getting-started/en`