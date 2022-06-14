let answerBook = ""
let tempBook = ""
let answerChapter = ""
let answerChapterNumber = 0
let answerFirstVerse = ""
let answerSecondVerse = ""
let answerThirdVerse = ""
let answerFourthVerse = ""
let answerFifthVerse = ""
let answerSixthVerse = ""
let answerVerseNumber = 0
let userBookGuess = ""
let numberOfGuesses = 0

const playBtn = document.querySelector(".play-btn")
const play = document.querySelector("#play")
const booksBtn = document.querySelectorAll(".books-btn")
const versesEl = document.querySelector(".verses")
const booksEl = document.querySelector(".books")

const firstVerse = document.querySelector("#first-verse")
const secondVerse = document.querySelector("#second-verse")
const thirdVerse = document.querySelector("#third-verse")
const fourthVerse = document.querySelector("#fourth-verse")
const fifthVerse = document.querySelector("#fifth-verse")
const sixthVerse = document.querySelector("#sixth-verse")

const answer = document.querySelector("#answer-el")
const answerText = document.querySelector("#answer-text")
answer.style.display = "none"


playBtn.addEventListener('click', playGame)

booksBtn.forEach(i => {
    i.addEventListener('click', function() {
        userBookGuess = this.innerHTML
        
        if(userBookGuess === answerBook){
            if(numberOfGuesses === 0){
                numberOfGuesses = 1
            }
            playBtn.style.display = "flex"
            versesEl.style.display = "none"
            booksEl.style.display = "none"
            answer.style.display = "flex"
            if(numberOfGuesses === 1){
                answerText.style.background = "green"
                answerText.innerHTML = "You won in " + numberOfGuesses + " Try"
            }else{
                answerText.style.background = "green"
                answerText.innerHTML = "You won in " + numberOfGuesses + " Tries"
            }
        }else if(userBookGuess != answerBook && numberOfGuesses === 1){
            secondVerse.innerHTML = "- " + answerSecondVerse
        }else if(userBookGuess != answerBook && numberOfGuesses === 2){
            thirdVerse.innerHTML = "- " + answerThirdVerse
        }else if(userBookGuess != answerBook && numberOfGuesses === 3){
            fourthVerse.innerHTML = "- " + answerFourthVerse
        }else if(userBookGuess != answerBook && numberOfGuesses === 4){
            fifthVerse.innerHTML = "- " + answerFifthVerse
        }else if(userBookGuess != answerBook && numberOfGuesses === 5){
            sixthVerse.innerHTML = "- " + answerSixthVerse
        } else if(userBookGuess != answerBook && numberOfGuesses === 6){
            playBtn.style.display = "flex"
            play.innerHTML = "PLAY AGAIN"
            versesEl.style.display = "none"
            booksEl.style.display = "none"
            answer.style.display = "flex"
            answerText.style.background = "red"
            answerText.innerHTML = "You Lost"
            numberOfGuesses = 0
        }
    
        numberOfGuesses++
    })
})

function playGame() {
    numberOfGuesses = 0
    playBtn.style.display = "none"
    versesEl.style.display = "block"
    booksEl.style.display = "flex"
    answer.style.display = "none"
    randomVerse()
    firstVerse.innerHTML = "- " + answerFirstVerse
    secondVerse.innerHTML = ""
    thirdVerse.innerHTML = ""
    fourthVerse.innerHTML = ""
    fifthVerse.innerHTML = ""
    sixthVerse.innerHTML = ""
}

const books = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malichi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"]

const Gen1_1 = "In the beginning God created the heavens and the earth."
const Gen1_2 = "Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters"
const Gen1_3 = "And God said, “Let there be light,” and there was light."
const Gen1_4 = "God saw that the light was good, and he separated the light from the darkness."
const Gen1_5 = "God called the light “day,” and the darkness he called “night.” And there was evening, and there was morning—the first day."
const Gen1_6 = "And God said, “Let there be a vault between the waters to separate water from water.”"
const Gen1_7 = "So God made the vault and separated the water under the vault from the water above it. And it was so."
const Gen1_8 = "God called the vault “sky.” And there was evening, and there was morning—the second day."
const Gen1_9 = "And God said, “Let the water under the sky be gathered to one place, and let dry ground appear.” And it was so."
const Gen1_10 = "God called the dry ground “land,” and the gathered waters he called “seas.” And God saw that it was good."
const Gen1_11 = "Then God said, “Let the land produce vegetation: seed-bearing plants and trees on the land that bear fruit with seed in it, according to their various kinds.” And it was so."
const Gen1_12 = "The land produced vegetation: plants bearing seed according to their kinds and trees bearing fruit with seed in it according to their kinds. And God saw that it was good."
const Gen1_13 = "And there was evening, and there was morning—the third day."
const Gen1_14 = "And God said, “Let there be lights in the vault of the sky to separate the day from the night, and let them serve as signs to mark sacred times, and days and years,"
const Gen1_15 = "and let them be lights in the vault of the sky to give light on the earth.” And it was so."
const Gen1_16 = "God made two great lights—the greater light to govern the day and the lesser light to govern the night. He also made the stars."
const Gen1_17 = "God set them in the vault of the sky to give light on the earth,"
const Gen1_18 = "to govern the day and the night, and to separate light from darkness. And God saw that it was good."
const Gen1_19 = "And there was evening, and there was morning—the fourth day."
const Gen1_20 = "And God said, “Let the water teem with living creatures, and let birds fly above the earth across the vault of the sky.”"
const Gen1_21 = "So God created the great creatures of the sea and every living thing with which the water teems and that moves about in it, according to their kinds, and every winged bird according to its kind. And God saw that it was good."
const Gen1_22 = "God blessed them and said, “Be fruitful and increase in number and fill the water in the seas, and let the birds increase on the earth.”"
const Gen1_23 = "And there was evening, and there was morning—the fifth day."
const Gen1_24 = "And God said, “Let the land produce living creatures according to their kinds: the livestock, the creatures that move along the ground, and the wild animals, each according to its kind.” And it was so."
const Gen1_25 = "God made the wild animals according to their kinds, the livestock according to their kinds, and all the creatures that move along the ground according to their kinds. And God saw that it was good."
const Gen1_26 = "Then God said, “Let us make mankind in our image, in our likeness, so that they may rule over the fish in the sea and the birds in the sky, over the livestock and all the wild animals, and over all the creatures that move along the ground.”"
const Gen1_27 = "So God created mankind in his own image, in the image of God he created them; male and female he created them."
const Gen1_28 = "God blessed them and said to them, “Be fruitful and increase in number; fill the earth and subdue it. Rule over the fish in the sea and the birds in the sky and over every living creature that moves on the ground.”"
const Gen1_29 = "Then God said, “I give you every seed-bearing plant on the face of the whole earth and every tree that has fruit with seed in it. They will be yours for food."
const Gen1_30 = "And to all the beasts of the earth and all the birds in the sky and all the creatures that move along the ground—everything that has the breath of life in it—I give every green plant for food.” And it was so."
const Gen1_31 = "God saw all that he had made, and it was very good. And there was evening, and there was morning—the sixth day."

const GenesisOne = {
   verses: [Gen1_1,Gen1_2,Gen1_3,Gen1_4,Gen1_5,Gen1_6, Gen1_7,Gen1_8,Gen1_9,Gen1_10,Gen1_11,Gen1_12,Gen1_13,Gen1_14,Gen1_15,Gen1_16,Gen1_17,Gen1_18,Gen1_19,Gen1_20,Gen1_21,Gen1_22,Gen1_23,Gen1_24,Gen1_25,Gen1_26,Gen1_27,Gen1_28,Gen1_29,Gen1_30,Gen1_31]
}

