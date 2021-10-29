
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
 
### Changed
- Changed in the menu the item favorites, now it's acceded since home in the option "View all"
 
### Fixed
- Deleted the files of favorite.service that doesn't use in anyway
- Added the corrections of the http.services when any service sended a param crashed
