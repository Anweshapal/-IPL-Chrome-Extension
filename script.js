async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=bef4b6e4-0fbb-4e11-9410-6e16e2ca5ab1&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success")return;

            const matchesList = data.data;

            if(!matchesList)return [];
            
            //add your api key from cricketdata.org
            const relevantData = matchesList.filter(match=>match.series_id== 
"89ec04b8-24b3-4781-a5b6-ddafdb9efc58").map(match =>`${match.name}, ${match.status}`);

           
           document.getElementById("matches").innerHTML=relevantData.map(match=>`<li>${match}</li>`);
           return relevantData;

        })
        .catch(e => console.log(e));
}

getMatchData();