export interface SkillShareCourse {
    name: string,
    link: string,
    state: 'Not Started' | 'Started' | 'Complete',
    categories?: string[]
}

export class SkillShareCourses {
    public courses: SkillShareCourse[] = [
        {
            name: 'BSL | British Sign Language | The Alphabet',
            link: 'https://www.skillshare.com/classes/BSL-British-Sign-Language-The-Alphabet/1454014598?via=browse-trending-lifestyle-layout-grid',
            state: 'Not Started',
            categories: ['lifestyle', 'language']
        },
        {
            name: 'Everyday Flowers: Simple, Stunning Arrangements for any Occasion',
            link: 'https://www.skillshare.com/classes/Everyday-Flowers-Simple-Stunning-Arrangements-for-Any-Occasion/1849608686?via=browse-trending-lifestyle-layout-grid',
            state: 'Not Started',
            categories: ['floral']
        },
        {
            name: 'Learn Complete Hindi - Bestseller Language Course',
            link: 'https://www.skillshare.com/classes/Learn-Complete-Hindi-Bestseller-Language-Course/1218624719?via=browse-trending-lifestyle-layout-grid',
            state: 'Not Started',
            categories: ['hindi', 'language']
        },
        {
            name: 'How to make french macarons',
            link: 'https://www.skillshare.com/classes/How-to-Make-French-Macarons/1333511225?via=browse-trending-lifestyle-layout-grid',
            state: 'Not Started',
            categories: ['food', 'baking']
        },
        {
            name: 'Meal Planning Coach: Create Meal Plans, Coach Others & Build Your Business',
            link: 'https://www.skillshare.com/classes/Meal-Planning-Coach-Create-Meal-Plans-Coach-Others-Build-Your-Business/1710549907?via=browse-trending-lifestyle-layout-grid',
            state: 'Not Started',
            categories: ['organisation', 'planning']
        },
        { name: 'Embroidery For Beginners, Learn 10 Basic Hand Stitches', link: 'https://www.skillshare.com/classes/Embroidery-For-Beginners-Learn-10-Basic-Hand-Stitches/2022669886?via=browse-trending-lifestyle-layout-grid', state: 'Not Started', categories: ['embroidery', 'fabrics'] },
        { name: 'Mastering Productivity: Create a Custom System that Works | Thomas Frank | Skillshare', link: 'https://www.skillshare.com/classes/Mastering-Productivity-Create-a-Custom-System-that-Works/442860604?via=browse-rating-personal-development-layout-grid', state: 'Not Started' },
        { name: 'Find Your Style: Five Exercises to Unlock Your Creative Identity | Andy J. Pizza | Skillshare', link: 'https://www.skillshare.com/classes/Find-Your-Style-Five-Exercises-to-Unlock-Your-Creative-Identity/1945270638?via=browse-rating-personal-development-layout-grid', state: 'Not Started' },
        { name: 'The Ultimate Self-Care Playbook: Discover &amp; Nurture Your Centered Self | Jonathan Van Ness | Skillshare', link: 'https://www.skillshare.com/classes/The-Ultimate-Self-Care-Playbook-Discover-Nurture-Your-Centered-Self/1501328633?via=browse-rating-personal-development-layout-grid', state: 'Not Started' },
        { name: 'Productivity Habits That Stick: Using Time Theming | Mike Vardy | Skillshare', link: 'https://www.skillshare.com/classes/Productivity-Habits-That-Stick-Using-Time-Theming/1216959000?via=browse-rating-personal-development-layout-grid', state: 'Not Started' },
        { name: 'Creating Your Dream Career: Uncover &amp; Apply Your Creative Strengths | Holley M. Kholi-Murchison | Skillshare', link: 'https://www.skillshare.com/classes/Creating-Your-Dream-Career-Uncover-Apply-Your-Creative-Strengths/627711705?via=browse-rating-personal-development-layout-grid', state: 'Not Started' },
        { name: 'Simple Productivity: How to Accomplish More With Less | Greg McKeown | Skillshare', link: 'https://www.skillshare.com/classes/Simple-Productivity-How-to-Accomplish-More-With-Less/1481076222?via=browse-rating-personal-development-layout-grid', state: 'Not Started' },
        { name: '30-Days to SOAR | LaKisha Nevels | Skillshare', link: 'https://www.skillshare.com/classes/30-Days-to-SOAR/686714327?via=browse-rating-personal-development-layout-grid', state: 'Not Started' },
        { name: 'Productivity Masterclass - Principles and Tools to Boost Your Productivity | Ali Abdaal | Skillshare', link: 'https://www.skillshare.com/classes/Productivity-Masterclass-Principles-and-Tools-to-Boost-Your-Productivity/647318269?via=browse-rating-business-layout-grid', state: 'Not Started' },
        { name: 'How to Study for Exams - An Evidence-Based Masterclass | Ali Abdaal | Skillshare', link: 'https://www.skillshare.com/classes/How-to-Study-for-Exams-An-Evidence-Based-Masterclass/728748026?via=browse-rating-business-layout-grid', state: 'Not Started' },
        { name: 'How to Organise your Workflow to Maximise Productivity | Ali Abdaal | Skillshare', link: 'https://www.skillshare.com/classes/How-to-Organise-your-Workflow-to-Maximise-Productivity/1036212713?via=browse-rating-business-layout-grid', state: 'Not Started' },
        { name: 'Healthy Creative Habits: 5 Steps Towards Becoming an Artist | Simon Ip | Skillshare', link: 'https://www.skillshare.com/classes/Healthy-Creative-Habits-5-Steps-Towards-Becoming-an-Artist/762239056?via=browse-featured', state: 'Not Started' },
        { name: 'Learn Fabric Smocking! | Dominika Syczynska | Skillshare', link: 'https://www.skillshare.com/classes/Learn-Fabric-Smocking/1203500356?via=browse-featured', state: 'Not Started' },
        { name: 'Sourdough Baking 102: Master Sourdough Breads at Home | Shubranshu Bhandoh | Skillshare', link: 'https://www.skillshare.com/classes/Sourdough-Baking-102-Master-Sourdough-Breads-at-Home/1719562164?via=browse-featured', state: 'Not Started' },
        { name: 'Document Your Life: 4 Methods to Live More Intentionally | Nathaniel Drew | Skillshare', link: 'https://www.skillshare.com/classes/Document-Your-Life-4-Methods-to-Live-More-Intentionally/172991537?via=browse-rating-lifestyle', state: 'Not Started' },
        { name: 'Hand Sewing Basics: Work Wonders with Fabric, Needle &amp; Thread | Bernadette Banner | Skillshare', link: 'https://www.skillshare.com/classes/Hand-Sewing-Basics-Work-Wonders-with-Fabric-Needle-Thread/467604165?via=browse-rating-lifestyle', state: 'Not Started' },
        { name: 'Learn Anything With Flashcards - The Ultimate Guide To Anki | Ali Abdaal | Skillshare', link: 'https://www.skillshare.com/classes/Learn-Anything-With-Flashcards-The-Ultimate-Guide-To-Anki/1530220171?via=browse-rating-lifestyle', state: 'Not Started' },
        { name: 'Spanish for Beginners. The complete Method. Level 1. | Peter Hanley | Skillshare', link: 'https://www.skillshare.com/classes/Spanish-for-Beginners-The-complete-Method-Level-1/882535195?via=browse-rating-lifestyle', state: 'Not Started' },
        { name: 'Plants at Home: Uplift Your Spirit &amp; Your Space | Christopher Griffin | Skillshare', link: 'https://www.skillshare.com/classes/Plants-at-Home-Uplift-Your-Spirit-Your-Space/1694126289?via=browse-popular-lifestyle', state: 'Not Started' },
        { name: 'Holistic Interior Design: Transform Your Personal Space for Well-Being | Clear Studios | Skillshare', link: 'https://www.skillshare.com/classes/Holistic-Interior-Design-Transform-Your-Personal-Space-for-Well-Being/1880048778?via=browse-popular-lifestyle', state: 'Not Started' },
        { name: 'Gardening 101: A Guide For Growing &amp; Caring For Plants | Geraldine Lavin | Skillshare', link: 'https://www.skillshare.com/classes/Gardening-101-A-Guide-For-Growing-Caring-For-Plants/1717335224?via=browse-popular-lifestyle', state: 'Not Started' },
        { name: 'Designing The Life You Want: 4 Exercises for Clarity and Motivation | Muchelle B | Skillshare', link: 'https://www.skillshare.com/classes/Designing-The-Life-You-Want-4-Exercises-for-Clarity-and-Motivation/1203862507?via=browse-popular-lifestyle', state: 'Not Started' },
        { name: 'Meditation 101: Spark Joy, Peace, and Creativity in Your Daily Life | Dandan Liu | Skillshare', link: 'https://www.skillshare.com/classes/Meditation-101-Spark-Joy-Peace-and-Creativity-in-Your-Daily-Life/1386894652?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'The Creative Toolkit: 6 Techniques to Spark Original Ideas | Esteban Gast | Skillshare', link: 'https://www.skillshare.com/classes/The-Creative-Toolkit-6-Techniques-to-Spark-Original-Ideas/1389260458?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Layer Cake From Scratch: Ultimate Beginners Guide to Cake Decorating | Cakes by MK | Skillshare', link: 'https://www.skillshare.com/classes/Layer-Cake-From-Scratch-Ultimate-Beginners-Guide-to-Cake-Decorating/1387676230?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Loose &amp; Sketchy Abstract Florals | Jessica Sanders | Skillshare', link: 'https://www.skillshare.com/classes/Loose-Sketchy-Abstract-Florals/14879011?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Stitching Woodland Creatures 101: Exploring Texture in Hand Embroidery | Floor Giebels | Skillshare', link: 'https://www.skillshare.com/classes/Stitching-Woodland-Creatures-101-Exploring-Texture-in-Hand-Embroidery/1849863458?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Pattern Making - How To Create A Sloper/Block From Scratch - Fashion | Caroline Barulis PurePatternCutting | Skillshare', link: 'https://www.skillshare.com/classes/Pattern-Making-How-To-Create-A-SloperBlock-From-Scratch-Fashion/1535715287?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Home Office Interior Design: Work from Home like a Boss | Ana Marcu | Skillshare', link: 'https://www.skillshare.com/classes/Home-Office-Interior-Design-Work-from-Home-like-a-Boss/1075506486?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Make Your Own Furniture | Oivind Lie-Jacobsen | Skillshare', link: 'https://www.skillshare.com/classes/Make-Your-Own-Furniture/1025079313?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Sculpture : Easy Cute Owls from Polymer Clay | Stephanie Kilgast | Skillshare', link: 'https://www.skillshare.com/classes/Sculpture-Easy-Cute-Owls-from-Polymer-Clay/38798147?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'The Complete Spanish Method. Intermediate 2. EL MÉTODO. | Peter Hanley | Skillshare', link: 'https://www.skillshare.com/classes/The-Complete-Spanish-Method-Intermediate-2-EL-M%C3%89TODO/1673096608?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Stencil print your own fabric. Easy techniques for beautiful patterns | Pauline Greuell | Skillshare', link: 'https://www.skillshare.com/classes/Stencil-print-your-own-fabric-Easy-techniques-for-beautiful-patterns/1560186335?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Learn Gothic / Blackletter Calligraphy - Series 1: Minuscule | Jx Calligraphy Ortiz-Nonog | Skillshare', link: 'https://www.skillshare.com/classes/Learn-Gothic-Blackletter-Calligraphy-Series-1-Minuscule/848823496?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Everything Small Home Design | Erikka Fogleman | Skillshare', link: 'https://www.skillshare.com/classes/Everything-Small-Home-Design/766925516?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Beginner Pattern Making: How to Draft a T-shirt Pattern | Kathryn Roberts | Skillshare', link: 'https://www.skillshare.com/classes/Beginner-Pattern-Making-How-to-Draft-a-T-shirt-Pattern/21034952?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Pattern Cutting and Making for Beginners: Skirts | Kathryn Roberts | Skillshare', link: 'https://www.skillshare.com/classes/Pattern-Cutting-and-Making-for-Beginners-Skirts/2143943045?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Punch Needle Basics - How to Create a Punch Needle Project in a Swoosh | Jenni Ahlberg | Skillshare', link: 'https://www.skillshare.com/classes/Punch-Needle-Basics-How-to-Create-a-Punch-Needle-Project-in-a-Swoosh/1400889352?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Korean Conversation for Beginners | Keehwan Kim | Skillshare', link: 'https://www.skillshare.com/classes/Korean-Conversation-for-Beginners/1746012859?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Sew Your Prints: Custom-made PDF Sewing Patterns for Pattern Designers | Agnes Somogyi | Skillshare', link: 'https://www.skillshare.com/classes/Sew-Your-Prints-Custom-made-PDF-Sewing-Patterns-for-Pattern-Designers/1952282018?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Succulents for beginners and how to take care of them (New plants added regularly) | Mark Shorter | Skillshare', link: 'https://www.skillshare.com/classes/Succulents-for-beginners-and-how-to-take-care-of-them-New-plants-added-regularly/744760558?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Live Encore: Simple Shifts to Make Your Space More Peaceful | Erin Boyle | Skillshare', link: 'https://www.skillshare.com/classes/Live-Encore-Simple-Shifts-to-Make-Your-Space-More-Peaceful/1203413777?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Ohana Dog Trick Training Class (Basic To Advanced Level Tricks) | Cassie Kennedy | Skillshare', link: 'https://www.skillshare.com/classes/Ohana-Dog-Trick-Training-Class-Basic-To-Advanced-Level-Tricks/396764529?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Lebanese and Mediterranean cuisine | Simon | Skillshare', link: 'https://www.skillshare.com/classes/Lebanese-and-Mediterranean-cuisine/323236355?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Gym Trainer Course: Become A Coach, Create Workouts &amp; Training For Muscle Growth and Health | Felix Harder | Skillshare', link: 'https://www.skillshare.com/classes/Gym-Trainer-Course-Become-A-Coach-Create-Workouts-Training-For-Muscle-Growth-and-Health/134287032?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Korean for Absolute Beginners 1 | Keehwan Kim | Skillshare', link: 'https://www.skillshare.com/classes/Korean-for-Absolute-Beginners-1/2051961511?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'German Language for Beginners - Unit 2 - Family, Friends &amp; Relationships | Sandra German | Skillshare', link: 'https://www.skillshare.com/classes/German-Language-for-Beginners-Unit-2-Family-Friends-Relationships/1040285098?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Whimsical Faces: Five Minutes of Faces | Jessica Sanders | Skillshare', link: 'https://www.skillshare.com/classes/Whimsical-Faces-Five-Minutes-of-Faces/2003730318?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Easy Clay Earrings: Learn 3 Styles using Oven-Bake Clay | Kiley Bennett | Skillshare', link: 'https://www.skillshare.com/classes/Easy-Clay-Earrings-Learn-3-Styles-using-Oven-Bake-Clay/1419362167?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'ASL | Pronouns + Vocab + Practice | American Sign Language | Able Lingo ASL | Skillshare', link: 'https://www.skillshare.com/classes/ASL-Pronouns-Vocab-Practice-American-Sign-Language/59497168?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'ASL | Fingerspelling Exercises | American Sign Language | Able Lingo ASL | Skillshare', link: 'https://www.skillshare.com/classes/ASL-Fingerspelling-Exercises-American-Sign-Language/1508473310?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Create The Most Powerful Sourdough Starter: Intro To Baking Bread &amp; Pastries | Marceau Dauboin | Skillshare', link: 'https://www.skillshare.com/classes/Create-The-Most-Powerful-Sourdough-Starter-Intro-To-Baking-Bread-Pastries/1250282440?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Crochet a Plant Pot Cover Using Plastic Bag or T-Shirt Yarn | Kristina Turner | Skillshare', link: 'https://www.skillshare.com/classes/Crochet-a-Plant-Pot-Cover-Using-Plastic-Bag-or-T-Shirt-Yarn/486454843?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'How to Grow Sprouts &amp; Microgreens | Christelle Cristina | Skillshare', link: 'https://www.skillshare.com/classes/How-to-Grow-Sprouts-Microgreens/421709827?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Miniature Succulent Garden on a Glass Jar | Polymer Clay Sculpture | Stephanie Kilgast | Skillshare', link: 'https://www.skillshare.com/classes/Miniature-Succulent-Garden-on-a-Glass-Jar-Polymer-Clay-Sculpture/1001502500?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'How to Quickly Cure Workout Procrastination &amp; Stay Motivated All Year Long | Bryan Anze Bolt | Skillshare', link: 'https://www.skillshare.com/classes/How-to-Quickly-Cure-Workout-Procrastination-Stay-Motivated-All-Year-Long/144182238?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'How to Learn a New Language as an Adult (Masterclass) | Robert G | Skillshare', link: 'https://www.skillshare.com/classes/How-to-Learn-a-New-Language-as-an-Adult-Masterclass/2075350215?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Advanced Lucid Dreaming and Astral Projection (Out of Body Experience) | Peter Torok | Skillshare', link: 'https://www.skillshare.com/classes/Advanced-Lucid-Dreaming-and-Astral-Projection-Out-of-Body-Experience/860558727?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Easy Gardening: Indoor Edible Plants | Sunny Green | Skillshare', link: 'https://www.skillshare.com/classes/Easy-Gardening-Indoor-Edible-Plants/850530701?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Easy Gardening With Raised Beds | Sunny Green | Skillshare', link: 'https://www.skillshare.com/classes/Easy-Gardening-With-Raised-Beds/1020223962?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Zero Waste Lifestyle | Christelle Cristina | Skillshare', link: 'https://www.skillshare.com/classes/Zero-Waste-Lifestyle/143066652?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Fashionable Resin Jewelry for Beginners - Create a Pendant and Earring set | Kellie Chasse | Skillshare', link: 'https://www.skillshare.com/classes/Fashionable-Resin-Jewelry-for-Beginners-Create-a-Pendant-and-Earring-set/1876704428?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Gardening For Beginners (New plants added regularly) | Mark Shorter | Skillshare', link: 'https://www.skillshare.com/classes/Gardening-For-Beginners-New-plants-added-regularly/740629636?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Learn To Make Wire Wrapped Jewelry from Scratch | Rachel Truax | Skillshare', link: 'https://www.skillshare.com/classes/Learn-To-Make-Wire-Wrapped-Jewelry-from-Scratch/2111136075?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'DIY How to build an affordable Plywood Bookcase - Basic Woodworking | Auke &amp; Jildou | Skillshare', link: 'https://www.skillshare.com/classes/DIY-How-to-build-an-affordable-Plywood-Bookcase-Basic-Woodworking/1581210292?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'SEWING 101 - The basics | Valeria Garala | Skillshare', link: 'https://www.skillshare.com/classes/SEWING-101-The-basics/456673789?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Basic Piping Skills For Cake Decorating | Nadine Thomas | Skillshare', link: 'https://www.skillshare.com/classes/Basic-Piping-Skills-For-Cake-Decorating/1902594997?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'BARTENDING 101 - Full Guide For Bartending | Kristoffer | Skillshare', link: 'https://www.skillshare.com/classes/BARTENDING-101-Full-Guide-For-Bartending/1147097893?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Study Smart: A Masterclass on How to Study for Exams More Effectively | MicroPharm | Skillshare', link: 'https://www.skillshare.com/classes/Study-Smart-A-Masterclass-on-How-to-Study-for-Exams-More-Effectively/1969593615?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Think Like a Chef: A Beginner&#39;s Guide to Cooking with Confidence | Kenny Monroe | Skillshare', link: 'https://www.skillshare.com/classes/Think-Like-a-Chef-A-Beginners-Guide-to-Cooking-with-Confidence/1814478058?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'English Grammar Pro | Beginner to Advanced (A1-C1) | For Your English | Skillshare', link: 'https://www.skillshare.com/classes/English-Grammar-Pro-Beginner-to-Advanced-A1-C1/1240993655?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Introduction to Blender For Beginners - #1 - Introduction | Danan Thilakanathan | Skillshare', link: 'https://www.skillshare.com/classes/Introduction-to-Blender-For-Beginners-1-Introduction/167569815?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Painting with Thread: Modern Embroidery for Beginners | Danielle Clough | Skillshare', link: 'https://www.skillshare.com/classes/Painting-with-Thread-Modern-Embroidery-for-Beginners/1597015420?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Watercolor Story: Practice the Essentials | Amarilys Henderson | Skillshare', link: 'https://www.skillshare.com/classes/Watercolor-Story-Practice-the-Essentials/1289081600?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Learn to Solve the Rubik&#39;s Cube the Easiest Way (CFOP Tutorial) | Mike Boyd | Skillshare', link: 'https://www.skillshare.com/classes/Learn-to-Solve-the-Rubiks-Cube-the-Easiest-Way-CFOP-Tutorial/546100170?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Italian Chef Secrets: How to Make Perfect Thin Crust Pizza | Nick Anderer | Skillshare', link: 'https://www.skillshare.com/classes/Italian-Chef-Secrets-How-to-Make-Perfect-Thin-Crust-Pizza/1919793620?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'How To Create An Awesome Morning Routine: 10 Ways To Start An Amazing Day | Derek Franklin | Skillshare', link: 'https://www.skillshare.com/classes/How-To-Create-An-Awesome-Morning-Routine-10-Ways-To-Start-An-Amazing-Day/105980798?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Building Your English Brain | Cloud English | Skillshare', link: 'https://www.skillshare.com/classes/Building-Your-English-Brain/1039464091?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Sustainable Living Basics: Simple Steps to Make an Impact | Kathryn Kellogg | Skillshare', link: 'https://www.skillshare.com/classes/Sustainable-Living-Basics-Simple-Steps-to-Make-an-Impact/1761537406?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Read BETTER FASTER: Triple Your Speed Reading In Just 7 Days | Silviu Marisca | Skillshare', link: 'https://www.skillshare.com/classes/Read-BETTER-FASTER-Triple-Your-Speed-Reading-In-Just-7-Days/2008766152?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Triple Your Typing Speed - The Ultimate Guide to Keyboard Mastery | Ali Abdaal | Skillshare', link: 'https://www.skillshare.com/classes/Triple-Your-Typing-Speed-The-Ultimate-Guide-to-Keyboard-Mastery/855773348?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Quick &amp; Dirty Sewing: Machine Crash Course | Miranda Harper | Skillshare', link: 'https://www.skillshare.com/classes/Quick-Dirty-Sewing-Machine-Crash-Course/2059205371?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Ceramics at Home: Building Dishes by Hand | Emily Reinhardt | Skillshare', link: 'https://www.skillshare.com/classes/Ceramics-at-Home-Building-Dishes-by-Hand/237094009?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Mindful Growth: Start Your Creative Journey | Mimi Chao | Skillshare', link: 'https://www.skillshare.com/classes/Mindful-Growth-Start-Your-Creative-Journey/1770822268?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Bookbinding Basics: Making a Perfect Bound Notebook | Caleb Sylvest | Skillshare', link: 'https://www.skillshare.com/classes/Bookbinding-Basics-Making-a-Perfect-Bound-Notebook/732151564?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Soap Making: How To Make Your Own Handmade Soap | Beau Colin | Skillshare', link: 'https://www.skillshare.com/classes/Soap-Making-How-To-Make-Your-Own-Handmade-Soap/1269259443?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'Become a SuperLearner® 2.0: Learn Speed Reading &amp; Advanced Memory Techniques (New &amp; Improved!) | Jonathan Levi | Skillshare', link: 'https://www.skillshare.com/classes/Become-a-SuperLearner%C2%AE-2-0-Learn-Speed-Reading-Advanced-Memory-Techniques-New-Improved/946522475?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'How to Make Gelato: Tips and Recipes to Make the Delightful Italian Frozen Treat | Marie Asselin | Skillshare', link: 'https://www.skillshare.com/classes/How-to-Make-Gelato-Tips-and-Recipes-to-Make-the-Delightful-Italian-Frozen-Treat/473567348?via=browse-trending-lifestyle-layout-grid', state: 'Not Started' },
        { name: 'How to Write a Personal Statement - The Complete Medicine Masterclass | Doctor Shaene | Skillshare', link: 'https://www.skillshare.com/classes/How-to-Write-a-Personal-Statement-The-Complete-Medicine-Masterclass/1175744597?via=browse-trending-creative-writing-layout-grid', state: 'Not Started' },
        { name: 'Poetry For Self Expression | Zachary Phillips | Skillshare', link: 'https://www.skillshare.com/classes/Poetry-For-Self-Expression/1103050740?via=browse-trending-creative-writing-layout-grid', state: 'Not Started' },
        { name: 'Learn How to Draw Pine Trees and How to incorporate them in your Watercolor Paintings | Zaneena Nabeel | Skillshare', link: 'https://www.skillshare.com/classes/Learn-How-to-Draw-Pine-Trees-and-How-to-incorporate-them-in-your-Watercolor-Paintings/1222868005?via=browse-trending-fine-art-layout-grid', state: 'Not Started' },
        { name: 'Becoming Creative / An Artistic Guide to Creativity | Brent Eviston | Skillshare', link: 'https://www.skillshare.com/classes/Becoming-Creative-An-Artistic-Guide-to-Creativity/1997385358?via=browse-trending-fine-art-layout-grid', state: 'Not Started' },
        { name: 'Watercolor Your World: A Meditative Approach to Painting Landscapes | Rosalie Haizlett | Skillshare', link: 'https://www.skillshare.com/classes/Watercolor-Your-World-A-Meditative-Approach-to-Painting-Landscapes/831325295?via=browse-trending-fine-art-layout-grid', state: 'Not Started' },
        { name: 'Floral Meadows with Watercolor - Learn to paint 2 beautiful floral landscapes | Zaneena Nabeel | Skillshare', link: 'https://www.skillshare.com/classes/Floral-Meadows-with-Watercolor-Learn-to-paint-2-beautiful-floral-landscapes/491579657?via=browse-trending-fine-art-layout-grid', state: 'Not Started' },
        { name: 'Learn to Paint Autumn Trees with Watercolor | Zaneena Nabeel | Skillshare', link: 'https://www.skillshare.com/classes/Learn-to-Paint-Autumn-Trees-with-Watercolor/101999210?via=browse-trending-fine-art-layout-grid', state: 'Not Started' },
        { name: 'Modern Abstract Expressionism: A Journey in Brush Strokes, Texture, and All the Feels | Peggy Dean | Skillshare', link: 'https://www.skillshare.com/classes/Modern-Abstract-Expressionism-A-Journey-in-Brush-Strokes-Texture-and-All-the-Feels/1280042773?via=browse-trending-fine-art-layout-grid', state: 'Not Started' },
        { name: 'Adobe Illustrator CC Masterclass: Shortcuts &amp; Workflow Tips | Jeremy Mura | Skillshare', link: 'https://www.skillshare.com/classes/Adobe-Illustrator-CC-Masterclass-Shortcuts-Workflow-Tips/1736034566?via=browse-trending-graphic-design-layout-grid', state: 'Not Started' },
        { name: 'Design a Beautiful Stationery Set in Procreate and Adobe Photoshop | Agatha Vieira | Skillshare', link: 'https://www.skillshare.com/classes/Design-a-Beautiful-Stationery-Set-in-Procreate-and-Adobe-Photoshop/873689550?via=browse-trending-graphic-design-layout-grid', state: 'Not Started' },
        { name: 'Improve Your Singing | Breathing exercises! | SINGING COACH | Skillshare', link: 'https://www.skillshare.com/classes/Improve-Your-Singing-Breathing-exercises/1784251004?via=browse-trending-music-layout-grid', state: 'Not Started' },

    ];
}
