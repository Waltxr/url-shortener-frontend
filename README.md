## URL Shortener
Submit a url to receive back a url of the shortest possible length that redirects you to the original url.

Project is live at:

<http://shortenurll.s3-website-us-east-1.amazonaws.com/>

Please note this project is deployed to heroku and there's a 30 second wait time for the server to wake up.

[Demo](https://www.youtube.com/watch?v=xfF5XmhlwII&feature=youtu.be)

## Inspiration

The goal was to make a URL shortener similar to [Bitly](https://bitly.com/). I aimed to demonstrate my understanding of how to create an application with a backend API using Rails and a frontend using React.

## Features
1. Shortens a url
2. Displays a table of the top 100 most accessed urls

## Installation
1. Make sure you have the backend up and running on your machine which you can find here: https://github.com/Waltxr/url-shortener-backend
2. Run `npm install && npm start` to open and view the frontend in a browser.

## The Code

URL Shortener was made with a rails API backend and React/Redux frontend. Some highlights:

1. A bijective method was made in the url model to map each url ID to a slug using only ASCII characters.

2. A custom validation was made in the backend that uses regex to check if a string is a valid url.

3. There is a bot that was created to populate the database with URLs from a public API.

4. API Routes:
  - api_v1_shortener POST   /api/v1/shortener(.:format)  api/v1/urls#create
  - api_v1 GET              /api/v1/urls/:slug(.:format) api/v1/urls#show
  - api_v1_top_urls GET     /api/v1/top-urls(.:format)   api/v1/urls#index

## Authors
Adam Walter - @Waltxr

## License
MIT Copyright 2018