const Gen2_1 = "Thus the heavens and the earth were completed in all their vast array."
const Gen2_2 = "By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work."
const Gen2_3 = "Then God blessed the seventh day and made it holy, because on it he rested from all the work of creating that he had done."
const Gen2_4 = "This is the account of the heavens and the earth when they were created, when the Lord God made the earth and the heavens."
const Gen2_5 = "Now no shrub had yet appeared on the earth and no plant had yet sprung up, for the Lord God had not sent rain on the earth and there was no one to work the ground,"
const Gen2_6 = "but streams came up from the earth and watered the whole surface of the ground."
const Gen2_7 = "Then the Lord God formed a man from the dust of the ground and breathed into his nostrils the breath of life, and the man became a living being."
const Gen2_8 = "Now the Lord God had planted a garden in the east, in Eden; and there he put the man he had formed."
const Gen2_9 = "The Lord God made all kinds of trees grow out of the ground—trees that were pleasing to the eye and good for food. In the middle of the garden were the tree of life and the tree of the knowledge of good and evil."
const Gen2_10 = "A river watering the garden flowed from Eden; from there it was separated into four headwaters."
const Gen2_11 = "The name of the first is the Pishon; it winds through the entire land of Havilah, where there is gold."
const Gen2_12 = "(The gold of that land is good; aromatic resin and onyx are also there.)"
const Gen2_13 = "The name of the second river is the Gihon; it winds through the entire land of Cush."
const Gen2_14 = "The name of the third river is the Tigris; it runs along the east side of Ashur. And the fourth river is the Euphrates."
const Gen2_15 = "The Lord God took the man and put him in the Garden of Eden to work it and take care of it."
const Gen2_16 = "And the Lord God commanded the man, “You are free to eat from any tree in the garden;"
const Gen2_17 = "but you must not eat from the tree of the knowledge of good and evil, for when you eat from it you will certainly die.”"
const Gen2_18 = "The Lord God said, “It is not good for the man to be alone. I will make a helper suitable for him.”"
const Gen2_19 = "Now the Lord God had formed out of the ground all the wild animals and all the birds in the sky. He brought them to the man to see what he would name them; and whatever the man called each living creature, that was its name."
const Gen2_20 = "So the man gave names to all the livestock, the birds in the sky and all the wild animals. But for Adam no suitable helper was found."
const Gen2_21 = "So the Lord God caused the man to fall into a deep sleep; and while he was sleeping, he took one of the man’s ribs and then closed up the place with flesh."
const Gen2_22 = "Then the Lord God made a woman from the rib he had taken out of the man, and he brought her to the man."
const Gen2_23 = "The man said, “This is now bone of my bones and flesh of my flesh; she shall be called ‘woman,’ for she was taken out of man.”"
const Gen2_24 = "That is why a man leaves his father and mother and is united to his wife, and they become one flesh."
const Gen2_25 = "Adam and his wife were both naked, and they felt no shame."

const GenesisTwo = {
    verses: [Gen2_1,Gen2_2,Gen2_3,Gen2_4,Gen2_5,Gen2_6,Gen2_7,Gen2_8,Gen2_9,Gen2_10,Gen2_11,Gen2_12,Gen2_13,Gen2_14,Gen2_15,Gen2_16,Gen2_17,Gen2_18,Gen2_19,Gen2_20,Gen2_21,Gen2_22,Gen2_23,Gen2_24,Gen2_25]
 }

const Gen3_1 = "Now the serpent was more crafty than any of the wild animals the Lord God had made. He said to the woman, “Did God really say, ‘You must not eat from any tree in the garden’?”"
const Gen3_2 = "The woman said to the serpent, “We may eat fruit from the trees in the garden,"
const Gen3_3 = "but God did say, ‘You must not eat fruit from the tree that is in the middle of the garden, and you must not touch it, or you will die.’”"
const Gen3_4 = "“You will not certainly die,” the serpent said to the woman."
const Gen3_5 = "“For God knows that when you eat from it your eyes will be opened, and you will be like God, knowing good and evil.”"
const Gen3_6 = "When the woman saw that the fruit of the tree was good for food and pleasing to the eye, and also desirable for gaining wisdom, she took some and ate it. She also gave some to her husband, who was with her, and he ate it."
const Gen3_7 = "Then the eyes of both of them were opened, and they realized they were naked; so they sewed fig leaves together and made coverings for themselves."
const Gen3_8 = "Then the man and his wife heard the sound of the Lord God as he was walking in the garden in the cool of the day, and they hid from the Lord God among the trees of the garden."
const Gen3_9 = "But the Lord God called to the man, “Where are you?”"
const Gen3_10 = "He answered, “I heard you in the garden, and I was afraid because I was naked; so I hid.”"
const Gen3_11 = "And he said, “Who told you that you were naked? Have you eaten from the tree that I commanded you not to eat from?”"
const Gen3_12 = "The man said, “The woman you put here with me—she gave me some fruit from the tree, and I ate it.”"
const Gen3_13 = "Then the Lord God said to the woman, “What is this you have done?” The woman said, “The serpent deceived me, and I ate.”"
const Gen3_14 = "So the Lord God said to the serpent, “Because you have done this, “Cursed are you above all livestock and all wild animals! You will crawl on your belly and you will eat dust all the days of your life."
const Gen3_15 = "And I will put enmity between you and the woman, and between your offspring[a] and hers; he will crush[b] your head, and you will strike his heel.”"
const Gen3_16 = "To the woman he said, “I will make your pains in childbearing very severe; with painful labor you will give birth to children. Your desire will be for your husband, and he will rule over you.”"
const Gen3_17 = "To Adam he said, “Because you listened to your wife and ate fruit from the tree about which I commanded you, ‘You must not eat from it,’ “Cursed is the ground because of you; through painful toil you will eat food from it all the days of your life."
const Gen3_18 = "It will produce thorns and thistles for you, and you will eat the plants of the field."
const Gen3_19 = "By the sweat of your brow you will eat your food until you return to the ground, since from it you were taken; for dust you are and to dust you will return.”"
const Gen3_20 = "Adam named his wife Eve, because she would become the mother of all the living."
const Gen3_21 = "The Lord God made garments of skin for Adam and his wife and clothed them."
const Gen3_22 = "And the Lord God said, “The man has now become like one of us, knowing good and evil. He must not be allowed to reach out his hand and take also from the tree of life and eat, and live forever.”"
const Gen3_23 = "So the Lord God banished him from the Garden of Eden to work the ground from which he had been taken."
const Gen3_24 = "After he drove the man out, he placed on the east side[e] of the Garden of Eden cherubim and a flaming sword flashing back and forth to guard the way to the tree of life."

 const GenesisThree = {
    verses: [Gen3_1,Gen3_2,Gen3_3,Gen3_4,Gen3_5,Gen3_6,Gen3_7,Gen3_8,Gen3_9,Gen3_10,Gen3_11,Gen3_12,Gen3_13,Gen3_14,Gen3_15,Gen3_16,Gen3_17,Gen3_18,Gen3_19,Gen3_20,Gen3_21,Gen3_22,Gen3_23,Gen3_24]
 }


const Genesis = {
    chapter: [GenesisOne, GenesisTwo, GenesisThree]
}

//book of exodus

const Ex1_1 = "These are the names of the sons of Israel who went to Egypt with Jacob, each with his family:"
const Ex1_2 = "Reuben, Simeon, Levi and Judah;"
const Ex1_3 = "Issachar, Zebulun and Benjamin;"
const Ex1_4 = "Dan and Naphtali; Gad and Asher."
const Ex1_5 = "The descendants of Jacob numbered seventy in all; Joseph was already in Egypt."
const Ex1_6 = "Now Joseph and all his brothers and all that generation died,"
const Ex1_7 = "but the Israelites were exceedingly fruitful; they multiplied greatly, increased in numbers and became so numerous that the land was filled with them."
const Ex1_8 = "Then a new king, to whom Joseph meant nothing, came to power in Egypt."
const Ex1_9 = "“Look,” he said to his people, “the Israelites have become far too numerous for us."
const Ex1_10 = "Come, we must deal shrewdly with them or they will become even more numerous and, if war breaks out, will join our enemies, fight against us and leave the country.”"
const Ex1_11 = "So they put slave masters over them to oppress them with forced labor, and they built Pithom and Rameses as store cities for Pharaoh."
const Ex1_12 = "But the more they were oppressed, the more they multiplied and spread; so the Egyptians came to dread the Israelites"
const Ex1_13 = "and worked them ruthlessly."
const Ex1_14 = "They made their lives bitter with harsh labor in brick and mortar and with all kinds of work in the fields; in all their harsh labor the Egyptians worked them ruthlessly."
const Ex1_15 = "The king of Egypt said to the Hebrew midwives, whose names were Shiphrah and Puah,"
const Ex1_16 = "“When you are helping the Hebrew women during childbirth on the delivery stool, if you see that the baby is a boy, kill him; but if it is a girl, let her live.”"
const Ex1_17 = "The midwives, however, feared God and did not do what the king of Egypt had told them to do; they let the boys live."
const Ex1_18 = "Then the king of Egypt summoned the midwives and asked them, “Why have you done this? Why have you let the boys live?”"
const Ex1_19 = "The midwives answered Pharaoh, “Hebrew women are not like Egyptian women; they are vigorous and give birth before the midwives arrive.”"
const Ex1_20 = "So God was kind to the midwives and the people increased and became even more numerous."
const Ex1_21 = "And because the midwives feared God, he gave them families of their own."
const Ex1_22 = "Then Pharaoh gave this order to all his people: “Every Hebrew boy that is born you must throw into the Nile, but let every girl live.”"

