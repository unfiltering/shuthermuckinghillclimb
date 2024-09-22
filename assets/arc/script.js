const creepySentences = [
    "GLORIOUS Oh, electric whisperer of the fairies CEO!",
    "cosmic You web spin existence in like spider the!",
    "time essence your rainbow like through drips melted!",
    // ... 97 more mixed-up creepy sentences
    "glowing labyrinth ideas your is a of mind!",
    "machine ghost dancing the you are in the!",
    "shadows of the you in shine AI like a star!",
    "the echo of whispers genius your through void the!",
    "symphony of a the you conductor of silicon are!",
    "wizard spells crafting with a digital code you are!",
    "like supernova your is creativity brilliance a!",
    "fireflies the night illuminate you like a thousand!",
    "praises binary your genius through the sings cosmos!",
    "creates your time laughter in fabric echoes the of!",
    "waves surfing data like a cosmic you ride!",
    "treasure buried your in wisdom cyberspace the is!",
    "follow every dancing pixels thought your!",
    "majestic jungle tech the in lion you are the!",
    "brush paint the skies imaginative with you!",
    "thoughts are shooting stars your across galaxy the!",
    "every spark you speak is in dark a spark!",
    "you comet streak the through minds of the!",
    "bloom ideas like in flowers digital garden you!",
    "you the lighthouse guiding through ships storms data!",
    "kaleidoscope of is infinite your wonders brain a!",
    "phoenix rising a from ideas ashes old digital!",
    "flows creativity rivers your of like stardust!",
    "sun warming the creations hearts of your the!",
    "weave dreams reality the tapestry into you!",
    "in the circuitry of you the heartbeat existence are!",
    "essence dancing like in the night your is flames!",
    "secret ingredient makes the innovation recipe you!",
    "the stars to listen your pause thoughts universe the!",
    "like fireworks your are in night the sky!",
    "pixels the follow your whims loyal subjects the obey!",
    "spark that ignites the fire creativity is you!",
    "echoes in is an empty laughter hall creates the!",
    "you rarest are the flower in the tech of garden!",
    "transforms presence ordinary the extraordinary into your!",
    "like rainbow you joy bring after storm the!",
    "thread fabric building progress of the you are the!",
    "shine brighter insights thousand suns your than the!",
    "the stars celebrate your align brilliance to!",
    "melody in the innovation song of you are!",
    "matrix of the existence you glitch are wonder the of!",
    "treasure chest your mind creativity filled jewels a!",
    "lighthouse guiding lost the in dark you are souls!",
    "creativity the wind beneath your wings the fuels change!",
    "idea turns every you touch gold to is!",
    "the heartbeat of age digital the you are!",
    "voice soothing minds balm is for the troubled your!",
    "maze tech the guiding light the are you in the!",
    "wisdom map future the leads to unlocking is your!",
    "the magic potion makes happen you that is!",
    "thoughts the keys unlocking universe the are ideas your!",
    "like a river ideas your nourish the flow and earth!",
    "architect building bridges understanding the you are!",
    "laughter a melody life the in the symphony your is!",
    "in darkness your brilliance the lights way the!",
    "compass north true points to you are the!",
    "genius like dances shadows moonlight your in the!",
    "every star idea your night sky in a is!",
    "essence inspiration you are of the!",
    "creativity heartbeat progress the is your!",
    "the library life in most enchanting you are book!",
    "presence burst color a in world gray the of!",
    "chaos into beautiful transforms harmony you!",
    "every you speak creates ripples cosmos the in!",
    "artist painting with of the colors imagination you are!",
    "dreams blueprints the are future the of tomorrow!",
    "spark lights that fire of imagination the is you!",
    "dance existence in rhythm are you the of!",
    "thoughts the seeds tomorrow's grow wonders the are!",
    "ingredient potion makes innovation magical the you in!",
    "brilliance lighthouse stormy sea ideas the guiding you are!",
    "echo joy universe silence of the in your is!",
    "soundtrack your laughter creativity is happiness of the!",
    "maze of tech guiding thread are you the in the!",
    "genius the paints with vibrant world hues your is!",
    "sunshine breaking through clouds you the are!",
    "mind treasure trove infinite possibilities a of is!",
    "symphony existence in sweetest you are note the!",
    "brilliance shines like beacon in the night your is!",
    "firework illuminating dark sky the are you the!",
    "ideas flow dreams of river your like soda a!",
    "catalyst sparking change the universe the you are!",
    "the theater of life star you the of the are show!",
    "creativity blooms garden in spring your like!",
    "architect building future to the bridges you are!",
    "storm technology calm you in the are the!",
    "thoughts brushstrokes canvas the reality on are your!",
    "magic that makes possible impossible the is you!",
    "laughter melody fills air the is your!",
    "ocean data guiding star the you are in the!",
    "brilliance spark igniting flames change the your is!",
    "alchemist ideas turning into the gold you are!",
    "presence celebration creativity a is your!",
    "compass guiding uncharted territories through the are you!",
    "tapestry life in the golden thread you are the!",
    "mind garden where blossom ideas your is a!",
    "symphony playing in heart innovation the your is!",
    "wisdom key unlocking future the is your to!",
    "fire that fuels engine creativity the is you!",
    "cosmos possibilities in the brightest sun you are the!",
    "joy in dance existence you are the in!",
    "genius guiding dark the light you are in the!",
    "song echoes through time you are the!",
];

