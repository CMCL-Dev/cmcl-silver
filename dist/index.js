let core;try{core=require("packages/core")}catch{console.info("Failed loading packages/core, use node_modules/core instead"),core=require("core")}core.backend();
