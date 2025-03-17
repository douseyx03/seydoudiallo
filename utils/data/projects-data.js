import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'PENC: Professional discussion forum',
        description: "PENC is a web application that allows professionals from different domains of activity to communicate and share their experiences within their dedicated space (forum).",
        tools: ['Laravel', 'MySQL', 'Swagger', 'Docker', 'PHPUnit', 'Mailtrap', 'Jokko Cpanel', 'Mamp', 'Trello', 'Discord', 'Angular','Figma','Git', 'JWT', 'UML'],
        role: 'Backend Developer',
        code: 'https://github.com/douseyx03/CERTIF---PENC.git',
        demo: '',
        image: 'ayla.jpg',
    },
    {
        id: 2,
        name: 'Web application for event reservation management',
        description: 'Allow event creators to publish their events, receive participation requests, and accept or decline them. Participants can view events, send participation requests, and view their status.',
        tools: ['Laravel', 'MySQL', 'Mailtrap', 'Mamp', 'Trello', 'Discord', 'Git',  'UML'],
        role: 'Web Developer',
        code: 'Not Found',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Forum CHNU Fann',
        description: 'The internal forum of CHNUF is a communication and exchange platform for the employees of this university hospital.',
        tools: ['Flarum','Google reCAPTCHA'],
        role: 'Web Developer',
        code: 'https://chnuf.flarum.cloud/',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Kicos Express',
        description: "E-commerce application with web stacks for Kicos shops and restaurants, and a mobile app for customers and delivery personnel.",
        tools: ['Laravel', 'Angular', 'React Native', 'MySQL', 'Mailtrap', 'Mamp', 'Github Project', 'Git-GitFlow', 'UML', 'Insomnia', 'Hostinger', 'Figma', 'Google Meet'],
        role: 'Backend Developer',
        code: 'Private',
        demo: '',
        image: ayla,
    },
    {
        id: 5,
        name: 'Python Project',
        description: "jbbsknk",
        tools: [],
        role: '',
        code: 'Private',
        demo: '',
        image: ayla,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },