import { Meteor } from 'meteor/meteor';
import { bookmarksCollection } from '../collections/collections.js';
import { bookmarksDummyData } from '../collections/collections.js';

Meteor.startup(() => {
  // Remove any database values that are present
  bookmarksCollection.remove({}); //Delete all records, only works server-side.
  
  //Add dummy values
  for (var i = 0; i < bookmarksDummyData.length; i++) {
    bookmarksCollection.insert(bookmarksDummyData[i]);
  }
});
