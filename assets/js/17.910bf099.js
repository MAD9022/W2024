(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{242:function(e,t,a){e.exports=a.p+"assets/img/next-setup.d08e48b0.png"},325:function(e,t,a){"use strict";a.r(t);var s=a(10),o=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"makeup-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#makeup-project"}},[e._v("#")]),e._v(" Makeup Project")]),e._v(" "),t("h2",{attrs:{id:"nextjs-14-christian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nextjs-14-christian"}},[e._v("#")]),e._v(" NextJS 14 - Christian")]),e._v(" "),t("h3",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("You will be creating a NextJS app that does it's rendering and fetching ALL on the server, uses ENV variables for the API keys and tokens, talks to 4 different APIs, and combines the values from each\nof those through dynamic endpoints and routing. It "),t("strong",[e._v("MUST")]),e._v(" use the APP Router introduced in NextJS 13, and "),t("strong",[e._v("NOT")]),e._v(" the Page Router from older versions of NextJs.")]),e._v(" "),t("p",[e._v("The website also needs to have login-logout functionality that leverages an Express backend running in a website on onRender.com. The Express site only needs to have the handling of the login request.\nIt forwards the request for logging in to the Google OAuth process and then creates the JWT token and returns it to the NextJS site callback URL.")]),e._v(" "),t("p",[e._v("The API list:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://restcountries.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("RestCountries API"),t("OutboundLink")],1),e._v(" and the "),t("code",[e._v("https://restcountries.com/v3.1/all")]),e._v(" endpoint.")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://openweathermap.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenWeathermap API"),t("OutboundLink")],1),e._v(" and the "),t("code",[e._v("https://api.openweathermap.org/data/2.5/weather?q=")]),e._v(" endpoint.")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://pixabay.com/api/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pixabay Image API"),t("OutboundLink")],1),e._v(" and the "),t("code",[e._v("https://pixabay.com/api/?")]),e._v(" endpoint.")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://developer.themoviedb.org/docs/getting-started",target:"_blank",rel:"noopener noreferrer"}},[e._v("TMDB API"),t("OutboundLink")],1),e._v(" and the "),t("code",[e._v("https://developer.themoviedb.org/reference/search-movie")]),e._v(" endpoint.")])]),e._v(" "),t("h3",{attrs:{id:"setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),t("p",[e._v("Use JavaScript, not Typescript in your NextJs project.")]),e._v(" "),t("p",[e._v("When creating your NextJs project with "),t("code",[e._v("create-next-app")]),e._v(" use these values to answer the questions.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(242),alt:"Next Setup Options"}})]),e._v(" "),t("p",[e._v("You will need to have a "),t("code",[e._v(".env.local")]),e._v(" file at the root of your project. This file is in your gitignore file by default. You will need to submit it separately as an attachment through Slack or email.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("TMDB_TOKEN=Your JWT bearer token value for TMDB\nPIXABAY_KEY=Your Pixabay account api key\nWEATHER_KEY=Your OpenWeather account api key\nBASE_URL=http://localhost:3000 ...this will be different on Vercel\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("h3",{attrs:{id:"folder-structure-and-endpoints"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#folder-structure-and-endpoints"}},[e._v("#")]),e._v(" Folder Structure and Endpoints")]),e._v(" "),t("p",[e._v("Here is the basic folder structure for the project, inside the "),t("code",[e._v("app")]),e._v(" folder.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("- middleware.js\n/app\n  - layout.js\n  - page.js\n  - error.js\n  - not-found.js\n  /[country]\n    - page.js\n    /[capital]\n      - page.js\n      /photos\n        - page.js\n      /movies\n        -page.js\n  /login\n    - page.js\n  /logout\n    - page.js\n  /process\n    - page.js\n  /api\n    - route.js\n    /[location]\n      - route.js\n      /movies\n        - route.js\n      /photos\n        - route.js\n  /components\n    - header.js\n    - spinner.js\n    - weathercard.js\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br"),t("span",{staticClass:"line-number"},[e._v("32")]),t("br")])]),t("p",[t("code",[e._v("/app/page.js")]),e._v(" is the home page. It will display an alphabetically sorted list of all the countries, grouped by region. For each country, show their common country name plus the name of the capital\ncity. Clicking country-city link will take the user to the "),t("code",[e._v("/[country]/[capital]")]),e._v(" URL endpoint. This page will make a fetch call to the "),t("code",[e._v("/api/route.js")]),e._v(" endpoint to get the list. Use the\n"),t("code",[e._v("<Suspense fallback={}>")]),e._v(" React component to allow the rest of the page to load while waiting for fetch results. Do not show entries if there is no capital city value.")]),e._v(" "),t("p",[t("code",[e._v("/app/[country]")]),e._v(" is a redirect page. If the user just types just a country name, call the "),t("code",[e._v("/api")]),e._v(" endpoint to get the list of countries, find the matching one and redirect to "),t("code",[e._v("/[country]/[capital]")]),e._v(". If\nthere is no match for the country, then redirect to the home page which will show the whole list of all countries.")]),e._v(" "),t("p",[t("code",[e._v("/app/[country]/[capital]")]),e._v(" page will fetch the weather for the correct capital city and display it on the page. Additionally it will have links to the home page, the movies page, and the photos page.\nIf the weather API has no match for the (city, country), then show an error message about their being mo match for the city and do NOT show the links to the movies or photos page. The weather data can\nbe fetched directly from the "),t("code",[e._v("weathercard")]),e._v(" component or page.js file OR you can create a new endpoint like "),t("code",[e._v("/api/[location]/weather/route.js")]),e._v(" to fetch the weather data. The weather data shown should\ninclude the current temp, main value, description, and icon.")]),e._v(" "),t("p",[t("code",[e._v("/app/[country]/[capital]/movies")]),e._v(" page will make a fetch call to the "),t("code",[e._v("/api/[location]/movies/route.js")]),e._v(" endpoint and get a list of the first page of results from TMDB. The name of the capital city can\nbe passed through the query string to the route.js file. The movie search will be based on the name of the capital city. Be sure to display an error message if the fetch call fails OR if it works but\nthere are no results. For each movie, display a title, release_date, overview, and the image. Be sure to have a placeholder image if the image value from TMDB is null. Use a responsive GRID to show\nthe movie cards.")]),e._v(" "),t("p",[t("code",[e._v("/app/[country]/[capital]/photos")]),e._v(" page will make a fetch call to the "),t("code",[e._v("/api/[location]/photos/route.js")]),e._v(" endpoint and get a list of the results from Pixabay. Limit the results by "),t("code",[e._v("image_type=photo")]),e._v(". The\nname of the capital city can be passed through the query string to the route.js file. The movie search will be based on the name of the capital city. Be sure to display an error message if the fetch\ncall fails OR if it works but there are no results. For each Photo, show a card with the image, the photographer's name, and a link to the page on Pixabay for the image downloads.")]),e._v(" "),t("p",[t("code",[e._v("/not-found.js")]),e._v(" is a custom 404 error page for invalid routes. Make sure it uses the common layout and header component, plus a link to the home page.")]),e._v(" "),t("p",[t("code",[e._v("/error.js")]),e._v(" is a custom error page that shows when a JS error occurs. Make sure it uses the common layout and header component, plus a link to the home page.")]),e._v(" "),t("p",[t("code",[e._v("/api/route.js")]),e._v(" fetches the list of countries from the RestCountries API. When fetching the data, be sure to set the "),t("code",[e._v("{next: {revalidate: 0 }}")]),e._v(" setting to cache the results for one day. The results\nshould be sorted by region first and then country name before being returned to the page. It needs to gracefully handle fetch failures.")]),e._v(" "),t("p",[t("code",[e._v("/api/[location]/route.js")]),e._v(" fetches the same data as "),t("code",[e._v("/api/route.js")]),e._v(" but it filters the results and only returns the object for the matching country. It needs to gracefully handle errors for no\nmatching country name.")]),e._v(" "),t("p",[t("code",[e._v("/api/[location]/movies/route.js")]),e._v(" fetches the movies from TMDB with the endpoint "),t("code",[e._v("https://api.themoviedb.org/3/search/movie")]),e._v(". It needs to use the "),t("code",[e._v("Authorization")]),e._v(" header with the bearer token from the\nENV variables. It should find matches for the capital city name. Pass the capital city name through the dynamic path segment "),t("code",[e._v("[location]")]),e._v(". Note that the "),t("code",[e._v("api")]),e._v(" segments don't need a country and a city,\njust one value for the city.")]),e._v(" "),t("p",[t("code",[e._v("/api/[location]/photos/route.js")]),e._v(" fetches the photos from Pixabay with the endpoint "),t("code",[e._v("https://pixabay.com/api?key=&q=&image_type=photo")]),e._v(".")]),e._v(" "),t("p",[t("code",[e._v("/middleware.js")]),e._v(" handles all the requests before they get sent to the api route.js files or the layout.js and page.js files. When a request for logout happens it deletes the cookie and redirects the\nuser to the home page. When a request that includes "),t("code",[e._v("?token=")]),e._v(" in the querystring is received, it will add a session cookie to the response and send the user to the home page. If the user is trying to\naccess a page.js endpoint that is not in the api folder or not one of the login/logout pages then a check for the session cookie needs to be done. If the cookie is missing then the user gets\nredirected to the home page.")]),e._v(" "),t("p",[t("code",[e._v("/logout/page.js")]),e._v(" is the page that loads when the user clicks on logout button. The middleware deletes the cookie. This page needs to load in the browser so that the browser deletes the cookie. Then\nit does a clientside redirect to the home page. Make sure that this page is not cached.")]),e._v(" "),t("p",[t("code",[e._v("/process/page.js")]),e._v(" is the callback url. This is the page that loads when the returning from the onRender site and the creation of the JWT token. It does a clientside redirect to the home page. The\nmiddleware will have read the token from the querystring and created the session cookie before this page loads. Make sure that this page is not cached.")]),e._v(" "),t("p",[t("code",[e._v("/login/page.js")]),e._v(" is the page that loads when the user clicks the login button. This page does the redirect to the auth link in the onRender site.")]),e._v(" "),t("p",[t("code",[e._v("/components/header.js")]),e._v(" is the header component that should be loaded on every page except login, logout, and process. It displays the site title which is a link to the home page. It also displays\neither a login or a logout link depending on whether or not the session cookie exists or not.")]),e._v(" "),t("h3",{attrs:{id:"authorization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[e._v("#")]),e._v(" Authorization")]),e._v(" "),t("p",[e._v("The onRender Express site needs to handle requests for logging in through Google OAuth as well as have a home route that indicates if the site is online.")]),e._v(" "),t("p",[e._v("It needs to accept requests for logging in that have "),t("code",[e._v("?redirect_url=")]),e._v(" in the querystring. This querystring parameter contains the URL on the localhost/vercel site's "),t("code",[e._v("/process")]),e._v(" endpoint.")]),e._v(" "),t("p",[e._v("It needs to create a valid JWT token and return that in the querystring as "),t("code",[e._v("?token=")]),e._v(" when redirecting back to the "),t("code",[e._v("/process")]),e._v(" endpoint.")]),e._v(" "),t("p",[e._v("The only page that may be seen when not logged in is the home page.")]),e._v(" "),t("p",[e._v("The header.js component needs to be not cached so it can check for the session cookie on each render and display the proper login or logout link.")]),e._v(" "),t("p",[e._v("The home page will display messages at the top which change depending on whether or not the user is logged in. The message will either tell them to login before visiting the rest of the site or invite\nthem to click on the country names to visit the various pages and see the rest of the site.")]),e._v(" "),t("p",[e._v("The home page will always display the whole sorted list of regions and countries. However, if the user is not logged in then the content is just text, not links.")]),e._v(" "),t("h3",{attrs:{id:"general-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#general-requirements"}},[e._v("#")]),e._v(" General Requirements")]),e._v(" "),t("ul",[t("li",[e._v("App Router must be used for NextJS.")]),e._v(" "),t("li",[e._v("No React hooks may be used.")]),e._v(" "),t("li",[e._v("All JavaScript errors must be handled.")]),e._v(" "),t("li",[e._v("All fetch calls must be made server-side.")]),e._v(" "),t("li",[e._v("All navigation in the pages should be done with the Next "),t("code",[e._v("<Link>")]),e._v(" components.")]),e._v(" "),t("li",[e._v("All images in the pages should be built with the Next "),t("code",[e._v("<Image>")]),e._v(" components.")]),e._v(" "),t("li",[e._v("Be sure to update the "),t("code",[e._v("next.config.mjs")]),e._v(" file to allow the images being loaded.")])]),e._v(" "),t("h3",{attrs:{id:"design-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#design-requirements"}},[e._v("#")]),e._v(" Design Requirements")]),e._v(" "),t("ul",[t("li",[e._v("All content must use accessible colour combinations and work on both dark mode and light mode.")]),e._v(" "),t("li",[e._v("All layouts must be responsive and still function across a range of screen sizes.")]),e._v(" "),t("li",[e._v("Use proper padding and margin values to maintain readability and usability standards.")])]),e._v(" "),t("h3",{attrs:{id:"project-demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#project-demo"}},[e._v("#")]),e._v(" Project Demo")]),e._v(" "),t("YouTube",{attrs:{title:"Project demo video",url:"https://www.youtube.com/embed/UEs35HPniDU"}}),e._v(" "),t("h3",{attrs:{id:"submission"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#submission"}},[e._v("#")]),e._v(" Submission")]),e._v(" "),t("ol",[t("li",[e._v("Use a "),t("strong",[e._v("private")]),e._v(" Github repo to hold your NextJS project.")]),e._v(" "),t("li",[e._v("Use a "),t("strong",[e._v("private")]),e._v(" Github repo to hold your Express project.")]),e._v(" "),t("li",[e._v("The NextJs project must be at the root of the Git repo.")]),e._v(" "),t("li",[e._v("Create a Vercel project that is connected to your private repo.")]),e._v(" "),t("li",[e._v("Invite "),t("code",[e._v("prof3ssorSt3v3")]),e._v(" to your Github repo for the NextJS project.")]),e._v(" "),t("li",[e._v("Invite "),t("code",[e._v("prof3ssorSt3v3")]),e._v(" to your Vercel project.")]),e._v(" "),t("li",[e._v("Invite "),t("code",[e._v("prof3ssorSt3v3")]),e._v(" to your Github repo for the Express project.")]),e._v(" "),t("li",[e._v("Submit by email:")])]),e._v(" "),t("ul",[t("li",[e._v("The "),t("code",[e._v("Github.com")]),e._v(" repo url.")]),e._v(" "),t("li",[e._v("The public "),t("code",[e._v("Vercel.app")]),e._v(" url.")]),e._v(" "),t("li",[e._v("The public URL for your "),t("code",[e._v("onrender.com")]),e._v(" url.")]),e._v(" "),t("li",[e._v("Your ENV variable file.")])]),e._v(" "),t("p",[e._v("Due before 8am on Wed. May 15, 2024")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);