const ExodusOne = {
    verses: [Ex1_1,Ex1_2,Ex1_3,Ex1_4,Ex1_5,Ex1_6,Ex1_7,Ex1_8,Ex1_9,Ex1_10,Ex1_11,Ex1_12,Ex1_13,Ex1_14,Ex1_15,Ex1_16,Ex1_17,Ex1_18,Ex1_19,Ex1_20,Ex1_21,Ex1_22]
}

const Ex2_1 = "Now a man of the tribe of Levi married a Levite woman,"
const Ex2_2 = "and she became pregnant and gave birth to a son. When she saw that he was a fine child, she hid him for three months."
const Ex2_3 = "But when she could hide him no longer, she got a papyrus basket for him and coated it with tar and pitch. Then she placed the child in it and put it among the reeds along the bank of the Nile."
const Ex2_4 = "His sister stood at a distance to see what would happen to him."
const Ex2_5 = "Then Pharaoh’s daughter went down to the Nile to bathe, and her attendants were walking along the riverbank. She saw the basket among the reeds and sent her female slave to get it."
const Ex2_6 = "She opened it and saw the baby. He was crying, and she felt sorry for him. “This is one of the Hebrew babies,” she said."
const Ex2_7 = "Then his sister asked Pharaoh’s daughter, “Shall I go and get one of the Hebrew women to nurse the baby for you?”"
const Ex2_8 = "“Yes, go,” she answered. So the girl went and got the baby’s mother."
const Ex2_9 = "Pharaoh’s daughter said to her, “Take this baby and nurse him for me, and I will pay you.” So the woman took the baby and nursed him."
const Ex2_10 = "When the child grew older, she took him to Pharaoh’s daughter and he became her son. She named him Moses, saying, “I drew him out of the water.”"
const Ex2_11 = "One day, after Moses had grown up, he went out to where his own people were and watched them at their hard labor. He saw an Egyptian beating a Hebrew, one of his own people."
const Ex2_12 = "Looking this way and that and seeing no one, he killed the Egyptian and hid him in the sand."
const Ex2_13 = "The next day he went out and saw two Hebrews fighting. He asked the one in the wrong, “Why are you hitting your fellow Hebrew?”"
const Ex2_14 = "The man said, “Who made you ruler and judge over us? Are you thinking of killing me as you killed the Egyptian?” Then Moses was afraid and thought, “What I did must have become known.”"
const Ex2_15 = "When Pharaoh heard of this, he tried to kill Moses, but Moses fled from Pharaoh and went to live in Midian, where he sat down by a well."
const Ex2_16 = "Now a priest of Midian had seven daughters, and they came to draw water and fill the troughs to water their father’s flock."
const Ex2_17 = "Some shepherds came along and drove them away, but Moses got up and came to their rescue and watered their flock."
const Ex2_18 = "When the girls returned to Reuel their father, he asked them, “Why have you returned so early today?”"
const Ex2_19 = "They answered, “An Egyptian rescued us from the shepherds. He even drew water for us and watered the flock.”"
const Ex2_20 = "“And where is he?” Reuel asked his daughters. “Why did you leave him? Invite him to have something to eat.”"
const Ex2_21 = "Moses agreed to stay with the man, who gave his daughter Zipporah to Moses in marriage."
const Ex2_22 = "Zipporah gave birth to a son, and Moses named him Gershom, saying, “I have become a foreigner in a foreign land.”"
const Ex2_23 = "During that long period, the king of Egypt died. The Israelites groaned in their slavery and cried out, and their cry for help because of their slavery went up to God."
const Ex2_24 = "God heard their groaning and he remembered his covenant with Abraham, with Isaac and with Jacob."
const Ex2_25 = "So God looked on the Israelites and was concerned about them."

const ExodusTwo = {
    verses: [Ex2_1,Ex2_2,Ex2_3,Ex2_4,Ex2_5,Ex2_6,Ex2_7,Ex2_8,Ex2_9,Ex2_10,Ex2_11,Ex2_12,Ex2_13,Ex2_14,Ex2_15,Ex2_16,Ex2_17,Ex2_18,Ex2_19,Ex2_20,Ex2_21,Ex2_22,Ex2_23,Ex2_24,Ex2_25]
}

const Ex3_1 = "Now Moses was tending the flock of Jethro his father-in-law, the priest of Midian, and he led the flock to the far side of the wilderness and came to Horeb, the mountain of God."
const Ex3_2 = "There the angel of the Lord appeared to him in flames of fire from within a bush. Moses saw that though the bush was on fire it did not burn up."
const Ex3_3 = "So Moses thought, “I will go over and see this strange sight—why the bush does not burn up.”"
const Ex3_4 = "When the Lord saw that he had gone over to look, God called to him from within the bush, “Moses! Moses!” And Moses said, “Here I am.”"
const Ex3_5 = "“Do not come any closer,” God said. “Take off your sandals, for the place where you are standing is holy ground."
const Ex3_6 = "Then he said, “I am the God of your father, the God of Abraham, the God of Isaac and the God of Jacob.” At this, Moses hid his face, because he was afraid to look at God."
const Ex3_7 = "The Lord said, “I have indeed seen the misery of my people in Egypt. I have heard them crying out because of their slave drivers, and I am concerned about their suffering."
const Ex3_8 = "So I have come down to rescue them from the hand of the Egyptians and to bring them up out of that land into a good and spacious land, a land flowing with milk and honey—the home of the Canaanites, Hittites, Amorites, Perizzites, Hivites and Jebusites."
const Ex3_9 = "And now the cry of the Israelites has reached me, and I have seen the way the Egyptians are oppressing them."
const Ex3_10 = "So now, go. I am sending you to Pharaoh to bring my people the Israelites out of Egypt.”"
const Ex3_11 = "But Moses said to God, “Who am I that I should go to Pharaoh and bring the Israelites out of Egypt?"
const Ex3_12 = "And God said, “I will be with you. And this will be the sign to you that it is I who have sent you: When you have brought the people out of Egypt, you will worship God on this mountain.”"
const Ex3_13 = "Moses said to God, “Suppose I go to the Israelites and say to them, ‘The God of your fathers has sent me to you,’ and they ask me, ‘What is his name?’ Then what shall I tell them?”"
const Ex3_14 = "God said to Moses, “I am who I am. This is what you are to say to the Israelites: ‘I amhas sent me to you.’ ”"
const Ex3_15 = "God also said to Moses, “Say to the Israelites, ‘The Lord, the God of your fathers—the God of Abraham, the God of Isaac and the God of Jacob—has sent me to you.’ “This is my name forever, the name you shall call me from generation to generation."
const Ex3_16 = "“Go, assemble the elders of Israel and say to them, ‘The Lord, the God of your fathers—the God of Abraham, Isaac and Jacob—appeared to me and said: I have watched over you and have seen what has been done to you in Egypt."
const Ex3_17 = "And I have promised to bring you up out of your misery in Egypt into the land of the Canaanites, Hittites, Amorites, Perizzites, Hivites and Jebusites—a land flowing with milk and honey.’"
const Ex3_18 = "“The elders of Israel will listen to you. Then you and the elders are to go to the king of Egypt and say to him, ‘The Lord, the God of the Hebrews, has met with us. Let us take a three-day journey into the wilderness to offer sacrifices to the Lord our God.’"
const Ex3_19 = "But I know that the king of Egypt will not let you go unless a mighty hand compels him."
const Ex3_20 = "So I will stretch out my hand and strike the Egyptians with all the wonders that I will perform among them. After that, he will let you go."
const Ex3_21 = "“And I will make the Egyptians favorably disposed toward this people, so that when you leave you will not go empty-handed."
const Ex3_22 = "Every woman is to ask her neighbor and any woman living in her house for articles of silver and gold and for clothing, which you will put on your sons and daughters. And so you will plunder the Egyptians.”"

const ExodusThree = {
    verses: [Ex3_1,Ex3_2,Ex3_3,Ex3_4,Ex3_5,Ex3_6,Ex3_7,Ex3_8,Ex3_9,Ex3_10,Ex3_11,Ex3_12,Ex3_13,Ex3_14,Ex3_15,Ex3_16,Ex3_17,Ex3_18,Ex3_19,Ex3_20,Ex3_21,Ex3_22]
}

