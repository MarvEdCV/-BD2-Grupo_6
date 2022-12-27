const cassandra = require("cassandra-driver")

const authProvider = new cassandra.auth.DsePlainTextAuthProvider(
    "root",
    "root"
);

const client = new cassandra.Client({
    contactPoints: ['127.0.0.1:9042'],
    localDataCenter: "datacenter1",
    authProvider,
    keyspace: "prueba1"
})

client.connect(function (err) {
    if (err) {
        console.log(err)
    }else{
        console.log("conect Cassandra db")
    }
})

module.exports = client