var testing = {

  run: function(beginConstruction) {
    var spX = Game.spawns.BestS.pos.x;
    var spY = Game.spawns.BestS.pos.y;
    var spR = Game.spawns.BestS.pos.roomName;
    var spawnPerimeter = [new RoomPosition(spX+1,spY,spR), new RoomPosition(spX+1,spY+1,spR),
      new RoomPosition(spX,spY+1,spR), new RoomPosition(spX-1,spY+1,spR), new RoomPosition(spX-1,spY,spR),
      new RoomPosition(spX-1,spY-1,spR), new RoomPosition(spX,spY-1,spR), new RoomPosition(spX+1,spY-1,spR)];
    //console.log(spawnPerimeter);
    for(i=0; i < spawnPerimeter.length; i++){
    }
  }
};
module.exports = testing;