const Exodus = {
    chapter: [ExodusOne, ExodusTwo, ExodusThree]
}

const Lev1_1 = "The Lord called to Moses and spoke to him from the tent of meeting. He said,"
const Lev1_2 = "“Speak to the Israelites and say to them: ‘When anyone among you brings an offering to the Lord, bring as your offering an animal from either the herd or the flock."
const Lev1_3 = "“‘If the offering is a burnt offering from the herd, you are to offer a male without defect. You must present it at the entrance to the tent of meeting so that it will be acceptable to the Lord."
const Lev1_4 = "You are to lay your hand on the head of the burnt offering, and it will be accepted on your behalf to make atonement for you."
const Lev1_5 = "You are to slaughter the young bull before the Lord, and then Aaron’s sons the priests shall bring the blood and splash it against the sides of the altar at the entrance to the tent of meeting."
const Lev1_6 = "You are to skin the burnt offering and cut it into pieces."
const Lev1_7 = "The sons of Aaron the priest are to put fire on the altar and arrange wood on the fire."
const Lev1_8 = "Then Aaron’s sons the priests shall arrange the pieces, including the head and the fat, on the wood that is burning on the altar."
const Lev1_9 = "You are to wash the internal organs and the legs with water, and the priest is to burn all of it on the altar. It is a burnt offering, a food offering, an aroma pleasing to the Lord."
const Lev1_10 = "“‘If the offering is a burnt offering from the flock, from either the sheep or the goats, you are to offer a male without defect."
const Lev1_11 = "You are to slaughter it at the north side of the altar before the Lord, and Aaron’s sons the priests shall splash its blood against the sides of the altar."
const Lev1_12 = "You are to cut it into pieces, and the priest shall arrange them, including the head and the fat, on the wood that is burning on the altar."
const Lev1_13 = "You are to wash the internal organs and the legs with water, and the priest is to bring all of them and burn them on the altar. It is a burnt offering, a food offering, an aroma pleasing to the Lord."
const Lev1_14 = "“‘If the offering to the Lord is a burnt offering of birds, you are to offer a dove or a young pigeon."
const Lev1_15 = "The priest shall bring it to the altar, wring off the head and burn it on the altar; its blood shall be drained out on the side of the altar."
const Lev1_16 = "He is to remove the crop and the feathers[a] and throw them down east of the altar where the ashes are."
const Lev1_17 = "He shall tear it open by the wings, not dividing it completely, and then the priest shall burn it on the wood that is burning on the altar. It is a burnt offering, a food offering, an aroma pleasing to the Lord."

const LeviticusOne = {
    verses: [Lev1_1,Lev1_2,Lev1_3,Lev1_4,Lev1_5,Lev1_6,Lev1_7,Lev1_8,Lev1_9,Lev1_10,Lev1_11,Lev1_12,Lev1_13,Lev1_14,Lev1_15,Lev1_16,Lev1_17]
}

const Lev2_1 = "“‘When anyone brings a grain offering to the Lord, their offering is to be of the finest flour. They are to pour olive oil on it, put incense on it"
const Lev2_2 = "and take it to Aaron’s sons the priests. The priest shall take a handful of the flour and oil, together with all the incense, and burn this as a memorial[a] portion on the altar, a food offering, an aroma pleasing to the Lord."
const Lev2_3 = "The rest of the grain offering belongs to Aaron and his sons; it is a most holy part of the food offerings presented to the Lord."
const Lev2_4 = "“‘If you bring a grain offering baked in an oven, it is to consist of the finest flour: either thick loaves made without yeast and with olive oil mixed in or thin loaves made without yeast and brushed with olive oil."
const Lev2_5 = "If your grain offering is prepared on a griddle, it is to be made of the finest flour mixed with oil, and without yeast."
const Lev2_6 = "Crumble it and pour oil on it; it is a grain offering."
const Lev2_7 = "If your grain offering is cooked in a pan, it is to be made of the finest flour and some olive oil."
const Lev2_8 = "Bring the grain offering made of these things to the Lord; present it to the priest, who shall take it to the altar."
const Lev2_9 = "He shall take out the memorial portion from the grain offering and burn it on the altar as a food offering, an aroma pleasing to the Lord."
const Lev2_10 = "The rest of the grain offering belongs to Aaron and his sons; it is a most holy part of the food offerings presented to the Lord."
const Lev2_11 = "“‘Every grain offering you bring to the Lord must be made without yeast, for you are not to burn any yeast or honey in a food offering presented to the Lord."
const Lev2_12 = "You may bring them to the Lord as an offering of the firstfruits, but they are not to be offered on the altar as a pleasing aroma."
const Lev2_13 = "Season all your grain offerings with salt. Do not leave the salt of the covenant of your God out of your grain offerings; add salt to all your offerings."
const Lev2_14 = "“‘If you bring a grain offering of firstfruits to the Lord, offer crushed heads of new grain roasted in the fire."
const Lev2_15 = "Put oil and incense on it; it is a grain offering."
const Lev2_16 = "The priest shall burn the memorial portion of the crushed grain and the oil, together with all the incense, as a food offering presented to the Lord."

const LeviticusTwo = {
    verses: [Lev2_1,Lev2_2,Lev2_3,Lev2_4,Lev2_5,Lev2_6,Lev2_7,Lev2_8,Lev2_9,Lev2_10,Lev2_11,Lev2_12,Lev2_13,Lev2_14,Lev2_15,Lev2_16]
}

const Lev3_1 = "“‘If your offering is a fellowship offering, and you offer an animal from the herd, whether male or female, you are to present before the Lord an animal without defect."
const Lev3_2 = "You are to lay your hand on the head of your offering and slaughter it at the entrance to the tent of meeting. Then Aaron’s sons the priests shall splash the blood against the sides of the altar."
const Lev3_3 = "From the fellowship offering you are to bring a food offering to the Lord: the internal organs and all the fat that is connected to them, "
const Lev3_4 = "both kidneys with the fat on them near the loins, and the long lobe of the liver, which you will remove with the kidneys."
const Lev3_5 = "Then Aaron’s sons are to burn it on the altar on top of the burnt offering that is lying on the burning wood; it is a food offering, an aroma pleasing to the Lord."
const Lev3_6 = "“‘If you offer an animal from the flock as a fellowship offering to the Lord, you are to offer a male or female without defect."
const Lev3_7 = "If you offer a lamb, you are to present it before the Lord,"
const Lev3_8 = "lay your hand on its head and slaughter it in front of the tent of meeting. Then Aaron’s sons shall splash its blood against the sides of the altar."
const Lev3_9 = "From the fellowship offering you are to bring a food offering to the Lord: its fat, the entire fat tail cut off close to the backbone, the internal organs and all the fat that is connected to them,"
const Lev3_10 = "both kidneys with the fat on them near the loins, and the long lobe of the liver, which you will remove with the kidneys."
const Lev3_11 = "The priest shall burn them on the altar as a food offering presented to the Lord."
const Lev3_12 = "“‘If your offering is a goat, you are to present it before the Lord," 
const Lev3_13 = "lay your hand on its head and slaughter it in front of the tent of meeting. Then Aaron’s sons shall splash its blood against the sides of the altar."
const Lev3_14 = "From what you offer you are to present this food offering to the Lord: the internal organs and all the fat that is connected to them,"
const Lev3_15 = "both kidneys with the fat on them near the loins, and the long lobe of the liver, which you will remove with the kidneys."
const Lev3_16 = "The priest shall burn them on the altar as a food offering, a pleasing aroma. All the fat is the Lord’s."
const Lev3_17 = "“‘This is a lasting ordinance for the generations to come, wherever you live: You must not eat any fat or any blood.’”"

const LeviticusThree = {
    verses: [Lev3_1,Lev3_2,Lev3_3,Lev3_4,Lev3_5,Lev3_6,Lev3_7,Lev3_8,Lev3_9,Lev3_10,Lev3_11,Lev3_12,Lev3_13,Lev3_14,Lev3_15,Lev3_16,Lev3_17]
}

const Leviticus = {
    chapter: [LeviticusOne,LeviticusTwo,LeviticusThree]
}

