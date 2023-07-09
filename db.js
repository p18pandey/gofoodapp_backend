const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://pp_project_food:42424242@cluster0.7lzzx0e.mongodb.net/gofoodmern?retryWrites=true&w=majority'
// const mongoURI ='mongodb://pp_project_food:42424242@ac-1xxju0e-shard-00-00.7lzzx0e.mongodb.net:27017,ac-1xxju0e-shard-00-01.7lzzx0e.mongodb.net:27017,ac-1xxju0e-shard-00-02.7lzzx0e.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-rgjl87-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB = async () => {
   await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
      if (err) console.log("---", err)
      else {
         console.log("connected");
         const fetched_data = mongoose.connection.db.collection("food_items");
         fetched_data.find({}).toArray(async function (err, data) {

            const foodCategory = mongoose.connection.db.collection("foodCategory");
            foodCategory.find({}).toArray(function (err, catData) {

               if (err) console.log(err);
               else {
                  global.food_items = data;
                  global.foodCategory = catData;
               }

            })
            // if(err) console.log(err);
            // else {
            //    global.food_items =data;
            // }
         })

      }
   });
}
module.exports = mongoDB;