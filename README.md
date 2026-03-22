# Real-Time-Tracking


Models- booking model

Vehicle.js      ← Fleet management ke liye
│                     (bus number, route, status, driver)
│
├── Route.js        ← Bus routes ke liye
│                     (Central → Downtown, stops, fare)
│
├── Alert.js        ← Service alerts ke liye
│                     (Route 7C delay, critical/warning)
│
└── BusLocation.js  ← Real time tracking ke liye
                      (bus ki live location, lat, lng)