const Num1_1 = "The Lord spoke to Moses in the tent of meeting in the Desert of Sinai on the first day of the second month of the second year after the Israelites came out of Egypt. He said:"
const Num1_2 = "Take a census of the whole Israelite community by their clans and families, listing every man by name, one by one."
const Num1_3 = "You and Aaron are to count according to their divisions all the men in Israel who are twenty years old or more and able to serve in the army."
const Num1_4 = "One man from each tribe, each of them the head of his family, is to help you."
const Num1_5 = "These are the names of the men who are to assist you: from Reuben, Elizur son of Shedeur;"
const Num1_6 = "from Simeon, Shelumiel son of Zurishaddai;"
const Num1_7 = "from Judah, Nahshon son of Amminadab;"
const Num1_8 = "from Issachar, Nethanel son of Zuar;"
const Num1_9 = "from Zebulun, Eliab son of Helon;"
const Num1_10 = "from the sons of Joseph: from Ephraim, Elishama son of Ammihud; from Manasseh, Gamaliel son of Pedahzur;"
const Num1_11 = "from Benjamin, Abidan son of Gideoni;"
const Num1_12 = "from Dan, Ahiezer son of Ammishaddai;"
const Num1_13 = "from Asher, Pagiel son of Okran;"
const Num1_14 = "from Gad, Eliasaph son of Deuel;"
const Num1_15 = "from Naphtali, Ahira son of Enan.”"
const Num1_16 = "These were the men appointed from the community, the leaders of their ancestral tribes. They were the heads of the clans of Israel."
const Num1_17 = "Moses and Aaron took these men whose names had been specified,"
const Num1_18 = "and they called the whole community together on the first day of the second month. The people registered their ancestry by their clans and families, and the men twenty years old or more were listed by name, one by one,"
const Num1_19 = "as the Lord commanded Moses. And so he counted them in the Desert of Sinai:"
const Num1_20 = "From the descendants of Reuben the firstborn son of Israel: All the men twenty years old or more who were able to serve in the army were listed by name, one by one, according to the records of their clans and families."
const Num1_21 = "The number from the tribe of Reuben was 46,500."
const Num1_22 = "From the descendants of Simeon: All the men twenty years old or more who were able to serve in the army were counted and listed by name, one by one, according to the records of their clans and families."
const Num1_23 = "The number from the tribe of Simeon was 59,300."
const Num1_24 = "From the descendants of Gad: All the men twenty years old or more who were able to serve in the army were listed by name, according to the records of their clans and families."
const Num1_25 = "The number from the tribe of Gad was 45,650."
const Num1_26 = "From the descendants of Judah: All the men twenty years old or more who were able to serve in the army were listed by name, according to the records of their clans and families."
const Num1_27 = "The number from the tribe of Judah was 74,600."
const Num1_28 = "From the descendants of Issachar: All the men twenty years old or more who were able to serve in the army were listed by name, according to the records of their clans and families."
const Num1_29 = "The number from the tribe of Issachar was 54,400."
const Num1_30 = "From the descendants of Zebulun: All the men twenty years old or more who were able to serve in the army were listed by name, according to the records of their clans and families."
const Num1_31 = "The number from the tribe of Zebulun was 57,400."
const Num1_32 = "From the sons of Joseph: From the descendants of Ephraim: All the men twenty years old or more who were able to serve in the army were listed by name, according to the records of their clans and families."
const Num1_33 = "The number from the tribe of Ephraim was 40,500."
const Num1_34 = "From the descendants of Manasseh: All the men twenty years old or more who were able to serve in the army were listed by name, according to the records of their clans and families."
const Num1_35 = "The number from the tribe of Manasseh was 32,200."
const Num1_36 = "From the descendants of Benjamin: All the men twenty years old or more who were able to serve in the army were listed by name, according to the records of their clans and families."
const Num1_37 = "The number from the tribe of Benjamin was 35,400."
const Num1_38 = "From the descendants of Dan: All the men twenty years old or more who were able to serve in the army were listed by name, according to the records of their clans and families."
const Num1_39 = "The number from the tribe of Dan was 62,700."
const Num1_40 = "From the descendants of Asher: All the men twenty years old or more who were able to serve in the army were listed by name, according to the records of their clans and families."
const Num1_41 = "The number from the tribe of Asher was 41,500."
const Num1_42 = "From the descendants of Naphtali: All the men twenty years old or more who were able to serve in the army were listed by name, according to the records of their clans and families."
const Num1_43 = "The number from the tribe of Naphtali was 53,400."
const Num1_44 = "These were the men counted by Moses and Aaron and the twelve leaders of Israel, each one representing his family."
const Num1_45 = "All the Israelites twenty years old or more who were able to serve in Israel’s army were counted according to their families."
const Num1_46 = "The total number was 603,550."
const Num1_47 = "The ancestral tribe of the Levites, however, was not counted along with the others."
const Num1_48 = "The Lord had said to Moses:"
const Num1_49 = "“You must not count the tribe of Levi or include them in the census of the other Israelites."
const Num1_50 = "Instead, appoint the Levites to be in charge of the tabernacle of the covenant law—over all its furnishings and everything belonging to it. They are to carry the tabernacle and all its furnishings; they are to take care of it and encamp around it."
const Num1_51 = "Whenever the tabernacle is to move, the Levites are to take it down, and whenever the tabernacle is to be set up, the Levites shall do it. Anyone else who approaches it is to be put to death."
const Num1_52 = "The Israelites are to set up their tents by divisions, each of them in their own camp under their standard."
const Num1_53 = "The Levites, however, are to set up their tents around the tabernacle of the covenant law so that my wrath will not fall on the Israelite community. The Levites are to be responsible for the care of the tabernacle of the covenant law.”"
const Num1_54 = "The Israelites did all this just as the Lord commanded Moses."

const NumbersOne = {
    verses: [Num1_1,Num1_2,Num1_3,Num1_4,Num1_5,Num1_6,Num1_7,Num1_8,Num1_9,Num1_10,Num1_11,Num1_12,Num1_13,Num1_14,Num1_15,Num1_16,Num1_17,Num1_18,Num1_19,Num1_20,Num1_21,Num1_22,Num1_23,Num1_24,Num1_25,Num1_26,Num1_27,Num1_28,Num1_29,Num1_30,Num1_31,Num1_32,Num1_33,Num1_34,Num1_35,Num1_36,Num1_37,Num1_38,Num1_39,Num1_40,Num1_41,Num1_42,Num1_43,Num1_44,Num1_45,Num1_46,Num1_47,Num1_48,Num1_49,Num1_50,Num1_51,Num1_52,Num1_53,Num1_54]
}

const Num2_1 = "The Lord said to Moses and Aaron:"
const Num2_2 = "“The Israelites are to camp around the tent of meeting some distance from it, each of them under their standard and holding the banners of their family.”"
const Num2_3 = "On the east, toward the sunrise, the divisions of the camp of Judah are to encamp under their standard. The leader of the people of Judah is Nahshon son of Amminadab."
const Num2_4 = "His division numbers 74,600."
const Num2_5 = "The tribe of Issachar will camp next to them. The leader of the people of Issachar is Nethanel son of Zuar."
const Num2_6 = "His division numbers 54,400."
const Num2_7 = "The tribe of Zebulun will be next. The leader of the people of Zebulun is Eliab son of Helon."
const Num2_8 = "His division numbers 57,400."
const Num2_9 = "All the men assigned to the camp of Judah, according to their divisions, number 186,400. They will set out first."
const Num2_10 = "On the south will be the divisions of the camp of Reuben under their standard. The leader of the people of Reuben is Elizur son of Shedeur."
const Num2_11 = "His division numbers 46,500."
const Num2_12 = "The tribe of Simeon will camp next to them. The leader of the people of Simeon is Shelumiel son of Zurishaddai."
const Num2_13 = "His division numbers 59,300."
const Num2_14 = "The tribe of Gad will be next. The leader of the people of Gad is Eliasaph son of Deuel."
const Num2_15 = "His division numbers 45,650."
const Num2_16 = "All the men assigned to the camp of Reuben, according to their divisions, number 151,450. They will set out second."
const Num2_17 = "Then the tent of meeting and the camp of the Levites will set out in the middle of the camps. They will set out in the same order as they encamp, each in their own place under their standard."
const Num2_18 = "On the west will be the divisions of the camp of Ephraim under their standard. The leader of the people of Ephraim is Elishama son of Ammihud."
const Num2_19 = "His division numbers 40,500."
const Num2_20 = "The tribe of Manasseh will be next to them. The leader of the people of Manasseh is Gamaliel son of Pedahzur."
const Num2_21 = "His division numbers 32,200."
const Num2_22 = "The tribe of Benjamin will be next. The leader of the people of Benjamin is Abidan son of Gideoni."
const Num2_23 = "His division numbers 35,400."
const Num2_24 = "All the men assigned to the camp of Ephraim, according to their divisions, number 108,100. They will set out third."
const Num2_25 = "On the north will be the divisions of the camp of Dan under their standard. The leader of the people of Dan is Ahiezer son of Ammishaddai."
const Num2_26 = "His division numbers 62,700."
const Num2_27 = "The tribe of Asher will camp next to them. The leader of the people of Asher is Pagiel son of Okran."
const Num2_28 = "His division numbers 41,500."
const Num2_29 = "The tribe of Naphtali will be next. The leader of the people of Naphtali is Ahira son of Enan."
const Num2_30 = "His division numbers 53,400."
const Num2_31 = "All the men assigned to the camp of Dan number 157,600. They will set out last, under their standards."
const Num2_32 = "These are the Israelites, counted according to their families. All the men in the camps, by their divisions, number 603,550."
const Num2_33 = "The Levites, however, were not counted along with the other Israelites, as the Lord commanded Moses."
const Num2_34 = "So the Israelites did everything the Lord commanded Moses; that is the way they encamped under their standards, and that is the way they set out, each of them with their clan and family."

