## @buse
<div align="center">
    <img src="https://raw.githubusercontent.com/abusedev/crawler/main/abuse.png" alt="Logo" width="400" height="400">
  </a>
  <h3 align="center">@buse crawler</h3>
  <p align="center">
    This is a web crawler that uses HTML parsing to detect links on a website, at the end it will list all links on the site and how many times that link is linked to in total. 
       <a href="https://en.wikipedia.org/wiki/Web_crawler">what is a web crawler?</a>
  </p>
</div>

### Built With
<div align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="Logo" width="300" height="300">
</a>
    <p align="center">        
        Our spider can be ran on any machine so long as you install <a href="https://nodejs.org/en/download/current">node.js</a>
    </p>
</div>

## Getting Started
To get a local copy up and running follow these simple steps.

### Installation
1. Find a website that does NOT use cloudflare [google](https://google.com)
2. Clone the repo (or download manually)
   ```sh
   git clone https://github.com/abusedev/crawler.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
   If "npm" does not appear as a command and you just installed node.js, try restarting your device

4. Create config type
    ```sh
    npm run settings silent
    ```
5. Run the program
   ```sh
   npm start https://google.com
   ```

   ## Roadmap
   - [x] Normalize urls
   - [x] Ignore pages with status codes above 399 (server/client rejection)
   - [x] Custom user agent
   - [x] Ignore non HTML related content
   - [x] Automatically go to next linked page
   - [x] Ignore already loaded page
   - [x] Count times link is linked to
   - [x] Visually pleasing and readble log messages
   - [ ] Cloudflare bypass (requires changing from fetch to a curl probably)
   - [ ] Rate limit respecter
   - [x] Save results to file
   - [x] User settings
   - [ ] Color coated logs
   - [ ] Executable build

## Contribution
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. You can make a pull request [here](https://github.com/abusedev/crawler/pulls)

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an [issue](https://github.com/abusedev/crawler/issues) with the tag "enhancement".
Don't forget to give the project a star!

## Issues
Are you experiencing a bug? Head [here](https://github.com/abusedev/crawler/issues)

## Acknowledgments
<div>
    <a href="https://nodejs.org/en/download/current">node.js</a> - run javascript on the CLI
    <br>
    <a href="https://www.npmjs.com/package/jest">jest</a> - handles our function testing
    <br>
    <a href="https://www.npmjs.com/package/jsdom">jsdom</a> - handles HTML
</div>

## Licensing 
Permissions
* ✔️ Commercial use
* ✔️ Modification
* ✔️ Distribution
* ✔️ Private use
<br></br>

Release conditions
* ❕ License and copyright notice
* ❕ State changes
* ❕ Disclose source
* ❕ Same license
<br></br>

Limitations
* ❌ Liability
* ❌ Warranty
<br></br>

License being used: **GNU General Public License v2.0 license**
