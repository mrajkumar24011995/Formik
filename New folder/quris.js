//use Imdb
//show collections
db.createCollection("movies")
const data = [
    {
    "id": "100",
    "mentor": "RRR",
    "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    "rating": 8.8,
    "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
        "id": "100",
        "mentor": "RRR",
        "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
        "rating": 8.8,
        "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
        "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
      },
    {
    "id": "101",
    "mentor": "Iron man 2 ",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    "rating": 7,
    "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
    "id": "102",
    "mentor": "No Country for Old Men ***",
    "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    "rating": 8.1,
    "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
    "id": "103",
    "mentor": "Jai Bhim",
    "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    "rating": 8.8,
    "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
    "id": "104",
    "mentor": "The Avengers",
    "rating": 8,
    "summary": "Marvel's The Avengers (classified under the mentor Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same mentor.",
    "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
    "id": "105",
    "mentor": "Interstellar",
    "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    "rating": 8.6,
    "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is mentored to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
    "id": "107",
    "mentor": "Ratatouille",
    "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    "rating": 8,
    "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
    },
    {
     "id": "108",
    "mentor": "Thor: Ragnarok",
    "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
    "rating": 7.9,
    "summary": "Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.",
    "trailer": "https://www.youtube.com/embed/ue80QwXMRHg"
    }
    ]
db.movies.insert({
    "id": "100",
    "mentor": "RRR",
    "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    "rating": 8.8,
    "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
    })

db.students.insertMany([
    {
      "name": "sanjay",
      "batch": "B42WD",
      "age": 25
    },
    {
      "name": "Arun",
      "batch": "B42WD",
      "age": 21
    },
    {
      "name": "Jayavel",
      "batch": "B42WD",
      "age": 23
    },
    {
      "name": "shalini",
      "batch": "B42WD",
      "age": 22
    },
    {
      "name": "sharmila",
      "batch": "B42WD",
      "age": 21
    },
    {
      "name": "surya",
      "batch": "B42WD",
      "age": 22
    },
    {
      "name": "sanjay",
      "batch": "B42WD",
      "age": 25
    },
    {
      "name": "Arun",
      "batch": "B42WD",
      "age": 21
    },
    {
      "name": "Jayavel",
      "batch": "B42WD",
      "age": 23
    },
    {
      "name": "shalini",
      "batch": "B42WD",
      "age": 22
    },
    {
      "name": "sharmila",
      "batch": "B42WD",
      "age": 21
    },
    {
      "name": "surya",
      "batch": "B42WD",
      "age": 22
    },
    {
      "name": "sanjay",
      "batch": "B42WD",
      "age": 25
    },
    {
      "name": "Arun",
      "batch": "B42WD",
      "age": 21
    },
    {
      "name": "Jayavel",
      "batch": "B42WD",
      "age": 23
    },
    {
      "name": "shalini",
      "batch": "B42WD",
      "age": 22
    },
    {
      "name": "sharmila",
      "batch": "B42WD",
      "age": 21
    },
    {
      "name": "surya",
      "batch": "B42WD",
      "age": 22
    },
    {
      "name": "sanjay",
      "batch": "B42WD",
      "age": 25
    },
    {
      "name": "Arun",
      "batch": "B42WD",
      "age": 21
    },
    {
      "name": "Jayavel",
      "batch": "B42WD",
      "age": 23
    },
    {
      "name": "shalini",
      "batch": "B42WD",
      "age": 22
    },
    {
      "name": "sharmila",
      "batch": "B42WD",
      "age": 21
    },
    {
      "name": "surya",
      "batch": "B42WD",
      "age": 22
    }
  ])

db.movies.find({}).pretty({})

db.movies.find({mentor:"RRR"})
db.movies.find({rating:8.8})

db.movies.findOne({rating:8.8})
db.movies.find({_id: ObjectId("63eda50f0902f0b5a1b3a477")})

db.movies.deleteOne({rating:8.8})
db.movies.deleteMany({rating:8.8})
db.movies.deleteMany({})

// updateOne

db.students.updateOne(
    {
    _id : ObjectId("63eeeab55f2ce54faa59b025")
     }, 
   {
    "$set":{
      "age":24  
    }
   }
)

db.students.updateMany(
    {
        "name": "sanjay"
    },
    {
        $set:{
            "job": "zen-mentor"
        }
    }, 
    {
        upsert:true
    }
)

//CrUd Operations 

db.students.find().toArray()


db.students.find().forEach(function(stud){print(stud.name)})
db.batches.insertMany([
    {
        "name": "sanjay",
        "time" : "weekday"
      },
      {
        "name": "Arun",
        "time" : "weekend"
      },
      {
        "name": "Jayavel",
        "time" : "weekend"
      },
      {
        "name": "shalini",
        "time" : "weekday"
      },
      {
        "name": "sharmila",
        "time" : "weekday"
      },
      {
        "name": "surya",
        "time" : "weekend"
      }
])

//aggregates

db.students.aggregate([
    {
        $lookup: {
            from : "batches",
            localField: "name",
            foreignField : "name",
            as : "batch_type"
        }
    }
])

db.students.find({age:{$gt:20}})

db.students.find({age:{$lt:23}})
//asec
db.students.find({age:{$not:{$gt:20, $lt:23}}}).sort({age:1})
//desc
db.students.find({age:{$not:{$gt:20, $lt:23}}}).sort({age:-1})

db.students.find({age:{$not:{$gt:20, $lt:23}}})

db.students.find({}, {name:1, batch:1})

db.students.find({$or:[{name:"sanjay"}, {age:23}]})

db.students.aggregate([
    {$match :{batch :"B42WD"}},
    {$group : {
        _id: '$name',
        totalAges:{$sum:'$age'}
    }}
])
