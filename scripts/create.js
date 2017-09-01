var docClient = new AWS.DynamoDB.DocumentClient();

var table = "Movies";
var year = 2015;
var title = "The Big New Movie";

var params = {
    TableName:table,
    Item:{
        "year": year,
        "title": title,
        "info":{
            "plot": "Nothing happens at all.",
            "rating": 0
        }
    }
};

docClient.put(params, function(err, data) { ... });
