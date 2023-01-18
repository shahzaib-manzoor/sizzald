const mongoose = require("mongoose");
(async () => {
  try {
    mongoose.set("strictQuery", false);
     await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected");
  } catch (error) {
    console.log(error.message);
  }
}

)();
