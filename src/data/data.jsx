import {
	Icon3dCubeSphere,
	IconBrandAdobe,
	IconBrandBlender,
	IconBrandCss3,
	IconBrandDjango,
	IconBrandFirebase,
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandJavascript,
	IconBrandPython,
	IconBrandReact,
	IconBrandRedux,
	IconBrandSass,
	IconBrandTailwind,
	IconBrandTwitter,
	IconBrandYoutube,
	IconHtml,
	IconMusic,
} from "@tabler/icons-react";
import AVATAR from "../public/Avatar.jpg";
import cali from "../public/cali/cali.jpg";
import cali2 from "../public/cali/cali2.jpg";
import cali3 from "../public/cali/cali3.jpg";
import cali4 from "../public/cali/cali4.jpg";
import cali5 from "../public/cali/cali5.jpg";
import Insider1 from "../public/insider/insider1.jpg";
import Insider2 from "../public/insider/insider2.jpg";
import Insider3 from "../public/insider/insider3.jpg";
import Insider4 from "../public/insider/insider4.jpg";

import Deflicks from "../public/deflicks/deflicks_main.png";
import Deflicks1 from "../public/deflicks/deflicks_1.png";
import Deflicks2 from "../public/deflicks/deflicks_2.png";
import Deflicks3 from "../public/deflicks/deflicks_3.png";
import Deflicks4 from "../public/deflicks/deflicks_4.png";
import Deflicks5 from "../public/deflicks/deflicks_5.png";
import Deflicks6 from "../public/deflicks/deflicks_6.png";
export let Links = [
	{
		name: "Home",
		to: "/",
		type: "",
	},

	{
		name: "Skills",
		to: "Skills",
		type: "scroll",
	},
	{
		name: "Projects",
		to: "Projects",
		type: "scroll",
	},
	{
		name: "Contact",
		to: "Contact",
		type: "scroll",
	},
];

export const INFO = {
	main: {
		title: "Reactfolio by Destiny",
		name: "Osuoha Destiny",
		email: "desto4q@gmail.com",
		// logo: "../logo.png",
	},

	socials: [
		{
			name: "twitter",
			link: "https://twitter.com/ynitsed_1",
			Icon: IconBrandTwitter,
		},
		{
			name: "Github",
			link: "https://github.com/desto4q",
			Icon: IconBrandGithub,
		},
		{
			name: "Instagram",
			link: "https://www.instagram.com/_desto4u/",
			Icon: IconBrandInstagram,
		},
		{
			name: "Youtube",
			link: "https://www.youtube.com/channel/UC_DUZ3qPCwTvAwNRB1Xs2PQ",
			Icon: IconBrandYoutube,
		},
		{
			name: "cgtrader",
			link: "https://www.cgtrader.com/desto4q",
			Icon: Icon3dCubeSphere,
		},
	],

	homepage: {
		title: "Web developer,Graphic Designer and Producer ",
		description:
			"I am a Web developer with expertise in Node.js. Highly motivated and enthusiastic Developer with a passion for creating efficient, user-friendly, and innovative software solutions. Proficient in various programming languages and eager to contribute to collaborative projects while continuously learning and honing skills. Adept at problem-solving, teamwork, and embracing challenges in a dynamic and fast-paced environment..",
	},

	//   about: {
	//     title: "I'm Tharindu N. I live in Sri Lanka, where I design the future.",
	//     description:
	//       "I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	//   },
};