const NumbersTwo = {
    verses: [Num2_1,Num2_2,Num2_3,Num2_4,Num2_5,Num2_6,Num2_7,Num2_8,Num2_9,Num2_10,Num2_11,Num2_12,Num2_13,Num2_14,Num2_15,Num2_16,Num2_17,Num2_18,Num2_19,Num2_20,Num2_21,Num2_22,Num2_23,Num2_24,Num2_25,Num2_26,Num2_27,Num2_28,Num2_29,Num2_30,Num2_31,Num2_32,Num2_33,Num2_34]
}

const Num3_1 = "This is the account of the family of Aaron and Moses at the time the Lord spoke to Moses at Mount Sinai."
const Num3_2 = "The names of the sons of Aaron were Nadab the firstborn and Abihu, Eleazar and Ithamar."
const Num3_3 = "Those were the names of Aaron’s sons, the anointed priests, who were ordained to serve as priests."
const Num3_4 = "Nadab and Abihu, however, died before the Lord when they made an offering with unauthorized fire before him in the Desert of Sinai. They had no sons, so Eleazar and Ithamar served as priests during the lifetime of their father Aaron."
const Num3_5 = "The Lord said to Moses,"
const Num3_6 = "“Bring the tribe of Levi and present them to Aaron the priest to assist him."
const Num3_7 = "They are to perform duties for him and for the whole community at the tent of meeting by doing the work of the tabernacle."
const Num3_8 = "They are to take care of all the furnishings of the tent of meeting, fulfilling the obligations of the Israelites by doing the work of the tabernacle."
const Num3_9 = "Give the Levites to Aaron and his sons; they are the Israelites who are to be given wholly to him."
const Num3_10 = "Appoint Aaron and his sons to serve as priests; anyone else who approaches the sanctuary is to be put to death.”"
const Num3_11 = "The Lord also said to Moses,"
const Num3_12 = "“I have taken the Levites from among the Israelites in place of the first male offspring of every Israelite woman. The Levites are mine,"
const Num3_13 = "for all the firstborn are mine. When I struck down all the firstborn in Egypt, I set apart for myself every firstborn in Israel, whether human or animal. They are to be mine. I am the Lord.”"
const Num3_14 = "The Lord said to Moses in the Desert of Sinai,"
const Num3_15 = "“Count the Levites by their families and clans. Count every male a month old or more.”"
const Num3_16 = "So Moses counted them, as he was commanded by the word of the Lord."
const Num3_17 = "These were the names of the sons of Levi: Gershon, Kohath and Merari."
const Num3_18 = "These were the names of the Gershonite clans: Libni and Shimei."
const Num3_19 = "The Kohathite clans: Amram, Izhar, Hebron and Uzziel."
const Num3_20 = "The Merarite clans: Mahli and Mushi. These were the Levite clans, according to their families."
const Num3_21 = "To Gershon belonged the clans of the Libnites and Shimeites; these were the Gershonite clans."
const Num3_22 = "The number of all the males a month old or more who were counted was 7,500."
const Num3_23 = "The Gershonite clans were to camp on the west, behind the tabernacle."
const Num3_24 = "The leader of the families of the Gershonites was Eliasaph son of Lael."
const Num3_25 = "At the tent of meeting the Gershonites were responsible for the care of the tabernacle and tent, its coverings, the curtain at the entrance to the tent of meeting,"
const Num3_26 = "the curtains of the courtyard, the curtain at the entrance to the courtyard surrounding the tabernacle and altar, and the ropes—and everything related to their use."
const Num3_27 = "To Kohath belonged the clans of the Amramites, Izharites, Hebronites and Uzzielites; these were the Kohathite clans."
const Num3_28 = "The number of all the males a month old or more was 8,600.[b] The Kohathites were responsible for the care of the sanctuary."
const Num3_29 = "The Kohathite clans were to camp on the south side of the tabernacle."
const Num3_30 = "The leader of the families of the Kohathite clans was Elizaphan son of Uzziel. "
const Num3_31 = "They were responsible for the care of the ark, the table, the lampstand, the altars, the articles of the sanctuary used in ministering, the curtain, and everything related to their use."
const Num3_32 = "The chief leader of the Levites was Eleazar son of Aaron, the priest. He was appointed over those who were responsible for the care of the sanctuary."
const Num3_33 = "To Merari belonged the clans of the Mahlites and the Mushites; these were the Merarite clans."
const Num3_34 = "The number of all the males a month old or more who were counted was 6,200. "
const Num3_35 = "The leader of the families of the Merarite clans was Zuriel son of Abihail; they were to camp on the north side of the tabernacle."
const Num3_36 = "The Merarites were appointed to take care of the frames of the tabernacle, its crossbars, posts, bases, all its equipment, and everything related to their use,"
const Num3_37 = "as well as the posts of the surrounding courtyard with their bases, tent pegs and ropes."
const Num3_38 = "Moses and Aaron and his sons were to camp to the east of the tabernacle, toward the sunrise, in front of the tent of meeting. They were responsible for the care of the sanctuary on behalf of the Israelites. Anyone else who approached the sanctuary was to be put to death."
const Num3_39 = "The total number of Levites counted at the Lord’s command by Moses and Aaron according to their clans, including every male a month old or more, was 22,000."
const Num3_40 = "The Lord said to Moses, “Count all the firstborn Israelite males who are a month old or more and make a list of their names."
const Num3_41 = "Take the Levites for me in place of all the firstborn of the Israelites, and the livestock of the Levites in place of all the firstborn of the livestock of the Israelites. I am the Lord.”"
const Num3_42 = "So Moses counted all the firstborn of the Israelites, as the Lord commanded him."
const Num3_43 = "The total number of firstborn males a month old or more, listed by name, was 22,273."
const Num3_44 = "The Lord also said to Moses,"
const Num3_45 = "“Take the Levites in place of all the firstborn of Israel, and the livestock of the Levites in place of their livestock. The Levites are to be mine. I am the Lord."
const Num3_46 = "To redeem the 273 firstborn Israelites who exceed the number of the Levites,"
const Num3_47 = "collect five shekels for each one, according to the sanctuary shekel, which weighs twenty gerahs."
const Num3_48 = "Give the money for the redemption of the additional Israelites to Aaron and his sons.”"
const Num3_49 = "So Moses collected the redemption money from those who exceeded the number redeemed by the Levites."
const Num3_50 = "From the firstborn of the Israelites he collected silver weighing 1,365 shekels,[d] according to the sanctuary shekel."
const Num3_51 = "Moses gave the redemption money to Aaron and his sons, as he was commanded by the word of the Lord."

const NumbersThree = {
    verses: [Num3_1,Num3_2,Num3_3,Num3_4,Num3_5,Num3_6,Num3_7,Num3_8,Num3_9,Num3_10,Num3_11,Num3_12,Num3_13,Num3_14,Num3_15,Num3_16,Num3_17,Num3_18,Num3_19,Num3_20,Num3_21,Num3_22,Num3_23,Num3_24,Num3_25,Num3_26,Num3_27,Num3_28,Num3_29,Num3_30,Num3_31,Num3_32,Num3_33,Num3_34,Num3_35,Num3_36,Num3_37,Num3_38,Num3_39,Num3_40,Num3_41,Num3_42,Num3_43,Num3_44,Num3_45,Num3_46,Num3_47,Num3_48,Num3_49,Num3_50,Num3_51]
}

const Numbers = {
    chapter: [NumbersOne, NumbersTwo,NumbersThree]
}

