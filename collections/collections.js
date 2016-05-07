//Import the Mongo object
import { Mongo } from "meteor/mongo";

//Export access to my colelctions
export const bookmarksCollection = new Mongo.Collection("bookmarks");

//Export access to my data to start our application
export const bookmarksDummyData = [
    {
        "name": "New York Times",
        "url": "http://www.nytimes.com",
        "lastVisited": new Date (2015, 10, 21)
    },
    {
        "name": "Google",
        "url": "http://www.google.com",
        "lastVisited": new Date (2016, 5, 6)
    },
    {
        "name": "Reddit",
        "url": "http://www.reddit.com",
        "lastVisited": new Date ()
    }
];