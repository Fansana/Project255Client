/**
 * Created by Nexus on 29.08.2017.
 */
let Client = function(data){
    this.id = data.id;
    this.entities = [];
};

Client.prototype.addEntity = function(entity){
    this.entities[entity.id] = entity;
};

Client.prototype.accessible = function(){
    return {
        id:this.id,
    }
};

module.exports = Client;
