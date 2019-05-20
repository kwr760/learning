var repo = {
    tasks: {},
    commands: [],
    get: function(id) {
        console.log('Getting task ' + id);
        return {
            name: 'name task from db';
        }
    },
    select: function (id) {
        console.log('Getting task ' + id);
        return {
            name: 'new task from db'
        }
    },
    save: function (task) {
        console.log('Saving ' + task.name + ' to the db');
    },
    replay: function() {
        for (var i = 0; i < repo.commands.length; i++) {
            var command = repo.commands[i];
            repo.executeNoLog(command.name, command.obj);
        }
    }
}

repo.executeNoLog = function(name){
    var args = Array.prototype.slice.call(arguments, 1);

    if(repo[name]){
        return repo[name].apply(repo, args)
    }
    return false;
};
repo.execute = function(name){
    var args = Array.prototype.slice.call(arguments, 1);

    repo.commands.push({
        name: name,
        obj: args[0]
    });
    if(repo[name]){
        return repo[name].apply(repo, args)
    }
    return false;
};

var task = repo.execute('get', 1);
console.log(task);
repo.tasks = {};
console.log(task);
repo.replay();
console.log(task);
