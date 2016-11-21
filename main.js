var roleFarmer = require('role.farmer');
var roleUpgrader = require('role.upgrader');
var testing = require('testing');

module.exports.loop = function () {

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
    //creep counting
    var farmers = _.filter(Game.creeps, (creep) => creep.memory.role == 'farmer');
    //console.log('Farmers: ' + farmers.length);
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    //console.log('Upgraders: ' + upgraders.length);
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    //console.log('Builders: ' + builders.length);

    testing.run();

    if(farmers.length < 2) {
        var newFarmerName = Game.spawns['BestS'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'farmer'});
        console.log('Spawning new farmer: ' + newFarmerName);
    }
    if(upgraders.length < 4){
        var newUpgraderName = Game.spawns['BestS'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
        console.log('Spawning new upgrader: ' + newUpgraderName);
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'farmer') {
            roleFarmer.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
    }
}
