import portfolio from "../../assets/portfolio.png";
import pokeinfo from "../../assets/pokeinfo.png";
import pokeinfo_extension from "../../assets/pokeinfo_extension.png";
import redditTimerApp from "../../assets/reddit_timer_app.png";
export interface ProjectContent {
  title: string;
  text: string;
  imgLink: string;
  demoHref: string;
  repoHref: string;
  skillsClassNames: string[];
}
export const projects: ProjectContent[] = [
  {
    title: "Pokeinfo",
    imgLink: pokeinfo,
    repoHref: "https://github.com/piacib/pokeinfo",
    demoHref: "https://piacib.github.io/pokeinfo/",
    text: `This website accepts a battle ID from an active Pokémon Showdown battle and provides real-time information 
    for the battle by establishing a connection to the Pokémon Showdown WebSocket.
     It utilizes robust testing and typescript to help increase the maintainability and prevent future errors.`,
    skillsClassNames: [
      "devicon-javascript-plain",
      "devicon-html5-plain-wordmark",
      "devicon-css3-plain-wordmark",
      "devicon-typescript-plain",
    ],
  },
  {
    title: "Pokeinfo Extension",
    imgLink: pokeinfo_extension,
    repoHref: "https://github.com/piacib/pokeinfo_iframe_extension",
    demoHref:
      "https://chrome.google.com/webstore/detail/pokeinfo-showdown/bkfbliefifmflhjcggbgfimmodpiclgk?hl=en",
    text: `
    A chrome extension that enhances the Pokémon Showdown website by adding an iframe when a new battle 
    starts and transmitting the battle data to my Pokeinfo site via a WebSocket connection for display. 
    This application leverages URL search parameters to optimize the data transfer to the Pokeinfo site.`,
    skillsClassNames: [
      "devicon-html5-plain-wordmark",
      "devicon-github-original",
      "devicon-css3-plain-wordmark",
      "devicon-typescript-plain",
      "devicon-sass-original",
      "devicon-chrome-plain",
    ],
  },
  // {
  //   title: "Weather App",
  //   imgLink: "",
  //   repoHref: "https://github.com/piacib/weather_typescript_app",
  //   demoHref: "https://github.com/piacib/weather_typescript_app",
  //   text: `This site connects accepts a city in the us and then fetches its location from the national weather service. That data
  //   is then sent to a second api request to get the current weather in that location and display it.`,
  //   skillsClassNames: [
  //     "devicon-javascript-plain",
  //     "devicon-html5-plain-wordmark",
  //     "devicon-react-original",
  //     "devicon-github-original",
  //     "devicon-css3-plain-wordmark",
  //     "devicon-typescript-plain",
  //   ],
  // },
  {
    title: "Reddit Post Timer",
    imgLink: redditTimerApp,
    repoHref: "https://github.com/piacib/reddit-timer-piacib",
    demoHref: "https://piacib.github.io/reddit-timer-piacib/",
    text: `A website that utilizes the Reddit API to retrieve top posts from a
     specified subreddit and presents the optimal time to 
    create a post through a heat map display.`,
    skillsClassNames: [
      "devicon-javascript-plain",
      "devicon-html5-plain-wordmark",
      "devicon-react-original",
      "devicon-github-original",
      "devicon-css3-plain-wordmark",
    ],
  },
  {
    title: "Portfolio",
    imgLink: portfolio,
    repoHref: "https://github.com/piacib/portfolio",
    demoHref: "https://piacib.github.io/portfolio/",
    text: `I have designed my portfolio with a primary focus on CSS animations to enhance
     user experience and showcase my skills and web development experience. 
    The animations are crafted to create a clean and engaging visual presentation. This project utilizes
    SASS to create efficinet and maintainable CSS code.
    `,
    skillsClassNames: [
      "devicon-javascript-plain",
      "devicon-html5-plain-wordmark",
      "devicon-react-original",
      "devicon-github-original",
      "devicon-css3-plain-wordmark",
      "devicon-typescript-plain",
      "devicon-sass-original",
    ],
  },
];