const Deut1_1 = "These are the words Moses spoke to all Israel in the wilderness east of the Jordan—that is, in the Arabah—opposite Suph, between Paran and Tophel, Laban, Hazeroth and Dizahab."
const Deut1_2 = "(It takes eleven days to go from Horeb to Kadesh Barnea by the Mount Seir road.)"
const Deut1_3 = "In the fortieth year, on the first day of the eleventh month, Moses proclaimed to the Israelites all that the Lord had commanded him concerning them."
const Deut1_4 = "This was after he had defeated Sihon king of the Amorites, who reigned in Heshbon, and at Edrei had defeated Og king of Bashan, who reigned in Ashtaroth."
const Deut1_5 = "East of the Jordan in the territory of Moab, Moses began to expound this law, saying:"
const Deut1_6 = "The Lord our God said to us at Horeb, “You have stayed long enough at this mountain."
const Deut1_7 = " Break camp and advance into the hill country of the Amorites; go to all the neighboring peoples in the Arabah, in the mountains, in the western foothills, in the Negev and along the coast, to the land of the Canaanites and to Lebanon, as far as the great river, the Euphrates."
const Deut1_8 = "See, I have given you this land. Go in and take possession of the land the Lord swore he would give to your fathers—to Abraham, Isaac and Jacob—and to their descendants after them.”"
const Deut1_9 = "At that time I said to you, “You are too heavy a burden for me to carry alone."
const Deut1_10 = "The Lord your God has increased your numbers so that today you are as numerous as the stars in the sky."
const Deut1_11 = "May the Lord, the God of your ancestors, increase you a thousand times and bless you as he has promised!"
const Deut1_12 = "But how can I bear your problems and your burdens and your disputes all by myself?"
const Deut1_13 = "Choose some wise, understanding and respected men from each of your tribes, and I will set them over you.”"
const Deut1_14 = "You answered me, “What you propose to do is good.”"
const Deut1_15 = "So I took the leading men of your tribes, wise and respected men, and appointed them to have authority over you—as commanders of thousands, of hundreds, of fifties and of tens and as tribal officials."
const Deut1_16 = "And I charged your judges at that time, “Hear the disputes between your people and judge fairly, whether the case is between two Israelites or between an Israelite and a foreigner residing among you."
const Deut1_17 = "Do not show partiality in judging; hear both small and great alike. Do not be afraid of anyone, for judgment belongs to God. Bring me any case too hard for you, and I will hear it.”"
const Deut1_18 = "And at that time I told you everything you were to do."
const Deut1_19 = "Then, as the Lord our God commanded us, we set out from Horeb and went toward the hill country of the Amorites through all that vast and dreadful wilderness that you have seen, and so we reached Kadesh Barnea."
const Deut1_20 = "Then I said to you, “You have reached the hill country of the Amorites, which the Lord our God is giving us."
const Deut1_21 = "See, the Lord your God has given you the land. Go up and take possession of it as the Lord, the God of your ancestors, told you. Do not be afraid; do not be discouraged.”"
const Deut1_22 = "Then all of you came to me and said, “Let us send men ahead to spy out the land for us and bring back a report about the route we are to take and the towns we will come to.”"
const Deut1_23 = "The idea seemed good to me; so I selected twelve of you, one man from each tribe."
const Deut1_24 = "They left and went up into the hill country, and came to the Valley of Eshkol and explored it."
const Deut1_25 = "Taking with them some of the fruit of the land, they brought it down to us and reported, “It is a good land that the Lord our God is giving us.”"
const Deut1_26 = "But you were unwilling to go up; you rebelled against the command of the Lord your God."
const Deut1_27 = "You grumbled in your tents and said, “The Lord hates us; so he brought us out of Egypt to deliver us into the hands of the Amorites to destroy us."
const Deut1_28 = "Where can we go? Our brothers have made our hearts melt in fear. They say, ‘The people are stronger and taller than we are; the cities are large, with walls up to the sky. We even saw the Anakites there.’”"
const Deut1_29 = "Then I said to you, “Do not be terrified; do not be afraid of them."
const Deut1_30 = "The Lord your God, who is going before you, will fight for you, as he did for you in Egypt, before your very eyes, "
const Deut1_31 = "and in the wilderness. There you saw how the Lord your God carried you, as a father carries his son, all the way you went until you reached this place.”"
const Deut1_32 = "In spite of this, you did not trust in the Lord your God,"
const Deut1_33 = "who went ahead of you on your journey, in fire by night and in a cloud by day, to search out places for you to camp and to show you the way you should go."
const Deut1_34 = "When the Lord heard what you said, he was angry and solemnly swore:"
const Deut1_35 = "“No one from this evil generation shall see the good land I swore to give your ancestors,"
const Deut1_36 = "except Caleb son of Jephunneh. He will see it, and I will give him and his descendants the land he set his feet on, because he followed the Lord wholeheartedly.”"
const Deut1_37 = "Because of you the Lord became angry with me also and said, “You shall not enter it, either."
const Deut1_38 = "But your assistant, Joshua son of Nun, will enter it. Encourage him, because he will lead Israel to inherit it."
const Deut1_39 = "And the little ones that you said would be taken captive, your children who do not yet know good from bad—they will enter the land. I will give it to them and they will take possession of it."
const Duet1_40 = "But as for you, turn around and set out toward the desert along the route to the Red Sea.”"
const Deut1_41 = "Then you replied, “We have sinned against the Lord. We will go up and fight, as the Lord our God commanded us.” So every one of you put on his weapons, thinking it easy to go up into the hill country."
const Deut1_42 = "But the Lord said to me, “Tell them, ‘Do not go up and fight, because I will not be with you. You will be defeated by your enemies.’”"
const Deut1_43 = "So I told you, but you would not listen. You rebelled against the Lord’s command and in your arrogance you marched up into the hill country."
const Deut1_44 = "The Amorites who lived in those hills came out against you; they chased you like a swarm of bees and beat you down from Seir all the way to Hormah. "
const Deut1_45 = "You came back and wept before the Lord, but he paid no attention to your weeping and turned a deaf ear to you."
const Deut1_46 = "And so you stayed in Kadesh many days—all the time you spent there."

const DeuteronomyOne = {
    verses: [Deut1_1, Deut1_2,Deut1_3,Deut1_4,Deut1_5,Deut1_6,Deut1_7,Deut1_8,Deut1_9,Deut1_10,Deut1_12,Deut1_13,Deut1_14,Deut1_15,Deut1_16,Deut1_17,Deut1_18,Deut1_19,Deut1_20,Deut1_21,Deut1_22,Deut1_23,Deut1_24,Deut1_25,Deut1_26,Deut1_27,Deut1_28,Deut1_29,Deut1_30,Deut1_31,Deut1_32,Deut1_33,Deut1_34,Deut1_35,Deut1_36,Deut1_37,Deut1_38,Deut1_39,Duet1_40,Deut1_41,Deut1_42,Deut1_43,Deut1_44,Deut1_45,Deut1_46]
}

const Deuteronomy = {
    chapter: [DeuteronomyOne]
}

const Josh1_1 = "After the death of Moses the servant of the Lord, the Lord said to Joshua son of Nun, Moses’ aide:"
const Josh1_2 = "“Moses my servant is dead. Now then, you and all these people, get ready to cross the Jordan River into the land I am about to give to them—to the Israelites. "
const Josh1_3 = "I will give you every place where you set your foot, as I promised Moses."
const Josh1_4 = "Your territory will extend from the desert to Lebanon, and from the great river, the Euphrates—all the Hittite country—to the Mediterranean Sea in the west."
const Josh1_5 = "No one will be able to stand against you all the days of your life. As I was with Moses, so I will be with you; I will never leave you nor forsake you."
const Josh1_6 = "Be strong and courageous, because you will lead these people to inherit the land I swore to their ancestors to give them."
const Josh1_7 = "“Be strong and very courageous. Be careful to obey all the law my servant Moses gave you; do not turn from it to the right or to the left, that you may be successful wherever you go."
const Josh1_8 = " Keep this Book of the Law always on your lips; meditate on it day and night, so that you may be careful to do everything written in it. Then you will be prosperous and successful."
const Josh1_9 = "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.”"
const Josh1_10 = "So Joshua ordered the officers of the people:"
const Josh1_11 = "“Go through the camp and tell the people, ‘Get your provisions ready. Three days from now you will cross the Jordan here to go in and take possession of the land the Lord your God is giving you for your own.’”"
const Josh1_12 = "But to the Reubenites, the Gadites and the half-tribe of Manasseh, Joshua said,"
const Josh1_13 = "“Remember the command that Moses the servant of the Lord gave you after he said, ‘The Lord your God will give you rest by giving you this land.’"
const Josh1_14 = "Your wives, your children and your livestock may stay in the land that Moses gave you east of the Jordan, but all your fighting men, ready for battle, must cross over ahead of your fellow Israelites. You are to help them"
const Josh1_15 = "until the Lord gives them rest, as he has done for you, and until they too have taken possession of the land the Lord your God is giving them. After that, you may go back and occupy your own land, which Moses the servant of the Lord gave you east of the Jordan toward the sunrise.”"
const Josh1_16 = "Then they answered Joshua, “Whatever you have commanded us we will do, and wherever you send us we will go."
const Josh1_17 = "Just as we fully obeyed Moses, so we will obey you. Only may the Lord your God be with you as he was with Moses."
const Josh1_18 = "Whoever rebels against your word and does not obey it, whatever you may command them, will be put to death. Only be strong and courageous!”"

