import {modelRun} from './index.mjs';
console.log(JSON.stringify(modelRun({account:'synthetic-account',delegate:'synthetic-delegate',target:'synthetic-target',recipient:'synthetic-recipient',alternateTarget:'synthetic-other-target',alternateRecipient:'synthetic-other-recipient',function:'consume',cap:'100'},{omitCap:true}),null,2));
