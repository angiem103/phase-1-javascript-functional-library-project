function myEach(collection,callback) {
    if(collection instanceof Array){
        collection.forEach(item => {
            callback(item)
        })
    } else if(typeof collection == 'object'){
        const objValues = Object.values(collection)
        for (let i = 0; i < objValues.length; i++) {
            callback(objValues[i])
          }
        }

        return collection
    }

//  function myEach(obj, callback) {
//       const items = Array.isArray(obj) ? obj : Object.values(obj);
//       for (let i = 0; i < items.length; i++) {
//         let item = items[i];
//         callback(item);
//       }
//       return obj;
//     }
