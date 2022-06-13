let answerBook = ""
let tempBook = ""
let answerChapter = ""
let answerVerse = ""

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

const bible = {
    books: [Genesis, Exodus]
}

function randomVerse() {
    min = 0
    max = Math.floor(bible.books.length)
   let randomBook =  Math.floor(Math.random() * (max - min) + min)
   answerBook = books[randomBook]
   tempBook = bible.books[randomBook]

   console.log(answerBook)

   max = Math.floor(answerBook.length)
   let randomChapter = Math.floor(Math.random() * (max - min) + min)
   answerChapter = tempBook.chapter[randomChapter]

   max = Math.floor(answerChapter.length)
   let randomVerse = Math.floor(Math.random() * (max - min) + min)
    answerVerse = answerChapter.verses[randomVerse]

   console.log(answerChapter)

    console.log(answerVerse)
}
randomVerse()