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



