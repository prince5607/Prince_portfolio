 const projects  = [{
    link : 'https://whizchat-0mtl.onrender.com/login',
    img : 'img/projectImg/whizchat.png',
    name : 'Whiz Chat',
   
},
{
    link : 'https://github.com/prince5607/Online-Railway-Reservation',
    img : 'img/projectImg/train-rail-logo.jpg',
    name : 'Railway Reseravation System',
   
},
{
    link : 'https://prince5607.github.io/Amazon-Clone-Frontend-/',
    img : 'img/projectImg/amazon.jpg',
    name : 'Amazon clone (Frontend)',
    
},
{
    link : 'https://prince5607.github.io/Pokedex-Catalogue/',
    img : 'img/projectImg/pokedex.png',
    name : 'Pokedex Catalogue',
    
},
{
    link : 'https://printsmasterhub.com/',
    img : 'img/projectImg/printmasterhub.png',
    name : 'Print Master Hub',
    
},
                    
]

export function addProject(){
    let projectHtml = '';
    projects.forEach((project)=>{
        projectHtml += ` <div class="projectbox">
                <a href="${project.link}" target = "-main">
                <img src="${project.img}" width="100px" height="100px" style="border-radius: 5%;margin-bottom:4px">
                <h3>${project.name}</h3>
            </a>
            </div>`;
    });
    return projectHtml;
}
