# Database Schema Documentation

## Collection: `profiles`

### Schema
```json
{
  "_id": ObjectId,
  "name": String,          // Full name of the profile
  "email": String,         // Unique email address
  "education": String,           // Short description or bio
  "project":String,
  "work":String,
  "link":[String],
  "skills": [String],      // List of skills
  "createdAt": Date,       // Record creation date
  "updatedAt": Date        // Record last update date
}

Indexes

ownerId_1 → { ownerId: 1 } (For fast lookup by profile)

status_1 → { status: 1 }

tags_1 → { tags: 1 }