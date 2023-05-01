# Mates-DatingApp

[![Build Status](https://img.shields.io/badge/Status-Developing-yellow?style=flat-square&logo=font-awesome)](#)


**Mates™** is a **Professional**, **Open Source** and **intelligent Dating Software**. Fully responsive design, low-resource-intensive, powerful and very secure. However, it's still on the developing process

![image](https://user-images.githubusercontent.com/106876168/235503011-e2af3897-9815-4efb-bf34-f843ccead832.png)

## 📖 Contents

- [Software Overview](#-software-overview-)
  - [Features](#-what-this-webapp-have-)
- [Requirements](#-requirements)
- [Installation](#-installation)
- [Tools Used to Develop Mates](#-tools-i-used)

## 👀 Software Overview 🎉

**Mates** is a **social community ** built using modern web-based technologies with a **RESTful API** for easy communication between front-end and back-end and will later be updated to an **MVC** model.

Additionally, the application has been built with **AI-assisted** 🤖 matching algorithms that suggest compatible matches based on the <i>image</i> a user provide. The use of AI algorithms ensures **higher match quality**, helps users find their compatibility partner more effectively and the matching system improves with time and user data.

To summary, the software will provide users with a good experience by offering a personalized approach to online dating through advanced AI algorithms, secure communication channels, and geolocation tracking. The easy-to-use interface and solid technology stack will ensure a smooth and efficient user experience.

## 😻 What this Webapp have? 🚀

As being said, this web application has been designed to enhance the users' experience through its features. Here are some of the amazing features included in this web app

1. **Get Nearby Users** 📍

One of the primary features of this web app is the ability to discover nearby users based on the user's geolocation. This feature uses geolocation tracking to suggest matching profiles in the same locality, making it easier for users to find potential matches in their area.

2. **Get Similar User** 🤖

Another innovative functionality of this web app is the AI-powered image matching system. This advanced feature uses an intelligent algorithm to analyze image data and suggest similar users based on profile pictures. The AI algorithm takes into consideration physical attributes and other image features to provide the best matchest.

3. **Secure Chat** 🔒

User security and privacy is a top priority for this web app, which is why we have incorporated a secure chat functionality that ensures all communication between users is private and secure. The secure chat feature enables users to communicate seamlessly with their matches in a safe and secure environment.

With these features, this impressive web app is making online dating safer, faster, and more enjoyable for users. Try it now and find your perfect match!

## ⚙ Requirements

* **Application Server** Python 3.8 or newer 🚀

* **Application Client** ReactJS 18.2.0

* **Database** MongoDB 6.0.2 or newer 🚀.

* **Operating System** Linux.

## 🛠 Installation

  * Git Repository:
    * Clone pH7Builder from Github `git clone https://github.com/anh-nt24/Mates-DatingApp`
      (use `--depth=1` flag at the end of the line if you don't need the git history)
  * Setup environment:
    * Note: 
      - The guide below is performed on Ubuntu 22.04 operating system, the commands may vary a bit for other operating systems.
      - The recommended browser is Chrome.

    * Setup steps:

      1. Step 1: Install environment 💻 🚀
        - Navigate to the client folder and run the command `npm install` to install all libraries in the 'package.json' file.
        - Navigate to the server folder and run the 'env.py' file to install all required Python libraries. Note that the version of Python must be greater than 3.8, otherwise all code might not be compatible (especially with Python 2).
        - Download MongoDB Compass to the machine and follow the installation guide suitable for your operating system. After successful installation, open MongoDB Compass and check whether the URI is mongodb://localhost:27017 or not, if not adjust it accordingly.

      2. Step 2: Set up the database 🗃️ 🔗
        - Open the terminal and run the command `mongod` to start the MongoDB server.
        - Open MongoDB Compass, click 'connect' to connect to the database.
        - Create a collection named 'mates' and a document named 'user'. Then import the content in the 'user.json' file to complete the database.

      3. Step 3: Connect to the backend 🧑‍💻 🔌
        - After running the 'env.py' file, make sure that all the libraries/packages have been successfully installed, otherwise an error will occur (you can check the ibraries listed in the 'env.py' file). If installed successfully, you will see the message 'ALL ARE DONE. YOU CAN NOW START YOUR SERVER' on the terminal.
        - Open the terminal at the server folder, run the command `flask run` and wait a few seconds to connect.
        - Note: You have to ensure that only one flask application is running because if there are two or more, the localhost address will be different, affecting the client's request sending. The correct address should be 'localhost:5000'.

      4. Step 4: Connect to the frontend 🌐 🖥️
        - After running the command `npm install`, make sure that all the libraries/packages have been successfully installed, otherwise an error will occur (you can check the libraries listed in the 'package.json' file).
        - Open the terminal at the client folder, run the command `npm start` and wait a few seconds to connect. When the connection is successful, the web page will be displayed automatically at localhost 3000. If not, you can manually enter the url in the browser: 'localhost:3000'.

## 🔨 Tools I used

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/<username>/<repository>/blob/main/<file>.ipynb)

[![MongoDB Compass](https://img.shields.io/badge/MongoDB-Compass-green)](https://www.mongodb.com/products/compass)

[![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-007ACC?logo=visual-studio-code)](https://code.visualstudio.com/)

