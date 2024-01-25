// skills data for individual skills
const skills = [
    {
        num: 1,
        name: "Responsive Web Design",
        description: "I have lots of projects in web development with many being just practice webpages, however I also have created entire websites as part of my education's coursework",
        icon: "fa-laptop",
        link: "rwd.html"
    },
    {
        num: 2,
        name: "Database Management",
        description: "Having worked with databases for a long time, I am confident in querying and manipulating databases whilst working independently or on a server",
        icon: "fa-database",
        link: "dbm.html"
    },
    {
        num: 3,
        name: "Programming Languages",
        description: "With years of experience in software development, I have used and grew confident with many different languages, also using many styles of programming",
        icon: "fa-code",
        link: "pgl.html"
    },
    {
        num: 4,
        name: "Java OOP & GUI's",
        description: "Since starting University, I have used Java as a main language for several classes. This has helped me to learn how to use OOP and create GUI's",
        icon: "fa-network-wired",
        link: "jog.html"
    },
    {
        num: 5,
        name: "Data Structures & Algorithms",
        description: "I have experimented with many different data structures as well as algorithms in a few languages to develop a firm understanding of them",
        icon: "fa-folder-tree",
        link: "dsa.html"
    }
];

// creates a div with an icon, name and description
function skillsDiv(name, description, icon, link) {
    // create div and add class card
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    // create div and add class info
    var infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    // create icon and add to info div
    var i = document.createElement("i");
    i.classList.add("fa-solid");
    i.classList.add(icon);

    // create name and add to info div
    var h1 = document.createElement("h1");
    h1.textContent = name;

    // create description and add to info div
    var p = document.createElement("p");
    p.textContent = description;

    var a = document.createElement("a");
    a.href = link;

    // append all elements onto div
    infoDiv.appendChild(i);
    infoDiv.appendChild(h1);
    infoDiv.appendChild(p);
    a.appendChild(infoDiv);
    cardDiv.appendChild(a);

    // add the div to the featureCards id
    var targetElement = document.querySelector("#skillCards");
    if (targetElement) {
        targetElement.appendChild(cardDiv);
    }
}

// adds the skills divs when the page is loaded
window.addEventListener("load", function() {
    // adds the responsive web design div
    skillsDiv(skills[0].name, skills[0].description, skills[0].icon, skills[0].link);
    // adds the database management div
    skillsDiv(skills[1].name, skills[1].description, skills[1].icon, skills[1].link);
    // adds the programming languages div
    skillsDiv(skills[2].name, skills[2].description, skills[2].icon, skills[2].link);
    // adds the java oop and guis div
    skillsDiv(skills[3].name, skills[3].description, skills[3].icon, skills[3].link);
    // adds the data structures & algorithms div
    skillsDiv(skills[4].name, skills[4].description, skills[4].icon, skills[4].link);
});
