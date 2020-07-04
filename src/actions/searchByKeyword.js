export const searchByKeyword = (keyword, posts) => {
    console.log("enter searchfucntion")

    if (posts.length<=0){
        return;
    }

    const peerpost = []
    //code below requires server call 
    //as usaual we do search in the database

    posts.forEach(function (value, index, array) {
        let s = '';
        s+=value.name?value.name+' ':'';
        const lower_s=s.toLowerCase();
        const lower_keyword = keyword.toLowerCase();
        let t = '';
        t+=value.description?value.description+' ':'';
        const lower_t=t.toLowerCase();

        if((lower_s.indexOf(lower_keyword)>=0) || (lower_t.indexOf(lower_keyword)>=0)){
            peerpost.push(value)}
    })
    
    if (peerpost.length>=0){
       console.log("peerpost", peerpost)
    } 


   
    return(peerpost)


  };
 