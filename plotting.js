var plotting = {

  run: function(beginConstruction) {
    var spX = Game.spawns.Spam.pos.x;
    var spY = Game.spawns.Spam.pos.y;
    var spR = Game.spawns.Spam.pos.roomName;
    var spawnPerimeter = [new RoomPosition(spX+1,spY,spR), new RoomPosition(spX+1,spY+1,spR),
      new RoomPosition(spX,spY+1,spR), new RoomPosition(spX-1,spY+1,spR), new RoomPosition(spX-1,spY,spR),
      new RoomPosition(spX-1,spY-1,spR), new RoomPosition(spX,spY-1,spR), new RoomPosition(spX+1,spY-1,spR)];
    //console.log(spawnPerimeter);
    for(i=0; i < spawnPerimeter.length; i++){
    }
  }
};
module.exports = plotting;
