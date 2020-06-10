# PC Game Finder API


Link to live app: https://pc-game-finder.ozamudio51.now.sh/

![Pc Game Finder screenshot](pcGameFinderScreenshot.PNG)

An application that finds pc games for you based off of the genre that is chosen. 
  
### Back-End
* PostgreSQL
* Express
* Node
* Knex

### Testing
* Mocha
* Chai
* Chai-http
* Jest

## API Overview

```text
/api
.
├──── GET
        ├── /genre
                ├── /genre/first-person-shooter
                ├── /genre/survival-horror
                ├── /genre/action-rpg
                ├── /genre/third-person-shooter
                ├── /genre/puzzle
                ├── /genre/stealth-based
                ├── /genre/rts
```
                
### GET `/api/genres/`

```js
// res.body
{
  [
   id: game.id,
  game_cover: game.game_cover,
  game_genre: game.game_genre,
  game_name: game.game_name,
  game_desc: game.game_desc,
  game_link: game.game_link,
  ]
}
```
