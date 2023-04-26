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
    title: "PokeInfo",
    imgLink: pokeinfo,
    repoHref: "https://github.com/piacib/pokeinfo",
    demoHref: "https://piacib.github.io/pokeinfo/",
    text: `This website accepts a battle id from an active pokemon showdown battle and displays the real time info for the battle
    by connecting to the pokemon showdown websocket. It utilizes robust testing and typescript to help increase the maintainability and prevent future errors.`,
    skillsClassNames: [
      "devicon-javascript-plain",
      "devicon-html5-plain-wordmark",
      "devicon-css3-plain-wordmark",
      "devicon-typescript-plain",
    ],
  },
  {
    title: "PokeInfo Extension",
    imgLink: pokeinfo_extension,
    repoHref: "https://github.com/piacib/pokeinfo_iframe_extension",
    demoHref:
      "https://chrome.google.com/webstore/detail/pokeinfo-extension/plolbicmjndjpglocmmgnbppgnadmlfb",
    text: `A chrome Extension that adds an iframe to the pokemonshowdown website when a new battle starts and
    sends data from the battle to my pokeinfo site via a websocket to be displayed. This application utilizes URL Search paramaters to
    efficiently send data to the pokeinfo site.`,
    skillsClassNames: [
      "devicon-html5-plain-wordmark",
      "devicon-github-original",
      "devicon-css3-plain-wordmark",
      "devicon-typescript-plain",
      "devicon-sass-original",
      "devicon-chrome-plain",
    ],
  },
  {
    title: "Weather App",
    imgLink: "",
    repoHref: "https://github.com/piacib/weather_typescript_app",
    demoHref: "https://github.com/piacib/weather_typescript_app",
    text: `This site connects accepts a city in the us and then fetches its location from the national weather service. That data
    is then sent to a second api request to get the current weather in that location and display it.`,
    skillsClassNames: [
      "devicon-javascript-plain",
      "devicon-html5-plain-wordmark",
      "devicon-react-original",
      "devicon-github-original",
      "devicon-css3-plain-wordmark",
      "devicon-typescript-plain",
    ],
  },
  {
    title: "Reddit Post Timer",
    imgLink: redditTimerApp,
    repoHref: "https://github.com/piacib/reddit-timer-piacib",
    demoHref: "https://piacib.github.io/reddit-timer-piacib/",
    text: `A website that connects to the reddit api and fetches top posts from a given subreddit and displays the best time to make a post in a heat map display. `,
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
    text: `A chrome Extension that adds an iframe when a new battle starts and
    sends data from the battle to my pokeinfo site to be displayed A
    chrome Extension that adds an iframe when a new battle starts and
    sends data from the battle to my pokeinfo site to be displayed A
    chrome Extension that adds an iframe when a new battle starts and
    sends data from the battle to my pokeinfo site to be displayed`,
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