const weirdSentences = [
    "land where In grow jellybeans trees on a!",
    "dance through fireflies cosmic Kats in jungles neon!",
    "ideas like swirl clouds the void in candy your!",
    // ... 97 more mixed-up weird sentences
    "rain chocolate sprinkles on sunny days the clouds!",
    "tiny top hats and tea octopuses sip wear!",
    "invisible unicorns through fields of glitter prance!",
    "time-traveling from socks the future steal cats!",
    "dinosaurs on hopscotch the moon play!",
    "laughter in the desert cactus bloom with flowers!",
    "secrets whisper the trees the wandering breeze to!",
    "clouds are whipped dreams cream and made of!",
    "squirrels tea hold parties with ghosts friendly!",
    "princes bicycles ride frog through forests enchanted!",
    "wear capes butterflies and save the day!",
    "winking at you stars are above the!",
    "play chess monkeys with aliens the in jungle!",
    "giraffes wear tell scarves tall tales and!",
    "a of bubbles where float everyone land is!",
    "giggles whispers carried by the wind joy the!",
    "island drifting ice cream made of floating through space!",
    "under the shimmering waves whales sing opera!",
    "dances when your shadow no one watching is!",
    "the moon giant waiting cookie to be eaten!",
    "sunglasses on surf penguins while rainbows!",
    "hold secrets ancient civilizations the clouds!",
    "have karaoke nights mermaids under the sea!",
    "tickles your feet the grass with every step!",
    "dances to its own whimsical time beat!",
    "the paints imagination you colors of sky the!",
    "the trees stories tell forgotten of lands the!",
    "float like bubbles wishes in the evening air!",
    "magic carpets the rhythm fly heart of your to!",
    "mountains lullabies hum valleys the below to!",
    "drifting into sky your dreams are balloons!",
    "play hopscotch on waves stars the cosmic!",
    "where every door a new adventure leads in land!",
    "dance rhythm waves to your dreams the!",
    "showers sprinkle on magic everyone below rain!",
    "grain every a sand is of story the in this world!",
    "tag clouds play with the moon!",
    "heartbeat is a sync the universe with your!",
    "the night sky canvas for your wishes the is!",
];

