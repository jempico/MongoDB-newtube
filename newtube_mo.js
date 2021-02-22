conn = new Mongo();
db = conn.getDB("newtube_mo");

db.createCollection('user')
db.createCollection('video')
db.createCollection('channel')
db.createCollection('playlist')

db.user.insertOne({
    "_id" : ObjectId("107f191e810c19729de860ea"),
    "email" : "user1@gmail.com",
    "password" : "passForUser1",
    "username" : "Óscar",
    "personal data" : {
        "birth date" : new Date("2016-05-18"),
        "genre" : "Male"
    },
    "country" : "Spain",
    "zipcode" : "08024",
    "channels" : {
        "created" : [ObjectId("907f191e810c19729de861ea")],
        "followed" : []
    },
    "videos" : {
        "created" : [ObjectId("507f191e810c19729de860ea")],
        "viewed" : []
        },
    "playlists" : {
        "created" : [ObjectId("207f191e810c19729de860ea")],
        "viewed" : []
        },
    "interactions" : {
        "likes" : {
            "videos" : [{
                "_id" : ObjectId("307f191e810c19729de860ea"),
                "date" : new Date("2016-05-18T16:00:00Z")
            }],
            "comments" : [{
                "_id" : ObjectId("111f191e810c19729de860ea"),
                "date" : new Date("2016-05-18T16:00:00Z")                
            }]
        },
        "dislikes" : {
            "videos" : [{
                "_id" : ObjectId("407f191e810c19729de860ea"),
                "date" : new Date("2016-05-18T16:00:00Z")
            }],
            "comments" : [{
                "_id" : ObjectId("221f191e810c19729de860ea"),
                "date" : new Date("2016-05-18T16:00:00Z")                
            }]
        },
}})

db.user.createIndex( { "interactions.likes.videos._id": 1 }, { unique: true } )
db.user.createIndex( { "interactions.dislikes.videos._id": 1 }, { unique: true } )
db.user.createIndex( { "interactions.likes.comments._id": 1 }, { unique: true } )
db.user.createIndex( { "interactions.dislikes.comments._id": 1 }, { unique: true } )

db.video.insertOne({
    "_id" : ObjectId("507f191e810c19729de860ea"),
    "title" : "My first Youtube Video",
    "description" : "This is my first attempt to publish a video on Youtube",
    "views" : 50,
    "status" : "private",
    "tags" : [ObjectId("127f191e810c19729de860ef")],
    "specs" : {
        "dimension" : "426x240",
        "filetype" : "mp4",
        "length" : "150",
        "thumbnail" : "someURL.com"
    },

    "creation details" : {
        "date of creation": new Date("2016-05-18T16:00:00Z"),
        "creator_id": ObjectId("107f191e810c19729de860ea"),
        "channel_id" : ObjectId("907f191e810c19729de861ea"),
        "playlist_id" : [ObjectId("207f191e810c19729de860ea")]
    },

    "interactions" : {
        "likes" : 50,
        "dislikes" : 20,
        "comments" : [{
            "_id" : ObjectId("607f191e810c19729de860ea"),
            "text" : "This video is awesome",
            "user" : ObjectId("807f191e810c19729de860ea"),
            "date" : new Date("2016-05-18T16:00:00Z"),
            "likes" : 10,
            "replies" : [{
                "_id" : ObjectId("707f191e810c19729de860ea"),
                "text": "Indeed",
                "user" : ObjectId("907f191e810c19729de860ea")
            }]
        }]
    }
    
})

db.video.createIndex( { "interactions.comments._id": 1 }, { unique: true } )
db.video.createIndex( { "interactions.comments.replies._id": 1 }, { unique: true } )


db.channel.insertOne({
    "_id" : ObjectId("907f191e810c19729de861ea"),
    "name" : "Óscar's channel",
    "description" : "My personal vlog",
    "date" : new Date("2016-05-18T16:00:00Z"),
    "videos_id" : [ObjectId("507f191e810c19729de860ea")],
    "creator_id" : ObjectId("107f191e810c19729de860ea"),
    "playlists_id" : [ObjectId("207f191e810c19729de860ea")]
})

db.channel.createIndex( { "channel.creator_id": 1 }, { unique: true } )

db.playlist.insertOne( { 
    "_id" : ObjectId("207f191e810c19729de860ea"),
    "name" : "100dayscoding challenge",
    "date" : new Date("2016-05-18T16:00:00Z"),
    "status" : "private",
    "videos_id" : [ObjectId("507f191e810c19729de860ea")],
    "creator_id" : ObjectId("107f191e810c19729de860ea")
})

db.playlist.createIndex( { "playlist.creator_id": 1 }, { unique: true } )



