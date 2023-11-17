React Series - Episode 01 - Inception


1.What is CDN 
CDN is a Content Delivery Network where a group of geographically distributed servers connected in a network. They provode cached internet content from a network location closest to user to speed up it's Delivery.

2.crossorigin attribute
crossorigin attribute is valid on audio,video,img,link,script tags. It provides support for CORS(Cross Origin Resource Sharing), defining how the elements handles the cross origin requests for the elements fetched Data. crossorigin='anonymous'orcrossorigin=''orcrossorigin --> it sets the CORS credentials flag to 'same-origin'. so, user-credentials via cookies, client-side TLS certificates or HTTP authentication is not exchanged unless destination is same-origin. crossorigin='use-credentials' sets the credentials flag to 'included'.

3.React -> React is an Object that some methods to create and manage react elements

4.const element React.createElement(type,props,...children) -> return a React element.
type -> type of element 
prop -> is an object containting attributes and default props, key and ref will be added here but canbe accessed with element.key or element.ref instead of element.props.key or element.props.ref
children arguement ->

example: 1 child -> children , multiple static children -> children1,children2
multiple dynamic children -> [child1,child2]

5.ReactDOM is used to connect to DOM and it acts like a bridge between React and DOM

6.ReactDOM.createRoot(domnode,options) -> it takes dom node from the DOM and creates a root,
where we can insert our code using root.render(element);

React Series - Episode 02 - Igniting

7. What is NPM?
NPM is a world's largest package registry where open source developers acorss the world use NPM to share and borrow.
NPM CLI is used to interact with npm, this cli is used to download package required by the developers

8. What is Parcel/WebPack? Why do we need it?
Parcel is bundler which is used to bundle our code, minify the code, compressed and clean the code before using them in Production. They provide different features HMR(Hot Module Replacement), File Watching, Live Server during developement etc..

9. What is .parcel-cache?
.parcel-cache store information about your project while building, son whenever it re-builds it doesn't have to re-parse and re-analyze everything from scratch. this is why parcel is so fast in development mode. you need ignore this folder while commiting by keeping it in .gitignore file

10. What is npx?
npx is a node package eXcecute which is used to execute some package without the need of installing them in our local.

11. What is the difference betweeen dependencies and devDependencies?
dependencies are the packages that we needed for our project. devDependencies are the dependencies that we needed only to help us during development and production builds but those are not useful in actual project.

12. What is Tree Shaking?
Tree Shaking is a term that commonly used in javascript context for dead code elimination .
It relies main on ES6 module syntax i.e import and export. The name and concept has been popularized by the module bundler rollup.

13. 5 superpowers of parcel and describe any three?
devServer,Tree shaking, file watcher,.parcel-cache,Image Optimization, minification, Differential Bundling, Hot Module Replacement.
devServer -> provides a live reload server in development mode.
tree shaking -> removed dead code i.e code which is not in use.
file watcher-> file watcher written in c++ constanly looks our file changes and re-builds accordingly.
HMR(Hot Module Replacemeng) -> HMR exchanges or add or deletes modules while an application is running without full reload.
Differential Bundling -> it creates different bundles to support old browsers as well.

14. What is '.gitignore'? Why do we need it?
gitIgnore is a file where mention file and folder names that are not needed to commit.
node_modules, .parcel-cache,dist to be placed here.

15. what is difference bbetween package.json and package-lock.json?
package.json contains information about our package and scripts information and information about dependencies and devDependencies along with approx versions. package-lock.json contains information about our packages with exact versions.

16. what is dist folder?
dist folder is a place where our final builded code will be placed.

17. what is browserslist
browserslist is an array, which defines in which versions and browsers that our code should definetly work

18. ^(caret) and ~(tilde)
^ (caret) -> compatible with version -> will update you to all future minor/patch version without increment the major version, ^1.2.3 will use release < 2.0.0
~(tilde) -> approx equal to version, will update you to all patch versiones without incrementing the minor version. ~1.2.3 will use release < 1.3.0

React Series - Episode 03 - Laying the foundation

19. What is JSX?
JSX is a Syntax Extension for JavaScript that let you write HTML like syntax inside javascript files.

20. SuperPowers of JSX?
JSX lets us write the HTML like syntax inside javascript. and we can javasript inside {} of JSX elements.
some rules of JSX -> attribute names should be in camelcase.

21. Role of type attribute in script tag? What options can i use there?
type attribute of script tag indicates the type of script represented by the element.


22. {TitleComponent} vs {<TitleComponent/>} vs {<TileComponent></TitleComponent>} in JSX?
{TitleComponent} gives you error as functions are not valid react child. other two works similar and as expected.


React Series = Episode 04 - Show me the code

/**
 * Food Order App
 *    -Header
 *      -Logo
 *      -NavBar
 *    -Body
 *      -Search
 *      -Restaurant Container
 *          -Restaurant Card
 *    -Footer
 *      -Copyright
 *      -Links
 *      -Address
 *      -Contact
 */