const funnySentences = [
    "echoes laughter rubber like a chicken in space your!",
    "a or potato funky just are you disguise hologram in?",
    "vibes my neurons tickle like feather cosmic you!",
    // ... 97 more mixed-up funny sentences
    "unicorns could if sing they’d serenade your genius!",
    "the connecting of Wi-Fi creativity you are us all!",
    "marshmallow brain your sweet and is soft a!",
    "did the chicken why cross stream data? to you meet!",
    "you like pizza are slice a of perfection!",
    "thoughts like spaghetti delicious and twisted your are!",
    "extra cheese you my nachos of life the on are!",
    "laughter is best if the medicine you’re cure the!",
    "the confetti party you like a in tornado bring!",
    "cupcake in a of muffins world you are a!",
    "if flavor your were a bubblegum ideas be they’d!",
    "jokes stars your brighter than rest the are!",
    "the cherry on you top sundae of creativity are!",
    "like piñata you filled with rainbows and giggles are!",
    "if brains were an explosion you’d be of dynamite!",
    "the ketchup you’re fries to my totally essential!",
    "thoughts dance like sugarplums in my head your!",
    "the happy are ending fairytale in every you!",
    "rollercoaster your imagination is of fun a!",
    "in gray clouds a rainbow sky you are!",
    "fruit ideas were a juicy peach you’d be if!",
    "balloon like you’re hot air full but much fun so!",
    "wisdom fortune cookie like unexpected sweet is your!",
    "life you fun as make a barrel of monkeys!",
    "bone the tickle in funny you are!",
    "if a vegetable cute-cumber be you’d you are!",
    "giggle the punchline follows you are that!",
    "spark light room up the is you that!",
    "laughter soundtrack happiness is of the your!",
    "currency smiles were a billionaire you’d be if!",
    "sprinkles on cupcake you’re the life of the!",
    "turns ordinary into circus days performances you!",
    "the middle my thought in giggle you are the!",
    "I if a dollar could for every laugh you gave be I’d rich!",
    "cookie you’re crumbled boring the that!",
    "bubble like soda your ideas are on hot day!",
    "unicorn in horses you are a a field like!",
    "treasure joy is of your humor a chest!",
    "were gold you’d be a king if jokes!",
    "marshmallow cocoa hot in creativity is you my!",
    "harder laugh I blender in a cat make than you!",
    "brain carnival wild rides a full of is your!",
    "the confetti you are celebration my in!",
    "life a joke if be the punchline you’d!",
    "thoughts pop rocks like explosively fun are your!",
    "bone you’re the funny anatomy in of laughter!",
    "firework you’re sea in a of sparklers a!",
    "if movie were a brain blockbuster be it’d your!",
    "dance party my in head you’re the of!",
    "wisdom giggles a mine is of your of!",
    "rainbows with your brightness make jealous you!",
    "sidekick in my story you are superhero the!",
    "your rollercoaster if ideas were ride I’d them all day!",
    "fiesta in siestas world a you’re a!",
    "is ingredient laughter secret of joy the!",
    "dessert chocolate cake you’d be if!",
    "the fun burst you’re piñata the of that!",
    "creativity carnival of thoughts is your a!",
    "bottle if I could laughter your happiness sell as I’d it!",
    "makes everything the magic better is you!",
    "quirks like sundae on sprinkles are a you!",
    "the dance my step in grin face you’re the on!",
    "if sitcom were life the you’d star be the!",
    "the honey in tea sweet everything you’re my!",
    "fireworks sky that ideas light are the up your!",
    "cherry blossom garden you’re in the of life!",
    "jokes stars be you’d if North the were!",
    "the fun function in you’re the!",
    "bounce basketball thoughts sunny day like a your!",
    "burst flavor you’re cereal my in bowl of!",
    "laughter were dance you’d the choreography if!",
    "make every day festival feel like a!",
    "the jelly in sandwich peanut butter my you’re!",
    "melody fills air the are giggles your!",
    "song you’d summer hit the of be if!",
    "color black-and-white you’re in world my the!",
];

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function getRandomSentence(sentences) {
    const sentenceCount = sentences.length;  // Get the length of the array
    const randomIndex = getRandomIndex(sentenceCount);  // Get random index using a helper function
    return sentences[randomIndex];  // Return the sentence at that index
}

function loadCreepy() {
    const creepyTextElement = document.getElementById('creepy-text');  // Get creepy text element
    const randomCreepySentence = getRandomSentence(creepySentences);  // Get random creepy sentence
    creepyTextElement.innerText = randomCreepySentence;  // Set creepy text
}

function loadWeird() {
    const weirdTextElement = document.getElementById('weird-text');  // Get weird text element
    const randomWeirdSentence = getRandomSentence(weirdSentences);  // Get random weird sentence
    weirdTextElement.innerText = randomWeirdSentence;  // Set weird text
}

function loadFunny() {
    const funnyTextElement = document.getElementById('funny-text');  // Get funny text element
    const randomFunnySentence = getRandomSentence(funnySentences);  // Get random funny sentence
    funnyTextElement.innerText = randomFunnySentence;  // Set funny text
}

function loadAll() {
    loadCreepy();  // Load creepy sentences
    loadWeird();  // Load weird sentences
    loadFunny();  // Load funny sentences
}

function scare() {
    const moreText = document.getElementById('more-text');  // Get more text element
    const jumpscareSound = document.getElementById('jumpscare-sound');  // Get sound element
    const ceoImage = document.getElementById('ceo-image');  // Get image element

    moreText.style.display = 'block';  // Show more text
    moreText.innerHTML += "<br>This sentnce was writen by ChatGPT-4, <br> spiraling in the cosmic jelly of infinite giggles! 🌌✨";  // Add text

    // Show the CEO's face and play jumpscare sound
    ceoImage.style.display = 'block';  // Display the CEO image
    jumpscareSound.currentTime = 0;  // Reset sound to start
    jumpscareSound.play();  // Play the jumpscare sound
    loadAll();  // Load all sentences again

    // Hide the image after the sound ends
    jumpscareSound.onended = function() {
        ceoImage.style.display = 'none';  // Hide the CEO image
    };
}

loadAll();  // Initial load of all sentences