export let PROJECTS = [
	{
		title: "Instagram Clone",
		description:
			"The Instagram UI Clone project involves recreating the user interface (UI) of a well-known mobile application, [Original App Name], to closely resemble its design, layout, and visual elements. The goal of this project is to create a visually identical user interface that provides users with a similar look and feel as the original app. While the functionality of the app will not be replicated, the UI clone will focus on achieving pixel-perfect accuracy in terms of design and aesthetics. This project will enable developers to practice UI design skills, learn about app layout, and gain insights into creating polished and visually appealing interfaces.",

		tools: ["react", "context api", "tailwind css"],
		image: ["https://illumicode.netlify.app/assets/creative-27738ac9.png"],
		links: {
			source_code: "https://illumicode.netlify.app/details/2#",
			link: "https://dezzinsta.netlify.app/",
		},
		features: [""],
		why: "",
	},
	{
		title: "Deflicks",
		description:
			"Deflicks is a Movie and Video streamin website/App that is fully responsive, offers a wide range of movies and series from different cultures",
		features: ["Search and Filter", "responsive design","live streaming"],
		tools: ["react", "sass", "tmdb-database", "zustand"],
		image: [
			Deflicks,
			Deflicks1,
			Deflicks2,
			Deflicks3,
			Deflicks4,
			Deflicks5,
			Deflicks6,
		],
		links: {
			source_code: "",
			link: "https://deflicks.netlify.app/",
		},
		why: "",
	},
	{
		title: "LuLu Store",
		description:
			"Lulu Store  is a self-initiated web development venture aimed at creating a fully functional online shopping platform. This Store website will allow users to browse and purchase a wide range of products conveniently from the comfort of their homes. The site will feature a user-friendly interface, secure payment gateways, and an efficient product catalog system. As the sole developer of this project, the goal is to gain hands-on experience in building a complete e-commerce solution, from front-end design to back-end implementation, while also showcasing a diverse selection of products to potential customers.",
		features: [""],
		tools: ["react", "sass", "redux", "fakeStore-api"],
		image: ["https://illumi.netlify.app/assets/lulu-store-a05e7ad4.png"],
		links: {
			source_code: "https://illumicode.netlify.app/details/2#",
			link: "https://dezzinsta.netlify.app/",
		},
		why: "",
	},
	{
		title: "Piggy vest Clone",
		description:
			"The Website UI Clone project involves replicating the user interface (UI) of an existing website, piggyvest.com to create a visually similar and interactive clone. The objective is to closely mimic the design, layout, and overall user experience of the original website, ensuring pixel-perfect accuracy in visual elements. This project allows developers to practice UI design and front-end development skills, gain insights into the structure of a well-designed website, and understand the implementation of various interactive elements. While the functionality of the original website will not be reproduced, this project will focus on delivering a high-quality UI clone that demonstrates attention to detail and design precision.",
		features: [""],
		why: "",
		tools: ["react", "python", "redux"],
		image: ["https://illumicode.netlify.app/assets/piggy-c343c652.png"],
		links: {
			source_code: "https://illumicode.netlify.app/details/2#",
			link: "https://dezzinsta.netlify.app/",
		},
	},
	{
		title: "Cali",
		description:
			"The Image Board is a personal project that aims to create an online platform where users can upload, share, and discover images. Inspired by popular image-sharing websites, the project's goal is to provide a user-friendly and visually appealing interface for users to showcase their favorite pictures and explore images shared by others..",
		features: [
			"User authentication",
			"image Upload",
			"Search and Filter",
			"user profiles",
			"responsive design",
		],
		tools: ["react", "django", "postgres", "firebase"],
		why: "Creating an Image Board serves as an excellent opportunity to strengthen my full-stack development skills. The project allows me to gain hands-on experience in building a complete web application, from frontend design to backend server setup and database management. Moreover, it allows me to showcase my creativity and ability to design an aesthetically pleasing user interface.",
		image: [cali, cali2, cali3, cali4],
		links: {
			source_code: "https://github.com/desto4q/cali",
			link: "app-cali.netlify.app/page/1",
		},
	},
	{
		title: "Cali-api",
		description:
			"My cali API Project is a passion-driven endeavor focused on developing a RESTful API to power a unique web application. The primary objective of this project is to showcase my full-stack development skills while creating a practical and innovative solution.",
		features: [
			"User authentication",
			"image Upload",
			"Search and Filter",
			"user profiles",
		],
		tools: ["python", "django"],
		why: "The Personal API Project is not only an opportunity to strengthen my technical skills but also a chance to pursue learning. By creating a image api I can combine my love for coding with my interest in learning. Additionally, this project allows me to demonstrate my ability to design and implement a RESTful API, manage databases, and create a user-friendly web application from scratch. Ultimately, I hope this project will be a valuable addition to my portfolio, showcasing my capabilities as a full-stack developer with a focus on building practical and engaging applications.",
		image: [cali5],
		links: {
			source_code: "https://github.com/desto4q/cali",
			link: "https://cali-production.up.railway.app/?format=json",
		},
	},
	{
		title: "INpic",
		description:
			"The Image Board project is an excellent learning opportunity for developers seeking hands-on experience with public APIs. This project involves creating a web application that leverages a public image-sharing API to retrieve and display images from a popular image repository.",
		features: [
			"Api Integration",
			"Data Retrieval",
			"Search and Filter",
			"Display and Presentation",
		],
		tools: ["python", "django", "pexels_api"],
		why: "By working on the Image Board project and mastering public API integration, developers can strengthen their skills and gain valuable experience applicable to a wide range of web development scenarios, where API usage is commonplace..",
		image: [Insider1, Insider2, Insider3, Insider4],
		links: {
			source_code: "https://github.com/desto4q/INsider",
			link: "#",
		},
	},
];

export let dummy_Resume = [
	{
		title: "Started learning Web development",
		p: "Completed on July 7th, 2021",
		details:
			"As I progressed in learning HTML, I found myself becoming more comfortable with its fundamental concepts and syntax. I can now confidently create well-structured web pages, incorporating essential elements like headings, paragraphs, images, and hyperlinks. Understanding semantic HTML tags has allowed me to assign meaning to content, making my pages more accessible and search engine friendly.",
	},
	{
		title: "React development",
		p: "Completed on may 7th, 2022",
		details:
			"As I make progress in learning React, I am amazed by the power and flexibility this JavaScript library offers in building dynamic and responsive user interfaces. Understanding React's component-based architecture has enabled me to create reusable and modular UI elements, enhancing code organization and maintainability.",
	},
	{
		title: "Full Stack",
		p: "Ongoing",
		details:
			"As I progress in becoming a full-stack developer, I am embracing the opportunity to work with both frontend and backend technologies. Learning various frontend frameworks like React, Angular, or Vue.js has allowed me to create dynamic and interactive user interfaces, providing a seamless user experience.",
	},
];

export let my_Skills = [
	{
		name: "HTML",
		Icon: IconHtml,
	},
	{
		name: "CSS",
		Icon: IconBrandCss3,
	},
	{
		name: "Javascript",
		Icon: IconBrandJavascript,
	},
	{
		name: "Python",
		Icon: IconBrandPython,
	},
	{
		name: "React",
		Icon: IconBrandReact,
	},
	{
		name: "Django",
		Icon: IconBrandDjango,
	},
	{
		name: "Git",
		Icon: IconBrandGithub,
	},
	{
		name: "Scss",
		Icon: IconBrandSass,
	},
	{
		name: "Tailwind",
		Icon: IconBrandTailwind,
	},
	{
		name: "Firebase",
		Icon: IconBrandFirebase,
	},
	{
		name: "Redux",
		Icon: IconBrandRedux,
	},
	{
		name: "Photoshop",
		Icon: IconBrandAdobe,
	},
	{
		name: "Illustrator",
		Icon: IconBrandAdobe,
	},
	{
		name: "Fl studio",
		Icon: IconMusic,
	},
	{
		name: "Blender",
		Icon: IconBrandBlender,
	},
];

export default AVATAR;
