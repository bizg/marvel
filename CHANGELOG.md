
# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).
 
## [Unreleased]
 
Here we write upgrading notes for brands. It's a team effort to make them as
straightforward as possible.
 
### Added
- Added the structure of project
- Added the module home, this contain the cars of characters and the favorites comics
- Added the functionality of add random favorites
- Added the modal component
- Added the functionality of modal component
- Added the implementation of modal component in the home module
  - Added the implementation in card.component
  - Added the implementation in favorite.component
- Added the http.service for control the options in the petitions http
- Added the implementation of http.service in the each one of the services
- Added the sort by name (asc, desc)
- Added limit of registers of characters to 10
- Added the funtionality of searcher, this functionality only makes macth when the search is == to the name that is searching
  because the api haven't available the searcher for some letters
- Added the component of alerts
- Added the funtionality of "add favorites"
- Added validation on whether a favorite is already in the list, so you can't add it.
- Added implementation "add favorites" in the module home in favorites
- Added implementation "add favorites" in the module favorite
- Added list of comic per character
 
### Changed
- Changed in the menu the item favorites, now it's acceded since home in the option "View all"
- Chanded implementation of "random favorite", now you can add in anytime some random rafovorite
 
### Fixed
- Deleted the files of favorite.service that doesn't use in anyway
- Added the corrections of the http.services when any service sended a param crashed
