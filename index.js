const {
    checkIsPath,
    isMDFile,
    readingFile,
    validateFoundedLinks
} =require ('./script1');

const mdLinks=(myPath, validate=false)=>{
    return new Promise((resolve,reject)=>{
        if(!checkIsPath(myPath)){
            reject(new Error('Path is invalid'))
        }else if (!isMDFile(myPath)){
            reject(new Error ("File is not a MD file"))
        }else{
            readingFile(myPath).then(links=>{
                try {
                    if (links.length >0){
                        if(validate){
                            resolve(validateFoundedLinks(links))
                        }else{
                            resolve(links)
                        }
                      }
                } catch (error) {
                    console.error('Error',error)
                }              
            })
        }          
    })
  };

 //nodeconsole.log(typeof(mdLinks));

//   mdLinks('./mdFiles/ejemplo2.md',true).then(result=>{
//     console.log(result);
//   })

  module.exports=mdLinks;