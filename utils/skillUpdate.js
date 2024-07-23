 const skills = [
    {
        name : 'HTML',
        logo : 'bxl-html5',
        level : 'Intermediate',
        progress : 75
    },
    {
        name : 'CSS',
        logo : 'bxl-css3',
        level : 'Intermediate',
        progress : 70
    },
    {
        name : 'JS',
        logo : 'bxl-javascript',
        level : 'Intermediate',
        progress : 70
    },
    {
        name : 'PHP',
        logo : 'bxl-php',
        level : 'Intermediate',
        progress : 80
    },
    {
        name : 'BootStrap',
        logo : 'bxl-bootstrap',
        level : 'Intermediate',
        progress : 70
    },
    {
        name : 'Java',
        logo : 'bxl-java',
        level : 'Intermediate',
        progress : 80
    },
    {
        name : 'C++',
        logo : 'bxl-c-plus-plus',
        level : 'Intermediate',
        progress : 80
    },
    {
        name : 'DSA',
        logo : 'bx-data',
        level : 'Intermediate',
        progress : 75
    },
    {
        name : 'Python',
        logo : 'bxl-python',
        level : 'Intermediate',
        progress : 70
    },
    {
        name : 'MySql',
        logo : 'bxs-data',
        level : 'Intermediate',
        progress : 65
    },
];

export function addSkill(){
let skillHtml = '';
skills.forEach((skill)=>{
    skillHtml += `<div class="servicebox">
                <i class='bx ${skill.logo}'></i>
                <h3>${skill.name}</h3>
                <p>(${skill.level})</p>
                <div class="progress-bar">
                    <div class="progress" style="width: ${skill.progress}%;" ></div>
                  </div>
            </div>`;
            
});
    return skillHtml;
}