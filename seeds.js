var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Bracciano", 
        image: "http://www.italia.it/uploads/RTEmagicC_Lago_di_Bracciano_per_copertina.jpg.jpg",
        description: "The most beautiful place to camp! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis magna etiam tempor orci eu. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Viverra justo nec ultrices dui sapien. At tellus at urna condimentum mattis pellentesque id nibh. Cras sed felis eget velit aliquet. Purus faucibus ornare suspendisse sed. Duis ut diam quam nulla porttitor massa id neque aliquam. Eu mi bibendum neque egestas congue quisque egestas diam."
    },
    {
        name: "Trevingnano", 
        image: "https://media-cdn.tripadvisor.com/media/photo-s/0e/d3/12/f9/trevignano-romano.jpg",
        description: "Great lake-side town!Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis magna etiam tempor orci eu. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Viverra justo nec ultrices dui sapien. At tellus at urna condimentum mattis pellentesque id nibh. Cras sed felis eget velit aliquet. Purus faucibus ornare suspendisse sed. Duis ut diam quam nulla porttitor massa id neque aliquam. Eu mi bibendum neque egestas congue quisque egestas diam."
    },
     {
        name: "Anguillara", 
        image: "https://i1.trekearth.com/photos/27923/anguillara.jpg",
        description: "Wonderful medieval village!Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis magna etiam tempor orci eu. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Viverra justo nec ultrices dui sapien. At tellus at urna condimentum mattis pellentesque id nibh. Cras sed felis eget velit aliquet. Purus faucibus ornare suspendisse sed. Duis ut diam quam nulla porttitor massa id neque aliquam. Eu mi bibendum neque egestas congue quisque egestas diam."
    }
]

function seedDB(){
    //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
    console.log("Removed campgrounds!");
    //Add a few campgrounds
    data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if(err){
                console.log(err)
            } else {
                console.log("Added a campgound!");
                //Create a comment on each campground
                Comment.create(
                    {
                        text: "This place is great, but I wish there was internet access. Otherwise wonderful experience.",
                        author: "Cerj"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comments!");
                        }
                    });
            }
        });
    });
});
    
//Add a few comments
}

module.exports = seedDB;