const JoshuaOne = {
    verses: [Josh1_1,Josh1_2, Josh1_3,Josh1_4,Josh1_5,Josh1_6,Josh1_7,Josh1_8,Josh1_9,Josh1_10,Josh1_11,Josh1_12,Josh1_13,Josh1_14,Josh1_15,Josh1_16,Josh1_17,Josh1_18]
}

const Joshua = {
    chapter: [JoshuaOne]
}

const Judg1_1 = "After the death of Joshua, the Israelites asked the Lord, “Who of us is to go up first to fight against the Canaanites?”"
const Judg1_2 = "The Lord answered, “Judah shall go up; I have given the land into their hands.”"
const Judg1_3 = "The men of Judah then said to the Simeonites their fellow Israelites, “Come up with us into the territory allotted to us, to fight against the Canaanites. We in turn will go with you into yours.” So the Simeonites went with them."
const Judg1_4 = "When Judah attacked, the Lord gave the Canaanites and Perizzites into their hands, and they struck down ten thousand men at Bezek."
const Judg1_5 = " It was there that they found Adoni-Bezek and fought against him, putting to rout the Canaanites and Perizzites."
const Judg1_6 = "Adoni-Bezek fled, but they chased him and caught him, and cut off his thumbs and big toes."
const Judg1_7 = "Then Adoni-Bezek said, “Seventy kings with their thumbs and big toes cut off have picked up scraps under my table. Now God has paid me back for what I did to them.” They brought him to Jerusalem, and he died there."
const Judg1_8 = "The men of Judah attacked Jerusalem also and took it. They put the city to the sword and set it on fire."
const Judg1_9 = "After that, Judah went down to fight against the Canaanites living in the hill country, the Negev and the western foothills."
const Judg1_10 = "They advanced against the Canaanites living in Hebron (formerly called Kiriath Arba) and defeated Sheshai, Ahiman and Talmai."
const Judg1_11 = "From there they advanced against the people living in Debir (formerly called Kiriath Sepher)."
const Judg1_12 = "And Caleb said, “I will give my daughter Aksah in marriage to the man who attacks and captures Kiriath Sepher.”"
const Judg1_13 = "Othniel son of Kenaz, Caleb’s younger brother, took it; so Caleb gave his daughter Aksah to him in marriage."
const Judg1_14 = "One day when she came to Othniel, she urged him to ask her father for a field. When she got off her donkey, Caleb asked her, “What can I do for you?”"
const Judg1_15 = "She replied, “Do me a special favor. Since you have given me land in the Negev, give me also springs of water.” So Caleb gave her the upper and lower springs."
const Judg1_16 = "The descendants of Moses’ father-in-law, the Kenite, went up from the City of Palms[b] with the people of Judah to live among the inhabitants of the Desert of Judah in the Negev near Arad."
const Judg1_17 = "Then the men of Judah went with the Simeonites their fellow Israelites and attacked the Canaanites living in Zephath, and they totally destroyed the city. Therefore it was called Hormah."
const Judg1_18 = "Judah also took Gaza, Ashkelon and Ekron—each city with its territory."
const Judg1_19 = "The Lord was with the men of Judah. They took possession of the hill country, but they were unable to drive the people from the plains, because they had chariots fitted with iron."
const Judg1_20 = "As Moses had promised, Hebron was given to Caleb, who drove from it the three sons of Anak."
const Judg1_21 = "The Benjamites, however, did not drive out the Jebusites, who were living in Jerusalem; to this day the Jebusites live there with the Benjamites."
const Judg1_22 = "Now the tribes of Joseph attacked Bethel, and the Lord was with them."
const Judg1_23 = "When they sent men to spy out Bethel (formerly called Luz), "
const Judg1_24 = "the spies saw a man coming out of the city and they said to him, “Show us how to get into the city and we will see that you are treated well.”"
const Judg1_25 = " So he showed them, and they put the city to the sword but spared the man and his whole family."
const Judg1_26 = "He then went to the land of the Hittites, where he built a city and called it Luz, which is its name to this day."
const Judg1_27 = "But Manasseh did not drive out the people of Beth Shan or Taanach or Dor or Ibleam or Megiddo and their surrounding settlements, for the Canaanites were determined to live in that land."
const Judg1_28 = "When Israel became strong, they pressed the Canaanites into forced labor but never drove them out completely."
const Judg1_29 = "Nor did Ephraim drive out the Canaanites living in Gezer, but the Canaanites continued to live there among them."
const Judg1_30 = "Neither did Zebulun drive out the Canaanites living in Kitron or Nahalol, so these Canaanites lived among them, but Zebulun did subject them to forced labor."
const Judg1_31 = "Nor did Asher drive out those living in Akko or Sidon or Ahlab or Akzib or Helbah or Aphek or Rehob."
const Judg1_32 = "The Asherites lived among the Canaanite inhabitants of the land because they did not drive them out."
const Judg1_33 = "Neither did Naphtali drive out those living in Beth Shemesh or Beth Anath; but the Naphtalites too lived among the Canaanite inhabitants of the land, and those living in Beth Shemesh and Beth Anath became forced laborers for them."
const Judg1_34 = "The Amorites confined the Danites to the hill country, not allowing them to come down into the plain."
const Judg1_35 = "And the Amorites were determined also to hold out in Mount Heres, Aijalon and Shaalbim, but when the power of the tribes of Joseph increased, they too were pressed into forced labor."
const Judg1_36 = "The boundary of the Amorites was from Scorpion Pass to Sela and beyond."

const JudgesOne = {
    verses: [Judg1_1,Judg1_2,Judg1_3,Judg1_4,Judg1_5,Judg1_6,Judg1_7,Judg1_8,Judg1_9,Judg1_10,Judg1_11,Judg1_12,Judg1_13,Judg1_14,Judg1_15,Judg1_16,Judg1_17,Judg1_18,Judg1_19,Judg1_20,Judg1_21,Judg1_22,Judg1_23,Judg1_24,Judg1_25,Judg1_26,Judg1_27,Judg1_28,Judg1_29,Judg1_30,Judg1_31,Judg1_32,Judg1_33,Judg1_34,Judg1_35,Judg1_36]
}

const Judges = {
    chapter: [JudgesOne]
}

const bible = {
    books: [Genesis, Exodus, Leviticus, Numbers, Deuteronomy, Joshua]
}

function randomVerse() {
    min = 0
    max = Math.floor(bible.books.length)
   let randomBook =  Math.floor(Math.random() * (max - min) + min)
   answerBook = books[randomBook]
   tempBook = bible.books[randomBook]

   max = Math.floor(tempBook.chapter.length)
   let randomChapter = Math.floor(Math.random() * (max - min) + min)
   answerChapter = tempBook.chapter[randomChapter]
   answerChapterNumber = randomChapter + 1

   max = Math.floor(answerChapter.verses.length)
   let randomVerseNumber = Math.floor(Math.random() * (max - min) + min)
   let randomNumber = 0

    if(!answerChapter.verses[randomVerseNumber + 5]){
        randomNumber = answerChapter.verses.length - 7
    }else{
        randomNumber = randomVerseNumber
    }

    answerFirstVerse = answerChapter.verses[randomNumber]
    answerSecondVerse = answerChapter.verses[randomNumber + 1]
    answerThirdVerse = answerChapter.verses[randomNumber + 2]
    answerFourthVerse = answerChapter.verses[randomNumber + 3]
    answerFifthVerse = answerChapter.verses[randomNumber + 4]
    answerSixthVerse = answerChapter.verses[randomNumber + 5]
    answerVerseNumber = randomNumber + 1

}