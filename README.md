# 🎵 Music Player Web Application

A modern, responsive web-based music player built with React, Redux, and Tailwind CSS. This application provides a seamless audio experience with playlist management, volume controls, and an intuitive user interface.

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Components Overview](#components-overview)
- [State Management](#state-management)
- [Responsive Design](#responsive-design)
- [Browser Compatibility](#browser-compatibility)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Core Functionality
- **🎵 Audio Playback**: Full audio control using HTML5 audio element
- **⏯️ Play/Pause Controls**: Intuitive play and pause functionality
- **⏭️ Track Navigation**: Next and previous track controls
- **🔊 Volume Control**: Vertical volume slider with mute/unmute toggle
- **📊 Progress Bar**: Interactive seek bar to navigate through tracks
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices

### Playlist Management
- **📝 Dynamic Playlists**: Add and remove songs from custom playlists
- **❤️ Liked Songs**: Mark favorite tracks with a dedicated liked songs collection
- **🎼 Song Library**: Browse through the complete music collection
- **🔍 Search Functionality**: Find songs by title or artist name

### User Interface
- **🌙 Dark Theme**: Modern dark interface for comfortable viewing
- **🎨 Album Art Display**: Visual representation of each track
- **📱 Mobile-First Design**: Optimized mobile experience with collapsible views
- **🎯 Intuitive Navigation**: Easy-to-use navigation between different sections

### Advanced Features
- **💾 Local Storage**: Persistent playlist and liked songs data
- **🎵 Now Playing**: Visual indication of currently playing track
- **🔄 State Management**: Redux-powered state management for seamless experience
- **⚡ Performance Optimized**: Efficient rendering and smooth animations

## 🛠️ Technologies Used

### Frontend Framework
- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing for navigation
- **React Context API**: Global state management for audio controls

### State Management
- **Redux Toolkit**: Simplified Redux for playlist and liked songs management
- **React Redux**: React bindings for Redux

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **React Icons**: Comprehensive icon library
- **Custom CSS**: Additional styling for specific components

### Audio & Media
- **HTML5 Audio API**: Native audio playback capabilities
- **Web Audio API**: Enhanced audio control and manipulation

## 📁 Project Structure

\`\`\`
music-player/
├── public/
│ 
├── src/
│   └── assets/
│   │   ├── images/
│   │   └── audio/
│   ├── components/
│   │   ├── Card.jsx              # Song card component
│   │   ├── Player.jsx            # Bottom player component
│   │   ├── VolumeControl.jsx     # Volume control component
│   │   └── Nav.jsx               # Navigation component
│   ├── pages/
│   │   ├── Home.jsx              # Main player page
│   │   ├── Search.jsx            # Search functionality
│   │   ├── Playlist.jsx          # Playlist management
│   │   └── Liked.jsx             # Liked songs page
│   ├── context/
│   │   └── UserContext.jsx       # Audio context provider
│   ├── redux/
│   │   ├── store.js              # Redux store configuration
│   │   ├── PlaylistSlice.js      # Playlist state management
│   │   ├── LikedSlice.js         # Liked songs state management
│   │   └── localstorage.js       # Local storage utilities
│   ├── index.css                 # Global styles and Tailwind config
│   ├── songs.js                  # Song data configuration
│   └── App.jsx                  
│   └── main.jsx                  # Main application component
├── index.html
├── README.md
└── package.json

\`\`\`

## 🚀 Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/music-player.git
   cd music-player
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Configure audio files**
   - Add your audio files to the `src/assets/audio/` directory
   - Update the `songs.js` file with your song information
   - Ensure album art images are in `src/assets/images/`

4. **Start the development server**
   \`\`\`bash
   npm start
   # or
   yarn start
   \`\`\`

5. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The music player should load with your configured songs

## 📖 Usage

### Basic Controls

#### Playing Music
1. **Start Playback**: Click the play button in the center of the now playing section
2. **Pause Music**: Click the pause button to stop playback
3. **Skip Tracks**: Use the previous/next buttons to navigate between songs
4. **Seek**: Click anywhere on the progress bar to jump to that position

#### Volume Control
1. **Adjust Volume**: Use the vertical slider on the left side of the album art
2. **Mute/Unmute**: Click the speaker icon to toggle mute
3. **Volume Percentage**: View current volume level at the top of the control

#### Navigation
1. **Home**: Main player interface with now playing and song list
2. **Search**: Find songs by title or artist name
3. **Playlist**: Manage your custom playlists
4. **Liked**: View and manage your favorite songs

### Playlist Management

#### Adding Songs
1. Navigate to any song in the library
2. Click the playlist add icon (➕) next to the song
3. The song will be added to your custom playlist

#### Removing Songs
1. Go to the Playlist section
2. Click the remove icon (➖) next to any song
3. The song will be removed from your playlist

#### Liked Songs
1. Click the heart icon (🤍) next to any song to like it
2. Liked songs appear in the Liked section
3. Click the filled heart (❤️) to unlike a song

### Mobile Experience
- **Collapsible View**: Use the arrow button to switch between player and song list
- **Touch Controls**: All controls are optimized for touch interaction
- **Responsive Layout**: Interface adapts to different screen sizes

## 🧩 Components Overview

### Core Components

#### `Home.jsx`
- Main player interface
- Album art display with music animation
- Volume control integration
- Progress bar and playback controls
- Song information display

#### `Card.jsx`
- Individual song representation
- Album art thumbnail
- Song title and artist information
- Playlist and like controls
- Play button overlay

#### `Player.jsx`
- Bottom navigation bar
- Global play/pause control
- Navigation links to different sections

#### `VolumeControl.jsx`
- Vertical volume slider
- Volume percentage display
- Mute/unmute toggle
- Responsive positioning

### Page Components

#### `Search.jsx`
- Real-time search functionality
- Filter by song title and artist
- Dynamic results display

#### `Playlist.jsx`
- Custom playlist management
- Add/remove song functionality
- Empty state handling

#### `Liked.jsx`
- Favorite songs collection
- Like/unlike functionality
- Persistent storage

## 🗄️ State Management

### Redux Store Structure

#### Playlist Slice
\`\`\`javascript
{
  playlist: [
    {
      name: "Song Title",
      artist: "Artist Name",
      image: "album-art-url",
      songIndex: 0
    }
  ]
}
\`\`\`

#### Liked Songs Slice
\`\`\`javascript
{
  liked: [
    {
      name: "Song Title",
      artist: "Artist Name", 
      image: "album-art-url",
      songIndex: 0
    }
  ]
}
\`\`\`

### Context API
- **Audio Context**: Manages global audio state
- **Current Song**: Tracks currently playing song
- **Playback State**: Play/pause status
- **Audio Reference**: Direct access to HTML5 audio element

### Local Storage
- **Persistent Data**: Playlists and liked songs survive browser refresh
- **Automatic Sync**: Changes are automatically saved to local storage
- **Error Handling**: Graceful fallback if local storage is unavailable

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px (Single column layout)
- **Tablet**: 768px - 1024px (Adaptive layout)
- **Desktop**: > 1024px (Two-column layout)

### Mobile Features
- Collapsible player/library view
- Touch-optimized controls
- Simplified navigation
- Optimized album art sizing

### Desktop Features
- Side-by-side player and library
- Larger album art display
- Enhanced volume control positioning
- Full navigation visibility

## 🌐 Browser Compatibility

### Supported Browsers
- **Chrome**: 80+ (Recommended)
- **Firefox**: 75+
- **Safari**: 13+
- **Edge**: 80+

### Audio Format Support
- **MP3**: Universal support
- **WAV**: High quality, larger files
- **OGG**: Open source alternative
- **AAC**: Apple ecosystem optimization

### Required Features
- HTML5 Audio API
- CSS Grid and Flexbox
- ES6+ JavaScript features
- Local Storage API

### Bug Reports
- Use the GitHub issue tracker
- Provide detailed reproduction steps
- Include browser and OS information
- Attach screenshots if applicable

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- **React Team**: For the amazing framework
- **Redux Toolkit**: For simplified state management
- **Tailwind CSS**: For rapid UI development
- **React Icons**: For comprehensive icon library
- **Open Source Community**: For inspiration and resources

## 📞 Support

For support, email 16khanmusa@gamil.com .

---

**Built with ❤️ by [Musa khan]**

