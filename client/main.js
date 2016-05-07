import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { bookmarksCollection } from '../collections/collections.js';

import './main.html';

Template.bookmarks.helpers({
  bookmarksList: function() {
    //Retrieve all bookmarks from the collection.
    return bookmarksCollection.find();
  }
});

Template.addBookmarkForm.events({
  'submit .addBookmarkForm': function(event) {
    event.preventDefault(); //Stop the form from refresting
    
    //Get the form values
    var name = $('#bookmarkName').val();
    var url = $('#bookmarkUrl').val();
    
    //Insert a new document into our collection
    bookmarksCollection.insert({
      "name": name,
      "url": url,
      "lastVisited": new Date ()
    });
  }
});

Template.bookmarksHeading.events({
  'click button': function (event) {
    if (confirm("Delete all bookmarks?")) {
        bookmarksCollection.find().forEach(function(bookmark) {
          bookmarksCollection.remove({"_id": bookmark._id});
        });
    }
  }
});
