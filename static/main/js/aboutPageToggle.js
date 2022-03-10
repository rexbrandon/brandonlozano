// content for short version of bio
const shortProfessionalAbout = "I've been coding for two years, I've worked with a handful of small businesses so far and I love it."
const shortPersonalAbout = "My favorite activity is snowboarding - my second favorite is eating tacos."
// content for long version of bio
const longProfessionalAbout = "I'm a self-taught front-end web developer with two years of experience. I've built a handful of sites from scratch for small businesses. For every project, I test and implement new design features - giving myself a toolbox that I can grab from on any project."
const longPersonalAbout = "When I'm not coding, I like to spend time outside - snowboarding, taking pictures, hiking and always love a good road trip with close friends. Oh, and I'm always down to debate the best taco spot in town."

// changes the content based on the argument passed from the buttons
function changeAboutTxtLength(length){
    let profAboutTxt = document.getElementById
    ('professionalAboutTxt');
    let persAboutTxt = document.getElementById('personalAboutTxt');
    // changes the contet to short
    if(length == 'short'){
        profAboutTxt.textContent = shortProfessionalAbout
        persAboutTxt.textContent = shortPersonalAbout
    }
    // changes the content to long
    if(length == 'long'){
        profAboutTxt.textContent = longProfessionalAbout
        persAboutTxt.textContent = longPersonalAbout
    }
}