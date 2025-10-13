// Import images
import post1 from "./post1.jpg";
import post2 from "./post2.jpg";
import post3 from"./post3.jpg";
import post4 from "./post4.jpg";
import post5 from "./post5.jpg";
import post6 from "./post6.jpg";
import post7 from "./post7.jpg";
import post8 from "./post8.jpg";
import post9 from "./post9.jpg";
import post10 from "./post8.jpg";
import post11 from "./post11.jpg";
import post12 from "./post12.jpg";
import post13 from "./post13.jpg";
import post14 from "./post14.jpg";
import post15 from "./post15.jpg";
import post16 from "./post16.jpg";
import post17 from "./post17.jpg";
import post18 from "./post18.jpg";
import post19 from"./post19.jpg";
import post20 from "./post20.jpg";

export const posts = [
    {
      id: 1,
      image: post1,
      title: "Sunset Bliss",
      createdBy: { name: "Aarav Sharma", profileImage: "https://randomuser.me/api/portraits/men/1.jpg" },
      mood: "Peaceful",
      category: "Landscape",
      description: "Golden hues of the sunset blending with the calm ocean.",
      buyLink: "https://example.com/post1",
      likes: 120,
      comments: [
        { user: "Riya", text: "Wow! This feels so calming 🌅" },
        { user: "Kabir", text: "Amazing color blend!" },
        { user: "sk", text: "Amazing color blend wowww!" }
      ]
    },
    {
      id: 2,
      image: post2,
      title: "Mountain Serenity",
      createdBy: { name: "Riya Kapoor", profileImage: "https://randomuser.me/api/portraits/women/2.jpg" },
      mood: "Calm",
      category: "Nature",
      description: "Snow-capped mountains with soft sunlight and clouds.",
      buyLink: "https://example.com/post2",
      likes: 89,
      comments: [
        { user: "Neha", text: "Reminds me of Manali trip ❄️" },
        { user: "Arjun", text: "Beautiful shot!" }
      ]
    },
    {
      id: 3,
      image: post3,
      title: "Abstract Dreams",
      createdBy: { name: "Kabir Verma", profileImage: "https://randomuser.me/api/portraits/men/3.jpg" },
      mood: "Dreamy",
      category: "Abstract",
      description: "Colorful abstract shapes representing imagination.",
      buyLink: "https://example.com/post3",
      likes: 145,
      comments: [
        { user: "Meera", text: "Love this abstract vibe 🎨" }
      ]
    },
    {
      id: 4,
      image: post4,
      title: "City Lights",
      createdBy: { name: "Neha Joshi", profileImage: "https://randomuser.me/api/portraits/women/4.jpg" },
      mood: "Energetic",
      category: "Urban",
      description: "A lively cityscape glowing with neon lights.",
      buyLink: "https://example.com/post4",
      likes: 200,
      comments: [
        { user: "Ishaan", text: "Feels like cyberpunk 🔥" },
        { user: "Simran", text: "Love the glow ✨" }
      ]
    },
    {
      id: 5,
      image: post5,
      title: "Ocean Wave",
      createdBy: { name: "Ishaan Mehta", profileImage: "https://randomuser.me/api/portraits/men/5.jpg" },
      mood: "Refreshing",
      category: "Seascape",
      description: "Mighty waves crashing against the rocks at dawn.",
      buyLink: "https://example.com/post5",
      likes: 78,
      comments: [
        { user: "Aditi", text: "Ocean vibes 🌊" }
      ]
    },
    {
      id: 6,
      image: post6,
      title: "Mystic Forest",
      createdBy: { name: "Meera Singh", profileImage: "https://randomuser.me/api/portraits/women/6.jpg" },
      mood: "Mysterious",
      category: "Nature",
      description: "A foggy forest trail that feels otherworldly.",
      buyLink: "https://example.com/post6",
      likes: 96,
      comments: [
        { user: "Raghav", text: "Scary but beautiful!" }
      ]
    },
    {
      id: 7,
      image: post7,
      title: "Lotus Peace",
      createdBy: { name: "Dev Sharma", profileImage: "https://randomuser.me/api/portraits/men/7.jpg" },
      mood: "Spiritual",
      category: "Floral",
      description: "A lotus blooming gracefully in calm water.",
      buyLink: "https://example.com/post7",
      likes: 134,
      comments: [
        { user: "Simran", text: "Symbol of purity 🌸" }
      ]
    },
    {
      id: 8,
      image: post8,
      title: "Desert Mirage",
      createdBy: { name: "Aditi Chauhan", profileImage: "https://randomuser.me/api/portraits/women/8.jpg" },
      mood: "Lonely",
      category: "Landscape",
      description: "A vast desert with golden sands and a mirage illusion.",
      buyLink: "https://example.com/post8",
      likes: 52,
      comments: [
        { user: "Tanvi", text: "Feels so empty but aesthetic ✨" }
      ]
    },
    {
      id: 9,
      image: post9,
      title: "Vintage Memories",
      createdBy: { name: "Raghav Malhotra", profileImage: "https://randomuser.me/api/portraits/men/9.jpg" },
      mood: "Nostalgic",
      category: "Portrait",
      description: "A vintage-style painting reminding of old times.",
      buyLink: "https://example.com/post9",
      likes: 175,
      comments: [
        { user: "Krishna", text: "So retro 💖" }
      ]
    },
    {
      id: 10,
      image: post10,
      title: "Cosmic Flow",
      createdBy: { name: "Simran Kaur", profileImage: "https://randomuser.me/api/portraits/women/10.jpg" },
      mood: "Ethereal",
      category: "Abstract",
      description: "Swirling galaxies and cosmic energies in colors.",
      buyLink: "https://example.com/post10",
      likes: 210,
      comments: [
        { user: "Manav", text: "Outer space vibes 🚀" }
      ]
    },
    {
      id: 21,
      image: post1,
      title: "Sunset Bliss",
      createdBy: { name: "Aarav Sharma", profileImage: "https://randomuser.me/api/portraits/men/1.jpg" },
      mood: "Peaceful",
      category: "Landscape",
      description: "Golden hues of the sunset blending with the calm ocean.",
      buyLink: "https://example.com/post1",
      likes: 120,
      comments: [
        { user: "Riya", text: "Wow! This feels so calming 🌅" },
        { user: "Kabir", text: "Amazing color blend!" }
      ]
    },
    {
      id: 22,
      image: post2,
      title: "Mountain Serenity",
      createdBy: { name: "Riya Kapoor", profileImage: "https://randomuser.me/api/portraits/women/2.jpg" },
      mood: "Calm",
      category: "Nature",
      description: "Snow-capped mountains with soft sunlight and clouds.",
      buyLink: "https://example.com/post2",
      likes: 89,
      comments: [
        { user: "Neha", text: "Reminds me of Manali trip ❄️" },
        { user: "Arjun", text: "Beautiful shot!" }
      ]
    },
    {
      id: 23,
      image: post3,
      title: "Abstract Dreams",
      createdBy: { name: "Kabir Verma", profileImage: "https://randomuser.me/api/portraits/men/3.jpg" },
      mood: "Dreamy",
      category: "Abstract",
      description: "Colorful abstract shapes representing imagination.",
      buyLink: "https://example.com/post3",
      likes: 145,
      comments: [
        { user: "Meera", text: "Love this abstract vibe 🎨" }
      ]
    },
    {
      id: 24,
      image: post4,
      title: "City Lights",
      createdBy: { name: "Neha Joshi", profileImage: "https://randomuser.me/api/portraits/women/4.jpg" },
      mood: "Energetic",
      category: "Urban",
      description: "A lively cityscape glowing with neon lights.",
      buyLink: "https://example.com/post4",
      likes: 200,
      comments: [
        { user: "Ishaan", text: "Feels like cyberpunk 🔥" },
        { user: "Simran", text: "Love the glow ✨" }
      ]
    },
    {
      id: 25,
      image: post5,
      title: "Ocean Wave",
      createdBy: { name: "Ishaan Mehta", profileImage: "https://randomuser.me/api/portraits/men/5.jpg" },
      mood: "Refreshing",
      category: "Seascape",
      description: "Mighty waves crashing against the rocks at dawn.",
      buyLink: "https://example.com/post5",
      likes: 78,
      comments: [
        { user: "Aditi", text: "Ocean vibes 🌊" }
      ]
    },
    {
      id: 26,
      image: post6,
      title: "Mystic Forest",
      createdBy: { name: "Meera Singh", profileImage: "https://randomuser.me/api/portraits/women/6.jpg" },
      mood: "Mysterious",
      category: "Nature",
      description: "A foggy forest trail that feels otherworldly.",
      buyLink: "https://example.com/post6",
      likes: 96,
      comments: [
        { user: "Raghav", text: "Scary but beautiful!" }
      ]
    },
    {
      id: 27,
      image: post7,
      title: "Lotus Peace",
      createdBy: { name: "Dev Sharma", profileImage: "https://randomuser.me/api/portraits/men/7.jpg" },
      mood: "Spiritual",
      category: "Floral",
      description: "A lotus blooming gracefully in calm water.",
      buyLink: "https://example.com/post7",
      likes: 134,
      comments: [
        { user: "Simran", text: "Symbol of purity 🌸" }
      ]
    },
    {
      id: 28,
      image: post8,
      title: "Desert Mirage",
      createdBy: { name: "Aditi Chauhan", profileImage: "https://randomuser.me/api/portraits/women/8.jpg" },
      mood: "Lonely",
      category: "Landscape",
      description: "A vast desert with golden sands and a mirage illusion.",
      buyLink: "https://example.com/post8",
      likes: 52,
      comments: [
        { user: "Tanvi", text: "Feels so empty but aesthetic ✨" }
      ]
    },
    {
      id: 29,
      image: post9,
      title: "Vintage Memories",
      createdBy: { name: "Raghav Malhotra", profileImage: "https://randomuser.me/api/portraits/men/9.jpg" },
      mood: "Nostalgic",
      category: "Portrait",
      description: "A vintage-style painting reminding of old times.",
      buyLink: "https://example.com/post9",
      likes: 175,
      comments: [
        { user: "Krishna", text: "So retro 💖" }
      ]
    },
    {
      id: 30,
      image: post10,
      title: "Cosmic Flow",
      createdBy: { name: "Simran Kaur", profileImage: "https://randomuser.me/api/portraits/women/10.jpg" },
      mood: "Ethereal",
      category: "Abstract",
      description: "Swirling galaxies and cosmic energies in colors.",
      buyLink: "https://example.com/post10",
      likes: 210,
      comments: [
        { user: "Manav", text: "Outer space vibes 🚀" }
      ]
    },
    {
      id: 11,
      image: post11,
      title: "Street Melody",
      createdBy: { name: "Vikram Desai", profileImage: "https://randomuser.me/api/portraits/men/11.jpg" },
      mood: "Cheerful",
      category: "Urban",
      description: "A street musician playing violin under soft lights.",
      buyLink: "https://example.com/post11",
      likes: 140,
      comments: [
        { user: "Priya", text: "Feels like Europe 🎶" }
      ]
    },
    {
      id: 12,
      image: post12,
      title: "Winter Silence",
      createdBy: { name: "Priya Nair", profileImage: "https://randomuser.me/api/portraits/women/12.jpg" },
      mood: "Calm",
      category: "Nature",
      description: "Snowfall over pine trees creating a silent vibe.",
      buyLink: "https://example.com/post12",
      likes: 80,
      comments: [
        { user: "Harshit", text: "So peaceful ❄️" }
      ]
    },
    
    {
      id: 13,
      image: post13,
      title: "Festival Glow",
      createdBy: { name: "Arjun Rao", profileImage: "https://randomuser.me/api/portraits/men/13.jpg" },
      mood: "Joyful",
      category: "Culture",
      description: "Lanterns and lights celebrating festive vibes.",
      buyLink: "https://example.com/post13",
      likes: 220,
      comments: [
        { user: "Tanvi", text: "Diwali vibes 🪔" }
      ]
    },
    {
      id: 14,
      image: post14,
      title: "Morning Dew",
      createdBy: { name: "Kavya Menon", profileImage: "https://randomuser.me/api/portraits/women/14.jpg" },
      mood: "Fresh",
      category: "Floral",
      description: "Close-up of flowers with drops of morning dew.",
      buyLink: "https://example.com/post14",
      likes: 95,
      comments: [
        { user: "Shreya", text: "Refreshing 🌺" }
      ]
    },
    {
      id: 15,
      image: post15,
      title: "Rural Path",
      createdBy: { name: "Harshit Yadav", profileImage: "https://randomuser.me/api/portraits/men/15.jpg" },
      mood: "Simple",
      category: "Landscape",
      description: "A peaceful village path surrounded by fields.",
      buyLink: "https://example.com/post15",
      likes: 60,
      comments: [
        { user: "Vikram", text: "My village vibes 🚜" }
      ]
    },
    {
      id: 16,
      image: post16,
      title: "Golden Hour",
      createdBy: { name: "Tanvi Sharma", profileImage: "https://randomuser.me/api/portraits/women/16.jpg" },
      mood: "Warm",
      likes:0,
      category: "Portrait",
      description: "Soft sunlight"
    },
    
]  
 export const notifications = [
  {
    id: 1,
    user: "Aman",
    type: "like",
    postImage: post11, // 🔹 image या video thumbnail
    time: "2h ago",
  },
  {
    id: 2,
    user: "Priya",
    type: "comment",
    text: "Nice work!",
    postImage: post10,
    time: "5h ago",
  },
  {
    id: 3,
    user: "Rohan",
    type: "like",
    postImage: post1, // video thumbnail
    time: "1d ago"
  },
  {
    id: 4,
    user: "Aman",
    type: "like",
    postImage: post11, // 🔹 image या video thumbnail
    time: "2h ago",
  },
  {
    id: 5,
    user: "Priya",
    type: "comment",
    text: "Nice work!",
    postImage: post10,
    time: "5h ago",
  },
  {
    id: 6,
    user: "Rohan",
    type: "like",
    postImage: post1, // video thumbnail
    time: "1d ago"
  },
  {
    id: 7,
    user: "Aman",
    type: "like",
    postImage: post11, // 🔹 image या video thumbnail
    time: "2h ago",
  },
  {
    id: 8,
    user: "Priya",
    type: "comment",
    text: "Nice work!",
    postImage: post10,
    time: "5h ago",
  },
  {
    id: 9,
    user: "Rohan",
    type: "like",
    postImage: post1, // video thumbnail
    time: "1d ago"
  },
];