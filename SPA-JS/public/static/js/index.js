// ROUTER 

const router = asyc =>{  
    const route = [
        {path:"/",view:()=>console.log("Dashboard Page")},
        {path:"/posts",view:()=>console.log("Posts Page")},
        {path:"/settings",view:()=>console.log("Settings Page")}
    ];

    const potentialMatches = route.map(route=>{
        return{
            route:route,
            isMatch: location.pathname == route.path
        };
    })
    let match = potentialMatches.find(potentialMatch=>potentialMatch.isMatch);
    if(!match){
        ro
    }
    console.log(match);
}

document.addEventListener("DOMContentLoaded",()=>{
    router();
})