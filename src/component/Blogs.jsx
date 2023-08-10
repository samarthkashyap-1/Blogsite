import React from 'react'
import Blog from "./Blog"



function Blogs() {
const blogData = [
  {
    id: 1,
    title: "Exploring the Wonders of Deep Space",
    content:
      "In a galaxy far, far away, beyond the reaches of our imagination, lies a realm of infinite beauty and mystery. Deep space, with its swirling nebulae, blazing stars, and enigmatic black holes, beckons us to venture into the unknown. The universe is a canvas painted with the colors of stardust, where cosmic ballets unfold and galaxies collide. Through the lens of cutting-edge telescopes, we peer into the heart of creation itself, unlocking secrets that have eluded us for eons. Join us on a cosmic odyssey as we unravel the tapestry of the cosmos.",
    writtenDate: "2023-07-15",
    author: "Jane Smith",
    category: "science",
  },
  {
    id: 2,
    title: "The Art of Culinary Masterpieces",
    content:
      "Embark on a gastronomic adventure that tantalizes the senses and delights the palate. From the sizzle of a perfectly seared steak to the delicate artistry of a decadent dessert, the world of culinary excellence knows no bounds. Unearth the stories behind iconic dishes, learn the techniques of culinary maestros, and discover how ingredients dance in harmonious symphonies. Join us as we explore kitchens around the world, where innovation and tradition collide to create culinary masterpieces that leave an indelible mark on our taste buds.",
    writtenDate: "2023-06-28",
    author: "John Doe",
    category: "food",
  },
  {
    id: 3,
    title: "Unveiling the Mysteries of Ancient Civilizations",
    content:
      "Step into the footsteps of history as we journey through the enigmatic ruins of ancient civilizations. From the towering pyramids of Egypt to the hidden cities of the Incas, we delve into the past to uncover forgotten stories and cultural marvels. As we decipher hieroglyphs, examine artifacts, and explore archaeological wonders, the secrets of our ancestors come to life. Join us on a time-traveling expedition to rediscover the marvels that shaped humanity's legacy.",
    writtenDate: "2023-05-10",
    author: "Emily Brown",
    category: "history",
  },
  {
    id: 4,
    title: "Embracing Adventure in the Wilderness",
    content:
      "Venture into the heart of untamed landscapes, where the wilderness beckons with its raw beauty and untold mysteries. From dense rainforests teeming with exotic life to rugged mountain peaks that touch the sky, our journey takes us off the beaten path. We traverse winding trails, cross roaring rivers, and bask in the serenity of untouched nature. Join us in embracing the call of the wild as we forge connections with the natural world and discover our place within it.",
    writtenDate: "2023-04-02",
    author: "Michael Johnson",
    category: "travel",
  },
  {
    id: 5,
    title: "A Journey Through the World of Literature",
    content:
      "Embark on a literary odyssey that transcends time and space, where words become windows to new worlds and emotions take shape through prose and poetry. We dive into the classics that have shaped cultures and unravel the narratives that reflect the human experience. From heartwarming tales of love and friendship to thought-provoking reflections on society, our journey through literature is a passport to empathy and understanding.",
    writtenDate: "2023-03-15",
    author: "Sarah Wilson",
    category: "literature",
  },
  {
    id: 6,
    title: "Capturing Moments: The Art of Photography",
    content:
      "Through the lens of a camera, we freeze fleeting moments in time, immortalizing memories and emotions. Join us on a visual voyage as we explore the world of photography, from the soft focus of portrait photography to the dynamic energy of action shots. We unravel the secrets of composition, lighting, and post-processing, revealing how each click of the shutter captures a unique story. Whether with vintage film or digital pixels, the art of photography unveils the world's beauty in every frame.",
    writtenDate: "2023-02-08",
    author: "Daniel Clark",
    category: "art",
  },
  {
    id: 7,
    title: "Diving into the Depths: Marine Life Exploration",
    content:
      "Plunge beneath the waves into a realm teeming with wonders beyond imagination. Marine life, from the graceful dance of dolphins to the intricate ecosystems of coral reefs, awaits our exploration. As we navigate the ocean's depths, we encounter mysterious creatures that illuminate the depths with bioluminescence and witness the delicate balance that sustains life beneath the surface. Join us on an underwater adventure to unveil the mysteries of the world's oceans.",
    writtenDate: "2023-01-22",
    author: "Alexandra Martinez",
    category: "science",
  },
  {
    id: 8,
    title: "Innovations in Tech: Shaping the Future",
    content:
      "From silicon valleys to laboratories, we traverse the cutting edge of innovation in the ever-evolving world of technology. The digital revolution unfolds before our eyes, with artificial intelligence, blockchain, and virtual reality reshaping industries and societies. We explore the minds of inventors and visionaries, decoding complex algorithms and envisioning the future they are forging. Join us as we demystify the world of tech and uncover the transformative power of innovation.",
    writtenDate: "2022-12-05",
    author: "Christopher Lee",
    category: "technology",
  },
  {
    id: 9,
    title: "The Rhythms of Music Around the World",
    content:
      "Journey across continents and cultures to explore the universal language of music. From the haunting melodies of traditional folk songs to the electrifying beats of modern genres, we traverse diverse sonic landscapes. We uncover the stories behind iconic compositions and the artists who bring them to life. As we celebrate the power of harmonies and rhythms, join us on a melodic adventure that resonates in the hearts of listeners around the globe.",
    writtenDate: "2022-11-18",
    author: "Maria Rodriguez",
    category: "music",
  },
  {
    id: 10,
    title: "Culmination of Art: A Gallery of Imagination",
    content:
      "In the realm of creativity, artists wield brushes like magic wands, transforming blank canvases into portals of emotion and imagination. Join us in exploring the kaleidoscope of artistic expression, from vivid landscapes to abstract masterpieces that defy conventions. We delve into the lives of renowned artists, unraveling their inspirations and the stories that breathe life into their creations. Enter a world where colors collide, lines dance, and art becomes a reflection of the human spirit.",
    writtenDate: "2022-10-03",
    author: "William Turner",
    category: "art",
  },
];


  return (
    <div className="w-3/4 mx-auto mt-32">
      <div>
        <h1 className="text-5xl text-start sm:text-4xl font-bold">Glogs</h1>
        <hr className="border-2 rounded-full mt-5 border-[#B7D893]" />
      </div>
      <div className='grid grid-cols-3 gap-10 sm:p-2 p-5 lg:grid-cols-2 sm:grid-cols-1'>  
      {blogData.map((blog) =>( <Blog content ={ blog}/>))}

      </div>

    </div>
  );
}

export default Blogs
