// The three photo booth looks - see CONFIG.photoBoothMode below.
export type CameraMode = "vintage" | "modern" | "polaroid";

/* ============================================================
   CONFIG - edit these values to make the badge your own!
   ============================================================ */
export const CONFIG = {
  // 2–4 hex colors. The background will drift smoothly between them.
  // Visit https://coolors.co/palettes/trending for colors!
  // Colors must start with #
  gradientColors: ["#b84387", "#1f169c", "#174072"],


  // Your name (or nickname) as a plain string. Shows on the badge and sets
  // the initials in the avatar circle.
  name: "khaled algrooni",

  // One short sentence, shown under "Fun fact" on the badge. Keep it to
  // a single line - long text will wrap and may get cramped.
  funFact: "I enjoy learning  cloud computing",

  // true if you're running/deploying this from a cloud VM, false if it's
  // just running on your own laptop. Only changes the "My Laptop 💻" vs
  // "Alibaba Cloud ☁️" text on the badge - purely cosmetic.
  isOnCloud: true,
  
  // true/false. Lets students flip the card and take a photo with their
  // front camera. Turn off if the device/browser running this has no
  // camera, or you'd rather ship the badge without it.
  enablePhotoBooth: true,

  // The photo booth's look, baked into every shot you take. Only matters
  // if enablePhotoBooth is true above. One of these exact strings:
  //   "vintage"  - black & white film, light leaks, dust and scratches
  //   "modern"   - sharp and punchy, medium-high contrast
  //   "polaroid" - soft focus, warm and faded, like an instant camera
  photoBoothMode: "polaroid" as CameraMode,

  // The movie/game/show/anime shown in the poster frame on the badge.
favorite: {
  category: "Movie",
  title: "The Odysseey",
  posterUrl: "https://upload.wikimedia.org/wikipedia/en/9/90/The_Odyssey_%282026_film%29_poster.jpg",
},

};
