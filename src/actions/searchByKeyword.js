export const searchByKeyword = (keyword, posts) => {
    console.log("enter searchfucntion")

    if (posts.length<=0){
        return;
    }

    const peerpost = []

    posts.forEach(function (value, index, array) {
        let s = '';
        s+=value.name?value.name+' ':'';
        const lower_s=s.toLowerCase();
        const lower_keyword = keyword.toLowerCase();
        if(lower_s.indexOf(lower_keyword)>=0){
            peerpost.push(value)}
    })
    
    if (peerpost.length>=0){
       console.log("peerpost", peerpost)
    } 


   
    return(peerpost)


  };
 /*  export function searchByKeyword (keyword, posts) {
    console.log("enter searchfucntion")

    if (posts.length<=0){
        return;
    }

    const peerpost = []

    posts.forEach(function (value, index, array) {
        let s = '';
        s+=value.name?value.name+' ':'';
        const lower_s=s.toLowerCase();
        const lower_keyword = keyword.toLowerCase();
        if(lower_s.indexOf(lower_keyword)>=0){
            peerpost.push(value)}
    })
    
    if (peerpost.length>=0){
       console.log("peerpost", peerpost)
    } 
    return(peerpost)
  } */