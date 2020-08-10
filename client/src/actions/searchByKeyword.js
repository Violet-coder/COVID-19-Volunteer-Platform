export const searchByKeyword = (userkeyword, SearchResultPage) => {
    const url = "/search"

    var searchKeyword = {
        keyword: userkeyword
    }
    

    const request = new Request(url, {
        method:"post",
        body: JSON.stringify(searchKeyword),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
      }
      })

    fetch(request)
    .then(res => {
        if (res.status === 200) {
            // return a promise that resolves with the JSON body
            return res.json();
        } else {
            alert("Could not get posts");
        }
    })
    .then(json => {
        // the resolved promise with the JSON body      
        SearchResultPage.setState({ posts: json, isLoading: true });
    })
    .catch(error => {
        console.log("Internal server error");
    });
}
