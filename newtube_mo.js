conn = new Mongo();
db = conn.getDB("newtube_mo");

db.createCollection('user')
db.createCollection('video')
db.createCollection('channel')
db.createCollection('playlist')

db.user.insertOne({
    "_id" : ObjectId("107f191e810c19729de860ea"),
    "email" : "",
    "password" : "",
    "username" : "",
    "personal data" : {
        "birth date" : new Date("2016-05-18T16:00:00Z"),
        "genre" : ""
    },
    "country" : "",
    "zipcode" : "",
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
    "title" : "",
    "description" : "",
    "views" : 50,
    "status" : "",
    "tags" : [ObjectId("127f191e810c19729de860ef")],
    "specs" : {
        "dimension" : "",
        "filetype" : "",
        "length" : "",
        "thumbnail" : ""
    },

    "creation details" : {
        "date of creation": new Date("2016-05-18T16:00:00Z"),
        "creator_id": ObjectId("107f191e810c19729de860ea")
    },

    "interactions" : {
        "likes" : 50,
        "dislikes" : 50,
        "comments" : [{
            "_id" : ObjectId("607f191e810c19729de860ea"),
            "text" : "",
            "user" : ObjectId("807f191e810c19729de860ea"),
            "date" : new Date("2016-05-18T16:00:00Z"),
            "likes" : 50,
            "replies" : [{
                "_id" : ObjectId("707f191e810c19729de860ea"),
                "text": "",
                "user" : ObjectId("907f191e810c19729de860ea")
            }]
        }]
    }
    
})

db.channel.insertOne({
    "_id" : ObjectId("907f191e810c19729de861ea"),
    "name" : "",
    "description" : "",
    "date" : new Date("2016-05-18T16:00:00Z"),
    "videos_id" : [ObjectId("507f191e810c19729de860ea")],
    "creator_id" : ObjectId("107f191e810c19729de860ea"),
    "playlists_id" : [ObjectId("207f191e810c19729de860ea")]
})

db.channel.createIndex( { "channel.creator_id": 1 }, { unique: true } )

db.playlist.insertOne( { 
    "_id" : ObjectId("207f191e810c19729de860ea"),
    "name" : "",
    "date" : new Date("2016-05-18T16:00:00Z"),
    "status" : "",
    "videos_id" : [ObjectId("507f191e810c19729de860ea")],
    "creator_id" : ObjectId("107f191e810c19729de860ea")
})

db.playlist.createIndex( { "playlist.creator_id": 1 }, { unique: true } )



