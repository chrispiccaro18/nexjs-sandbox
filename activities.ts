
// {
//   title: string; // Name of the activity
//   materials: string[]; // List of materials needed
//   ageRange:
//     | 'Infant'
//     | 'Toddler'
//     | 'Preschooler'
//     | 'Kindergarten'
//     | 'School Age'; // Age group
//   instructions: string; // Detailed activity instructions
//   tags?: string[]; // Optional tags for categorization
//   estimatedTime: string; // Estimated time in minutes
// }

export default [
  {
    title: "Color Sorting Game",
    materials: ["Colored paper", "Plastic bowls"],
    ageRange: "Toddler",
    instructions: "Place colored bowls on a table and have your toddler sort matching colored paper into the corresponding bowl.",
    tags: ["Sorting", "Colors", "Fine Motor Skills"],
    estimatedTime: "10 mins",
  },
  {
    title: "Finger Painting Fun",
    materials: ["Non-toxic finger paint", "Paper"],
    ageRange: "Preschooler",
    instructions: "Provide paper and finger paints, encouraging kids to create artwork with their fingers.",
    tags: ["Art", "Creativity"],
    estimatedTime: "15 mins",
  },
  {
    title: "Bubble Wrap Stomp",
    materials: ["Bubble wrap"],
    ageRange: "Toddler",
    instructions: "Lay bubble wrap on the floor and let your toddler stomp to pop the bubbles.",
    tags: ["Sensory", "Gross Motor Skills"],
    estimatedTime: "5 mins",
  },
  {
    title: "Storytime Adventure",
    materials: ["Storybook"],
    ageRange: "Infant",
    instructions: "Read a short story aloud, using animated voices and pointing to pictures.",
    tags: ["Literacy", "Bonding"],
    estimatedTime: "10 mins",
  },
  {
    title: "Build a Blanket Fort",
    materials: ["Blankets", "Cushions", "Chairs"],
    ageRange: "School Age",
    instructions: "Help your child build a fort using chairs, cushions, and blankets for a fun play area.",
    tags: ["Imagination", "Indoor Fun"],
    estimatedTime: "20 mins",
  },
  {
    title: "Treasure Hunt",
    materials: ["Small toys", "Paper clues"],
    ageRange: "School Age",
    instructions: "Hide toys around the house and create clues for your child to find them.",
    tags: ["Problem-Solving", "Adventure"],
    estimatedTime: "30 mins",
  },
  {
    title: "Shape Puzzle",
    materials: ["Cardboard", "Markers"],
    ageRange: "Preschooler",
    instructions: "Draw shapes on cardboard, cut them out, and have the child match them back to their outlines.",
    tags: ["Shapes", "Puzzles"],
    estimatedTime: "15 mins",
  },
  {
    title: "Nature Walk Bingo",
    materials: ["Paper", "Markers"],
    ageRange: "Kindergarten",
    instructions: "Create a bingo card with items like leaves, flowers, or rocks. Take a walk and check off what they find.",
    tags: ["Outdoor", "Observation"],
    estimatedTime: "30 mins",
  },
  {
    title: "Dance Party",
    materials: ["Music player"],
    ageRange: "Infant",
    instructions: "Play music and move along with your baby to encourage sensory and motor development.",
    tags: ["Music", "Bonding"],
    estimatedTime: "10 mins",
  },
  {
    title: "Alphabet Hunt",
    materials: ["Plastic letters", "Basket"],
    ageRange: "Preschooler",
    instructions: "Hide plastic letters around the room and ask your child to find them and name the letters.",
    tags: ["Letters", "Movement"],
    estimatedTime: "20 mins",
  },
  {
    title: "Playdough Creations",
    materials: ["Playdough", "Plastic utensils"],
    ageRange: "Kindergarten",
    instructions: "Use playdough and utensils to create shapes, animals, or pretend food.",
    tags: ["Creativity", "Sensory"],
    estimatedTime: "15 mins",
  },
  {
    title: "Cardboard Car Ramp",
    materials: ["Cardboard box", "Toy cars"],
    ageRange: "Toddler",
    instructions: "Make a ramp with a cardboard box and roll toy cars down it.",
    tags: ["Engineering", "Fun"],
    estimatedTime: "10 mins",
  },
  {
    title: "DIY Musical Instruments",
    materials: ["Empty cans", "Rubber bands"],
    ageRange: "School Age",
    instructions: "Create simple instruments using cans and rubber bands to make different sounds.",
    tags: ["Music", "STEM"],
    estimatedTime: "15 mins",
  },
  {
    title: "Counting Jars",
    materials: ["Small jars", "Buttons"],
    ageRange: "Preschooler",
    instructions: "Fill jars with different numbers of buttons and practice counting with your child.",
    tags: ["Math", "Fine Motor Skills"],
    estimatedTime: "15 mins",
  },
  {
    title: "Animal Yoga",
    materials: ["Yoga mat"],
    ageRange: "Kindergarten",
    instructions: "Teach simple yoga poses and name them after animals, like 'cat' or 'downward dog.'",
    tags: ["Movement", "Mindfulness"],
    estimatedTime: "15 mins",
  },
  {
    title: "Ice Cube Painting",
    materials: ["Ice cubes", "Food coloring", "Paper"],
    ageRange: "Toddler",
    instructions: "Color ice cubes with food coloring and let the child paint on paper as they melt.",
    tags: ["Art", "Sensory"],
    estimatedTime: "10 mins",
  },
  {
    title: "Memory Match",
    materials: ["Cards with pictures"],
    ageRange: "Kindergarten",
    instructions: "Lay cards face down and take turns flipping two at a time to find a match.",
    tags: ["Cognitive Skills", "Games"],
    estimatedTime: "20 mins",
  },
  {
    title: "Shadow Tracing",
    materials: ["Paper", "Pencils"],
    ageRange: "School Age",
    instructions: "Place objects under light to cast shadows and trace their outlines on paper.",
    tags: ["Art", "Science"],
    estimatedTime: "15 mins",
  },
  {
    title: "Sorting Shapes and Colors",
    materials: ["Cut-out shapes", "Colored paper"],
    ageRange: "Toddler",
    instructions: "Sort shapes by type and color into matching groups.",
    tags: ["Shapes", "Colors"],
    estimatedTime: "10 mins",
  },
  {
    title: "DIY Bird Feeder",
    materials: ["Pinecones", "Peanut butter", "Birdseed"],
    ageRange: "Kindergarten",
    instructions: "Spread peanut butter on pinecones, roll them in birdseed, and hang them outside for birds.",
    tags: ["Outdoor", "Craft"],
    estimatedTime: "20 mins",
  }
];

export const top5 = [
  { materials: 'Paper' },
  { estimatedTime: '15 mins' },
  { ageRange: 'Toddler' },
  { ageRange: 'Kindergarten' },
  { tags: 'Art' }
];