export default class Zeroth {
  prestart() {
    sc.MessageModel.inject({
      showMessage(person, text, someAutoContinueThing) {
        if (person == "main.lea") {
          const zerothQuotes = [
            "we all have fantasize bout it",
            "we are very much back",
            "vlone thug spotted in mislata almassil i repeat, a true vlone soldier was spotted in mislata almassil",
            "am i on my period?",
            "bra do i have the spine of an amoeba or what",
            "chillin with my homies dire dire docking",
            "im so fuckin ssleeeeleeepeptyyyyhyyyyyyy",
            "FELLAS, WHAT CAN I SAY. PEAK IS BACK IN THE MENU",
            "CHAT IS THIS REAL?",
            "NEED THIS ON MY MOUTH RIGHT NOW",
            "im not doing this, shit is mad boring",
            "and that is my mental excuse to watch monogatari for the 3rd time, but now with the commentary audio",
            "at least i dont like astrology",
            "when theres cider and chip flavoured chips at the function",
            "shoutours windows explorer billboard",
            "that 9 year old tearout kid may be cracked or whatever but he probably dont got any vetements so why should i care honestly",
            "too much yearning and not enough Earning for real",
            "im glad kissinger finally kicked the bucket, he did so 100 years too late unfortunately",
            "rest in piss bozo",
            "thats me",
            "man these truckers get nasty with it",
            "what takes the loads gets the miles",
            "going sound voltex on the pussy",
            "my head too bug but ny hair cool at least",
            "no wonder i turned out this annoying",
            "good socks are underappreciated",
            "this is so real",
            "okay but i need to know if the craziest nu metal moments guy is being indicted of securities fraud or not",
            "bro in them laceless rick owens bozo tractor boots????",
            "you know youre deep into fashion when you can throw fits that cost more than your whole ass car",
            "why you, as a man, be shoppin",
            "she call me venezuela the way i be printing this money",
            "france is a horrid country but they crank out a good twink every once in a while so ngl im afraid i gotta give them props on that",
            "me and my drillas getting vampire strange",
            "top shelf zaza disrupted my slider padding",
            "cagando en schiphol parte 2",
            "cagando en el aeropuerto",
            "call her patchouli the way she givin me knowledge. gas or nah",
            "im barely more heavy than the average girl",
            "thats whats up!!",
            "if companies can outsource, so can I. Gonna start my own offshore oil rig company. ZAPATA & ZEROTH OIL CONGLOMERATES. the whopping 2 bucks in profits i'll make, i will pay my workers maybe like 3 cents.",
            "that's showbiz baybe",
            'im not into this "tiny drop" thing. fuck that. fuck huge drops also. i\'m a man of the people. i make average sized drops only. you should never be shameful about your drop size',
            "what's the point of looking masculine when girls look better anyway",
            "i have 69,24 on my paypal i Need 74 cents RIGHT NOW to buy persona 3 reload i will do Whatever, no Questions asked right now Please i Need the VIDEO GAME PLEASE GIVE ME 74 CENTS I BEG I WILL DO ANYTHING.",
            "everytime in a store and they ask me cash or card im like?????? since when i can pay for stuff with my pronouns and a do not interact list",
            "whoever invented the 5 string bass.... needs their shit sucked! asap!!!",
            "being on my mid 20s is crazy because i should probably be thinking about mortagages and loans n shit meanwhile here i am in my bedroom making silly wubz",
            "WE WILL BE HEARING",
            "NOOOO THEY TURNED ME INTO A MARKETABLE CHARM AAAAAAAAAAGGGGG",
            "and by it, haha, well. letys jus say. my peanits",
            "my mix so fucking bad it turned my interface into a focuswrong",
            "man this FUCKING SUCKS all my work down the drain. im so mad rn. i honestly think the only way i could recover this is with some help... from the girl reading this",
            "oh fuck",
            "at some point of your career you become a snobby bitch about reverbs, you die, or both",
            "can i get 1 (one) follower on soundcloud perchance",
            "ive been fighting my demons",
            "thanks for an orwellian number of followers",
            "something malicious is brewing in 3 hours...........",
            "goin on vacation",
            "(USER WAS THROWN INTO A MOAT FULL OF CROCODILES FOR THIS POST)",
            "the reason why five guys is not as big as mcdolands is because they lack a guy. they have everything covered except for the last guy. why would you go to five guys when they dont have upright bass. disgusting",
            "the reason why the ps3 was so difficult to program is because the cpu had 7 cores: this makes it very unstable. what does the 7th core do. saxophone? give me a break. with 6 cores it wouldve been the biggest seller in videogame history",
            "driving is sick. youre telling me that to go somewhere im forced to fidget with a stick and listen to music? dunno man that sounds like a fuckin great time",
            "how naive i was",
            "honestly it works",
            "im fine being called a subdominant",
            "JOIN ON THE SONOBUS ROOM NAME: balls",
            "waking up at 6am, cold showers, meditation and then going full force at it",
            "you should take the fucking read the screen pill you lobotomite",
            "in greek times that + my hips, phew they would turn me inside out ill tell you that much",
            "you cannot imagine how big is the mountain of dicks that i suck",
            "bro you have peanuts for a brain",
            "but i mean, summrs 2019 run tho? he really was him...",
            "this DTM shit get serious, get ready to die behind it - Youngboy NBA",
            "making a patreon and the top trim is just called hole",
            "its called im ovulating and im laying eggs right now as we speak makes high pitched grunts",
            "bro on my son we really got the best glocks in the city! cmon now",
            "please IM READY. IM TRYNA PO UP",
            "my shits are very polite mind you",
            "you grab the foreskins from the foreskin vault",
            "because we're always on our phones",
            "saven ablar español?????",
            "*squidward voice* i am pregnant in the pussy",
            "heard the uk is in a recession right now, rip bozo",
            "i have targeted individual swag",
            "lil bro think he carti",
            "yotsugi ononoki headcanon: she's exactly the same but she listens to yung lean",
            "kinda fucked up that the only kpop song i like is called deez nuts",
            "#WorldPeace",
            "its been raining all day......... the cream dream",
            "shut up DAD!!! im listenin to pat metheny group PHASE DANCE!!!!!!!!!",
            "im lactose tolerant. i be suckin dem toes",
            "many such cases",
            "manifesting i hope you get run over 22 times by a ford f150",
            "going to japan exclusively to soak while an earthquake is going on",
            "bringing popeyes on a bag to the metro while listenin to voltra - iso beam, such is the life of the gamer",
            "SHADOW CORP INCORPORATED WE ONLY DO CLEAN JOBS HERE",
            "im aware of my crimes. and i will keep comitting them let me tell you",
            "local spanish man gets ARRESTED due to 135bpm crimes. what a deplorable story",
            "Barack Obama unveils his annual summer playlist.",
            "fuck you *starts rotating*",
            "hi turns out im dj khaled",
            "lmao bro's broke",
            "HOLY SHIT I JUST REALIZED BREAKFAST IS CALLED LIKE THAT BECAUSE YOU BREAK THE FAST. WHAT?",
            "i swear im a human adult and i dont have the brain power of a house fly",
            "hi im in the process of Duplicating",
            "predictive text is just autotune but for conversations",
            "food for thought Folks",
            "this is whats up",
            "my two biggest enemies in the world: twink death and the state of israel",
            "on all levels except physical, i am myself. physically im some kind of weird goblin or something",
            "good cock and ball will change your life.",
            "i may look happy, but in the inside, im suffering (i scratched my balls too hard and now they hurt)",
            'ill have you know all you "woke liberals" that i just got new perfume and it smells floral asf. i have the delicate scent of many powerful flowers. bow upon my pleasant and soft vibes',
            "in the city. walking. listening to marlon dubois. buying my weird sweet ass chinese teas. this is life. this is what its all about. many dont understand this.",
            "this the typa shit i be on jus chillin in my lane",
            "babe dont stop im so close to; re:encoding",
            "that blue haired hoe on bocchi the rock she like me SHE JUST LIKE ME",
            "call her rumble the way she's a killa in my jungl  *gets shot in the head*",
            "nyan nyan bitch",
            "i havent showered this year. nor the previous. i havent showered ever. they keep me in an locked airtight room bcs if the ozone layer comes in contact with me the whole earth will explode",
            "scratching my phantom balls",
            "shutting down the gucci store",
            "why the fuck does my brain gotta care about any of this this sucks",
            "if my brain was just a bit less normative i would be probably be doing youtube videos right now like Does Acclaimed Monogatari Series Chartacter Yotsugi Ononoki Fw Slayworld? What Does She Think About The Iayze Situation?",
            "gas is finally below 2 euros thank you brandon",
            "aya shameimaru y yo somos la misma persona, la unica diferencia que antes me suicido que hacer periodismo pero por lo demás todo guay",
            "i hope people see me as someone who has insightful and nuanced knowledge about a myriad of topics, that can have deep conversations about anything, but that also posts about having their nipples sucked by a vending machine at 3am",
            "milfquel",
            "peters cock outro kinda has christian messages",
            "americans rlly are something else huh",
            "bro whoever invented girl's backs and shoulders? you popped off. that shit is so cool",
            "you can have sex on the nissan cube",
            "your mom suck so good she my head canon",
            "yeah nah im killing myself",
            "tryna get the bag with music call that Euro Vision",
            "EVERYBODY SALUTE THE GOAT",
            "Did You Know? In the manual for Touhou 12: Undefined Fantastic Object, ZUN confirmed that Patchouli Knowledge fucks wit RXKNephew",
            "normalize this, normalize that.... fuck off!!!!!! i just want to normalize taking a nap!!! a slewpy sleep! dozing off!! blankie on the sofa zz!!!!! suck my dick!!!!!!!!!",
            'love hanging around in discord with my dear friends "mike row toe nail", "#1 joe biden fan liberianflag liberianflag liberianflag" and "will femboy for ultralite mk5". such lovely people!',
            "anybody between the ages of 22 and 30 want to make me gag and sometimes even vomit",
            "being a mathematician and a bottom is essentially the same all you do is spam random letters",
            "need me an israeli bitch to give me the iron dome",
            "El Genital Masculino Conocido Como Testículo Es La Mejor Obra De Nuestro Padre Dios Y Debemos Respetarla Cumpliendo Su Función Vital: Meter Los Cojones En Un Bote De Medio Litro de Salsa Barbacoa",
            "fuckign wit a frecnh girl she givin me Sloppé Toppé",
            "aight good go back to facebook now",
            "anybosy here listen to bladee",
            "just got hospitalized for my coupon addiction. they put me in the re ward",
            '"you look gnc" thanks! i love the game nintendo cube',
            "i work in the marketing department at the cat neutering multinational",
            "i like squats but it makes my pussy muscles sore",
            "A FRIEND MADE AN NFT OF A PICTURE OF MY FUCKING BALLS",
            "my name is zeroth aka misatovore aka targetedindividualswag",
            "started from the bottom now we're here. still at the bottom",
            "who up pondering they orb",
            "hello guys i will put speaker on my penith",
            "no luck for spanish drainers..... damn",
            "is america ready for dnb? i dont know. i know im not. if i hear a drum or a bass i get really scared. please help",
            "im about to sell my soul to either the devil or the hyperdevil, his even more evil and malignant cousin",
            "im preeeeeeety drunk rn i would steal some random public infraestructure like gater but i amnhelf by chains i probably would tho",
            "good morning (sorry for my bad english)",
            "i'm straight jorking it",
            "dude my body is so funny i put a lil bit more sugar in my coffee than normal and now my entire being is vibrating and i just put 17 tuning changes on a song #sorry",
            "we are on the lao gan ma war on the side of lao gan ma",
            "okay this is gas",
            "your tl probably looks like a 50 cent song. many men. maany many many men",
            "i want to look girly not because i want to be a woman, but because my sister met a lesbian neurology uni professor who also does vtubing on the side and is kind of a mess irl",
            "carpet bombing atlus' headquarters until they add japanese guy with a beanie whos into jumpstyle and izzy kramer to the cast of the upcoming persona game",
            "is making a dubstep song doing skrillex fanfiction? discuss",
            "Okay I'll bite, the fuck is locktober?",
            "im basically going for aweminus snare kind of heavy but more polished",
            "i doubt you guys have what it takes to be a true #malelesbian",
            "a bit of cancer is never bad",
            "we all know what your role would be in omegaverse society",
            "yo Midas man can you send me the logic tubular bells",
            "ONE THOUSAND AND ONE NIGHTS IT WAS ALI BABA AND THE FORTY THIEVES",
            "man I can't even mix in peace",
            "also the streets have been saying 'hey miquel, you don't use enough aave! up should up thestats",
            "you gotta tap into the streets, they have the answer",
            "maslow hierarchy of needs, its all painted on top saying: pussy from a girl who is mean in general and very coarse with ppl she dislikes but somehow not mean to you",
            "jay eazy fucks with tsukihime but not with edging",
            "fuck anime bruh, why do they play on our deepest fantasies. 30 cent donuts.............. not even in my dreams i can come up with something like this",
            "LMAO ppl postin abt being creamed on 24/7",
            "its fucked up. these FEMALES. they be lUBIN THEIR SWTICHES",
            "time to inject honey into the bloodsteam",
            "you sound good, suck my nuts",
            "my body is an amalgamation of motorola 68000's doing various wacky tacks",
            "THIS APP PAYS YOU TO WALK TAP IN ->",
            "carpet bombing atlus' headquarters until they add japanese guy with a beanie whos into jumpstyle and izzy kramer to the cast of the upcoming persona game",
            "lettin the money speak to my ears but its a pair of DIs instead. oooooo my balanced signals.",
            "guy/girl who is extremely incompetent at what they do: ughhh my impostor syndrome :(",
            "scatching my phantom balls",
            "NEED THIS ON MY MOUTH RIGHT NOW",
            "first cishet guy to be somewhat into skincare and not be ran thru into the ground",
            "my fbi agent is the pretty girl reading this",
            "to all my lesbians: too much yearning and not enough Earning for real",
            "stop with all that fanfiction yuri, yu really need to get ur bands up. you got it sis. go get that bag",
            "RIP bozo",
            "Conrad's body could rock anybody's world. At the same time. Such is the power that he wields.",
            "you cannot get more real than this, it's pure aura and nothing else",
            "this is my bible. this is my theory. Six guys AND ONLY SIX GUYS mashing it out. and the guitar is doubled by somebody singing. thats whats fucking up",
            "they call me womb, weapon of mass birth",
            "anyways you're smoking absolute reefer",
            "im thinkin about those chords fr",
            "i am SHORT and i have MEATY THIGHS that makes me suffer when i want pants but the ladies love that. i fight an inner battle with myself",
						"guy making this either has a life expentancy of 28 years, or he's like the number one on the 2024 MDVA groomer power ranking",
            "why you, as a man, be shoppin"
          ];
          const randomQuote =
            zerothQuotes[Math.floor(Math.random() * zerothQuotes.length)];
          this.parent(person, randomQuote, someAutoContinueThing);
        } else {
          //console.log(person);
          this.parent(person, text, someAutoContinueThing);
        }
      },
    });
  }
}
