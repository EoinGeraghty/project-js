var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "(206) 555-5555",
        address: ['1 Microsoft way', 'somewhere', 'who cares.']
        },
    steve: {
        firstName: "Steve",
        lastName: "Jobs",
        number: "(405) 555-5555",
        address: ['1 looper', 'loopy loo', 'Ca']
        },
    
    };
    
    var list = function(friends) {
        for (var key in friends) {
            console.log(key);
        }
    }
    var search = function(name){
        for(var key in friends){
            if (friends[key].firstName === name){
                return friends[key];
            }}};


list(friends);   
