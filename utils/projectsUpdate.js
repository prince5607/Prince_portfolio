 const projects  = [{
    link : 'https://prince5607.github.io/Landing_page/',
    img : 'img/projectImg/landing-page.png',
    name : 'Landing Page',
   
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
    link : 'https://prince5607.github.io/calculator/',
    img : 'img/projectImg/istockphoto-544462430-1024x1024.jpg',
    name : 'Calculator',
    
},
{
    link : 'https://github.com/prince5607/Banking_System',
    img : 'img/projectImg/internet-banking-vector.jpg',
    name : 'Banking System',
    
},
{
    link : 'https://prince5607.github.io/Pokedex-Catalogue/',
    img : 'img/projectImg/pokedex.png',
    name : 'Pokedex Catalogue',
    
},
                    
]

export function addProject(){
    let projectHtml = '';
    projects.forEach((project)=>{
        projectHtml += ` <div class="projectbox">
                <a href="${project.link}" target = "-main">
                <img src="${project.img}" width="100px" height="100px" style="border-radius: 5%;">
                <h3>${project.name}</h3>
            </a>
            </div>`;
    });
    return projectHtml;
}
