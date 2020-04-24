![GA logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

# Final Project 
## Jacob Kleiman 🌴
### SEI 08

<hr>

Title: FreeChat<br>
Technologies: React, Node.js, Twilio-Video, Sass<br>
Creator: Jacob Kleiman<br>
Goal: Implement a simple, easy, free, video chat
<hr>

![Splash](images/splashpage.png)

<hr>

## The problem

With the current situation of the world right now (Covid-19), there is a high demand for video conferencing. A major issue I've observed is the issue of the entire onboarding and installation process. This web application proposes a solution that is to streamline the process of video conferencing, encrypted "rooms" for private and minimal accessibility.


## Planning
Over the intial days of the project, I worked on low to mid-fidelity wireframes, this process was one of the first things I did to ensure a feasible implementation and concept of design.

<hr>

![Splash](images/wire.png)

<hr>


## The Video Stream

For my application I decided to use the video application programming interface from Twilio. In order to enable a user's audio and video with twilio, the application must use an ssl protocol (HTTPS) for security reasons.

<hr>

![Bubble-class](images/hooks.png)

<hr>

## The Rooms and Participants with React Hooks and JWT

The rooms hold participants, each instance of a participant contains a ```<video>``` and ```<audio>```, as well as a display name, and room name. All of the information is stored within an encrypted jwt (json web token), the primary packets of information passed between the client and server.
I used React Hooks to streamline the process of manipulating the state, handling callbacks, as well as orchestrating the entire lifecycle of my Room component in a single useEffect function.

## The UI and Design

The visual concept behind my app is minimalistic. No bells and whistles to confuse the user, light button gradients, monospace typefaces (special thanks to Cat C). This was without the hardest front-end designs I ever implemented, due to the less is more concept that I pursued.

<hr>

![Splash](images/splash.png)

<hr>
