import React from "react";
import CollectionCreatorProtocol, { CollectionType }  from "./CreateCollectionProtocol";
import SchemasType from "../schemas/SchemasType";
import schemas from "../schemas";


class CreateCollection implements CollectionCreatorProtocol {
  public collection: CollectionType;
  public schemas: SchemasType = schemas; 

  constructor(schema = "User") {
    this.collection = {
      schema: this.schemas["User"],
      statics: {},                          
      methods: {},                         
      attachments: {},                     
      options: {},                          
      migrationStrategies: {},            
      autoMigrate: true,                    
      cacheReplacementPolicy: function(){}, 
    }
  };
};

export default CreateCollection




