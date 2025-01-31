# MongoDB Schema Design for Music Streaming Platform

This document outlines the requirements, schema structure, and views for a MongoDB-based music streaming platform. The focus is on optimizing the schema for read-heavy workloads and ensuring scalability for user-specific data such as play history, likes, and playlists.

## Requirements

### Functional Requirements
1. **User Management**:
    - Store user profiles, including name, email, and preferences.
    - Maintain user-specific playlists, liked songs, and play history.

2. **Song Management**:
    - Store metadata for songs, including title, artist, duration, genre, and tags.
    - Track play counts and the last played timestamp for each song.

3. **Playback History**:
    - Keep a chronological record of all songs played by a user.
    - Provide quick access to the most recently played songs.

4. **Search and Discovery**:
    - Allow searching for songs by genre, tag, or title.
    - Retrieve songs based on popularity or user preferences.

5. **Playlists**:
    - Support user-created playlists.
    - Enable sharing playlists across users if required.


## Schema Design

### Users Collection
Stores user-specific data such as profiles, playlists, likes, and recent plays.

```json
{
  "_id": "userId",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "likes": ["songId1", "songId2"],
  "playlists": [
    {
      "playlist_id": "playlistId1",
      "name": "Chill Vibes",
      "song_ids": ["songId3", "songId4"]
    }
  ],
  "last_played": [
    {"song_id": "songId5", "timestamp": "2025-01-15T12:00:00Z"},
    {"song_id": "songId2", "timestamp": "2025-01-14T18:30:00Z"}
  ]
}
```

### Songs Collection
Contains metadata and statistics for songs.
```json
{
  "_id": "songId",
  "title": "Song Title",
  "artist": "Artist Name",
  "duration": 210,
  "genre": "Pop",
  "tags": ["upbeat", "party"],
  "play_count": 5000,
  "last_played": "2025-01-15T12:34:56Z"
}
```

### Playlists Collection
Optional collection for shared playlists or user-generated playlists that grow significantly.
```json
{
  "_id": "playlistId",
  "name": "Top Hits",
  "user_id": "userId",
  "song_ids": ["songId1", "songId3", "songId5"],
  "created_at": "2025-01-10T10:00:00Z"
}
```
### Listening History Collection
Stores detailed playback history for scalability and analytics.
```json
{
  "_id": "ObjectId",
  "user_id": "userId",
  "song_id": "songId",
  "played_at": "2025-01-15T12:34:56Z"
}
```
### Views and Queries
#### User Views
1. User Profile:
Load user details, liked songs, playlists, and last played songs. 
Query:
```javascript
db.users.find({ _id: "userId" });
```
2. Recently Played Songs:
Fetch the last_played array for the user.
```javascript
db.users.find({ _id: "userId" }, { last_played: 1 });
```

3. Liked Songs:
Retrieve the list of liked songs for a user.
Query:
```javascript
const user = db.users.findOne({ _id: "userId" }, { likes: 1 });
const likedSongIds = user.likes;
db.songs.find({ _id: { $in: likedSongIds } });
```

#### Song Views
Search by Genre:

1. Retrieve all songs of a specific genre.
        
```javascript
db.songs.find({ genre: "Pop" });
```

2. Search by Tags or Title:

Search songs by tags or partial matches in the title.
Query:
```javascript
db.songs.find({ tags: "party" });
db.songs.find({ title: { $regex: "Love", $options: "i" } });
```
Song Details:

3. Fetch details for a specific song.
Query:
```javascript
db.songs.find({ _id: "songId" });
```

### Playback History Views
1. Full Playback History:

Retrieve all songs played by a user, sorted by the most recent timestamp.
Query:
```javascript
db.listening_history.find({ user_id: "userId" }).sort({ played_at: -1 });
```
2. Analytics:

Query the listening_history collection for user-specific or global analytics, such as most played songs.

### Indexing Strategy
1. Users Collection: Index on _id for primary lookups.
2. Songs Collection: Index on genre, tags, and title for efficient search.
3. Listening History Collection: Compound index on user_id and played_at for fast history retrieval.

### Notes
- Ensure schema flexibility for evolving requirements.
- Monitor and optimize performance with MongoDB Atlas tools like Performance Advisor.
- Plan for potential sharding on collections like listening_history as the dataset grows.
